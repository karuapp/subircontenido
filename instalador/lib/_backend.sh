#!/bin/bash

# 
# functions for setting up app backend

#######################################
# creates docker db
# Arguments:
#   None
#######################################
source "${PROJECT_ROOT}/config"
backend_db_create() {
  print_banner
  printf "${WHITE} 💻 Creando contenedores y base de datos...${GRAY_LIGHT}\n\n"
  sleep 2

  sudo su - root <<EOF

  # Agregar deploy_name al grupo docker
  usermod -aG docker $deploy_name

  # --- Crear red Docker si no existe ---
  docker network create whatsappworks_net 2>/dev/null || true

  # --- PostgreSQL ---
  docker rm -f postgresql-$deploy_name 2>/dev/null || true
  docker volume create pgdata_$deploy_name 2>/dev/null || true

  docker run --name postgresql-$deploy_name \
        --network whatsappworks_net \
        -e POSTGRES_USER=$deploy_name \
        -e POSTGRES_PASSWORD=$deploy_name \
        -e POSTGRES_DB=$deploy_name \
        -e TZ="$time_zone" \
        -p $pg_port:5432 \
        --restart=always \
        -v pgdata_$deploy_name:/var/lib/postgresql/data \
        -d postgres

  # --- Redis ---
  docker rm -f redis-$deploy_name 2>/dev/null || true
  docker run --name redis-$deploy_name \
        --network whatsappworks_net \
        -e TZ="$time_zone" \
        -p $redis_port:6379 \
        --restart=always \
        -d redis:latest redis-server \
        --appendonly yes \
        --requirepass "${redis_pass}"

  # --- Portainer ---
  docker rm -f portainer-$deploy_name 2>/dev/null || true
  docker volume create portainer_data 2>/dev/null || true
  docker run -d --name portainer-$deploy_name \
        --network whatsappworks_net \
        -p $portainer_port:9000 -p $portainer_port2:9443 \
        --restart=always \
        -v /var/run/docker.sock:/var/run/docker.sock \
        -v portainer_data:/data portainer/portainer-ce

EOF

  sleep 2
  printf "${GREEN} ✅ Contenedores creados correctamente.${NC}\n"
}

#######################################
# install_chrome
# Arguments:
#   None
#######################################
backend_chrome_install() {
  print_banner
  printf "${WHITE} 💻 Vamos actualizar el sistema...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2
 
  sudo su - root <<EOF
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
  wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
  apt-get update
  apt-get install -y google-chrome-stable
EOF

  sleep 2
}

