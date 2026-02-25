#!/bin/bash

# 
# system management

#######################################
# installs node
# Arguments:
#   None
#######################################
source "${PROJECT_ROOT}/config"
migration_node_install() {
  print_banner
  printf "${WHITE} 💻 Instalando nodejs...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  apt-get install -y nodejs
EOF

  sleep 2
}

#######################################
# installs node
# Arguments:
#   None
#######################################
migration_bd_update() {
  print_banner
  printf "${WHITE} 💻 Atualizando permisos de base de datos...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  # Comprueba si el contenedor se está ejecutando.
  if docker ps -q -f name=postgresql-$deploy_name; then
    docker exec -u root postgresql-$deploy_name bash -c "chown -R postgres-$deploy_name:postgres /var/lib/postgresql/data"
  else
    echo "El contenedor postgresql-$deploy_name no se está ejecutando. Verificar el estado del contenedor."
  fi
EOF

  sleep 2
}

#######################################
# stop all services
# Arguments:
#   None
#######################################
migration_stop_pm2() {
  print_banner
  printf "${WHITE} 💻 Ahora, pasemos a los servicios en $deploy_name...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  pm2 delete all
EOF

  sleep 2
}

#######################################
# move migration folder
# Arguments:
#   None
#######################################
migration_mv_zpro() {
  print_banner
  printf "${WHITE} 💻 Agora, vamos mover a migration até o $deploy_name...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cp "${PROJECT_ROOT}"/script.zip /home/$deploy_name/
  mv /home/$deploy_name/izing.io /home/$deploy_name/$deploy_name
EOF

  sleep 2
}

#######################################
# delete backend folder
# Arguments:
#   None
#######################################
migration_delete_backend() {
  print_banner
  printf "${WHITE} 💻 Ahora, eliminemos el backend...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cd /home/$deploy_name/$deploy_name/backend || exit
  rm -rf .wwebjs_auth
  rm -rf .wwebjs_cache
  rm -rf dist
  rm -f package.json
EOF

  sleep 2
}

#######################################
# delete frontend folder
# Arguments:
#   None
#######################################
migration_delete_frontend() {
  print_banner
  printf "${WHITE} 💻 Ahora, eliminemos el frontend...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cd /home/$deploy_name/$deploy_name/frontend || exit
  rm -rf src
  rm -rf public
  rm -f package.json
  rm -f quasar.conf.js
EOF

  sleep 2
}

#######################################
# unzip migration
# Arguments:
#   None
#######################################
migration_unzip_zpro() {
  print_banner
  printf "${WHITE} 💻 Descomprimiendo la migración...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  unzip script.zip
EOF

  sleep 2
}

#######################################
# delete zip
# Arguments:
#   None
#######################################
migration_delete_zip() {
  print_banner
  printf "${WHITE} 💻 Eliminemos el zip de migración....${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cd /home/$deploy_name || exit
  rm -f script.zip
EOF

  sleep 2
}

#######################################
# installs node.js dependencies
# Arguments:
#   None
#######################################
migration_backend_node_dependencies() {
  print_banner
  printf "${WHITE} 💻 Instalando dependências do backend...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/backend
  npm install --force
EOF

  sleep 2
}

#######################################
# runs db migrate
# Arguments:
#   None
#######################################
migration_backend_db_migrate() {
  print_banner
  printf "${WHITE} 💻 Ejecutando db:migrate...${GRAY_LIGHT}"
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
migration_backend_db_seed() {
  print_banner
  printf "${WHITE} 💻 Ejecutando db:seed...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/backend
  npx sequelize db:seed:all
EOF

  sleep 2
}

#######################################
# starts backend using pm2 in 
# production mode.
# Arguments:
#   None
#######################################
migration_backend_start_pm2() {
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
# installed node packages
# Arguments:
#   None
#######################################
migration_frontend_node_dependencies() {
  print_banner
  printf "${WHITE} 💻 Instalando dependencias de frontend...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/frontend
  npm install --force
EOF

  sleep 2
}

#######################################
# compiles frontend code
# Arguments:
#   None
#######################################
migration_frontend_node_build() {
  print_banner
  printf "${WHITE} 💻 Compilando el código del frontend...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/frontend
  export NODE_OPTIONS=--openssl-legacy-provider
  npx quasar build -P -m pwa
EOF

  sleep 2
}

#######################################
# starts frontend using pm2 in 
# production mode.
# Arguments:
#   None
#######################################
migration_frontend_start_pm2() {
  print_banner
  printf "${WHITE} 💻 Iniciando pm2 (backend)...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/frontend
  pm2 start server.js --name $deploy_name-frontend
  pm2 save
EOF

  sleep 2
}


#######################################
# creates final message
# Arguments:
#   None
#######################################
migration_success() {
  print_banner
  printf "${GREEN} 💻 Migración completa${NC}"
  printf "\n\n"
  printf "Si el sistema presenta alguna inestabilidad, revisa los retornos del proceso, buscando posibles inconsistencias o restaura tu copia de seguridad...."
  printf "\n"
  printf "${GREEN}FAQ: https://whatitan.com/${NC}"
  printf "\n"
  printf "${GREEN}Suporte: https://whatitan.com/${NC}"
  printf "\n"
  printf "${CYAN_LIGHT}";
  printf "${NC}";

  sleep 2
}