#######################################
# sets environment variable for backend.
# Arguments:
#   None
#######################################
backend_set_env() {
  print_banner
  printf "${WHITE} 💻 Configurar variables de entorno (backend)...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2
  
  # Gerar senhas aleatórias
  pg_pass=$(openssl rand -base64 32)
  redis_pass=$(openssl rand -base64 32)

  # Salvar as senhas em um arquivo para reutilização
  cat << EOF > "${PROJECT_ROOT}"/db_credentials
pg_pass=${pg_pass}
redis_pass=${redis_pass}
EOF

  # ensure idempotency
  backend_url=$(echo "${backend_url/https:\/\/}")
  backend_url=${backend_url%%/*}
  backend_url=https://$backend_url

  # ensure idempotency
  frontend_url=$(echo "${frontend_url/https:\/\/}")
  frontend_url=${frontend_url%%/*}
  frontend_url=https://$frontend_url
  
  # Generate dynamic secrets
  jwt_secret=$(openssl rand -base64 32)
  jwt_refresh_secret=$(openssl rand -base64 32)

sudo su - $deploy_name << EOF
  cat <<[-]EOF > /home/$deploy_name/$deploy_name/backend/.env
NODE_ENV=
BACKEND_URL=${backend_url}
FRONTEND_URL=${frontend_url}
ADMIN_DOMAIN=crm.com

PROXY_PORT=443
PORT=$backend_port

# conexión de base de datos
DB_DIALECT=postgres
DB_PORT=$pg_port
DB_TIMEZONE=00:00
POSTGRES_HOST=localhost
POSTGRES_USER=$deploy_name
POSTGRES_PASSWORD=$deploy_name
POSTGRES_DB=$deploy_name

# Claves para el cifrado token jwt
JWT_SECRET=${jwt_secret}
JWT_REFRESH_SECRET=${jwt_refresh_secret}

# Datos de conexión con el REDIS
IO_REDIS_SERVER=localhost
IO_REDIS_PASSWORD=${redis_pass}
IO_REDIS_PORT=$redis_port
IO_REDIS_DB_SESSION=2

#CHROME_BIN=/usr/bin/google-chrome
CHROME_BIN=/usr/bin/google-chrome-stable

# tiempo para la aleatorización del mensaje de horario de apertura
MIN_SLEEP_BUSINESS_HOURS=1000
MAX_SLEEP_BUSINESS_HOURS=2000

# Es hora de aleatorizar los mensajes del bot.
MIN_SLEEP_AUTO_REPLY=400
MAX_SLEEP_AUTO_REPLY=600

# tiempo para la aleatorización de mensajes generales
MIN_SLEEP_INTERVAL=200
MAX_SLEEP_INTERVAL=500

# Datos de RabbitMQ / Para no usarlos, simplemente comente la var AMQP_URL
# RABBITMQ_DEFAULT_USER=$deploy_name
# RABBITMQ_DEFAULT_PASS=${rabbit_pass}
# AMQP_URL='amqp://$deploy_name:${rabbit_pass}@localhost:5672?connection_attempts=5&retry_delay=5'

# API oficial (integración en el desarrollo)
API_URL_360=https://waba-sandbox.360dialog.io

# Se utiliza para mostrar opciones que normalmente no están disponibles.
ADMIN_DOMAIN=crm.com

# Datos por utilizar el canal de Facebook
FACEBOOK_APP_ID=3237415623
FACEBOOK_APP_SECRET_KEY=3266214132b8c98ac59f3e957a5e

# Limite el uso y las conexiones de crm
USER_LIMIT=99
CONNECTIONS_LIMIT=99
[-]EOF
EOF

  sleep 2
}

#######################################
# installs node.js dependencies
# Arguments:
#   None
#######################################
backend_node_dependencies() {
  print_banner
  printf "${WHITE} 💻 Instalando dependencias backend...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/backend
  npm install --force
EOF

  sleep 2
}



#######################################
# compiles backend code
# Arguments:
#   None
#######################################
backend_node_build() {
  print_banner
  printf "${WHITE} 💻 Compilando el código backend...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/backend
  npm run build
EOF

  sleep 2
}

#######################################
# updates frontend code
# Arguments:
#   None
#######################################
backend_update() {
  print_banner
  printf "${WHITE} 💻 Actualizando el backend...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/backend
  pm2 stop all
  npm r whatsapp-web.js
  npm i whatsapp-web.js
  pm2 restart all
EOF

  sleep 2
}

#######################################
# runs db migrate
# Arguments:
#   None
#######################################
backend_db_migrate() {
  print_banner
  printf "${WHITE} 💻 Correr db:migrate...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/backend
  npx sequelize db:migrate
EOF

  sleep 2
}

#######################################
# runs db seed
# Arguments:
#   None
#######################################
backend_db_seed() {
  print_banner
  printf "${WHITE} 💻 Correr db:seed...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/backend
  npx sequelize db:seed:all
EOF

  sleep 2
}


#######################################
# create User admin and super admin
# Arguments:
#   None
#######################################



#######################################
# starts backend using pm2 in 
# production mode.
# Arguments:
#   None
#######################################
backend_start_pm2() {
  print_banner
  printf "${WHITE} 💻 Iniciando pm2 (backend)...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/backend
  pm2 start dist/server.js --name $deploy_name-backend
  pm2 save
EOF

  sleep 2
}

#######################################
# installs node
# Arguments:
#   None
#######################################
backend_bd_update() {
  print_banner
  printf "${WHITE} 💻 Actualizando permisos banco...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  # Comprueba si el contenedor se está ejecutando.
  if docker ps -q -f name=postgresql-$deploy_name; then
    docker exec -u root postgresql-$deploy_name bash -c "chown -R postgres:postgres /var/lib/postgresql/data"
  else
    echo "El contenedor postgresql no se está ejecutando. Verificar el estado del contenedor."
  fi
EOF

  sleep 2
}

#######################################
# updates frontend code
# Arguments:
#   None
#######################################
backend_nginx_setup() {
  print_banner
  printf "${WHITE} 💻 Configurando nginx (backend)...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  backend_hostname=$(echo "${backend_url/https:\/\/}")

sudo su - root << EOF

cat > /etc/nginx/sites-available/$deploy_name-backend << 'END'
server {
  server_name $backend_hostname;

  location / {
    proxy_pass http://127.0.0.1:$backend_port;
    proxy_http_version 1.1;
    proxy_set_header Upgrade \$http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-Proto \$scheme;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_cache_bypass \$http_upgrade;
  }
}
END

ln -s /etc/nginx/sites-available/$deploy_name-backend /etc/nginx/sites-enabled
EOF

  sleep 2
}
