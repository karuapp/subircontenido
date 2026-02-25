#!/bin/bash

# 
# system management

#######################################
# installs node
# Arguments:
#   None
#######################################
source "${PROJECT_ROOT}/config"
update_node_install() {
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
update_bd_update() {
  print_banner
  printf "${WHITE} 💻 Atualizando permisos de la base de datos...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  # Verifica se o contêiner está em execução
  if docker ps -q -f name=postgresql-$deploy_name; then
    docker exec -u root postgresql-$deploy_name bash -c "chown -R postgres-$deploy_name:postgres /var/lib/postgresql/data"
  else
    echo "el contenedor postgresql-$deploy_name no está funcionando. Verificar el estado del contenedor."
  fi
EOF

  sleep 2
}

#######################################
# stop all services
# Arguments:
#   None
#######################################
update_stop_pm2() {
  print_banner
  printf "${WHITE} 💻 Ahora, vayamos a los servicios en $deploy_name...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  pm2 stop all
EOF

  sleep 2
}

#######################################
# move update folder
# Arguments:
#   None
#######################################
update_mv_zpro() {
  print_banner
  printf "${WHITE} 💻 Ahora, pasemos la actualización a la $deploy_name...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cp "${PROJECT_ROOT}"/update.zip /home/$deploy_name/
EOF

  sleep 2
}

#######################################
# delete backend folder
# Arguments:
#   None
#######################################
update_delete_backend() {
  print_banner
  printf "${WHITE} 💻 Ahora, eliminemos el backend...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cd /home/$deploy_name/$deploy_name/backend || exit
  rm -rf node_modules
  rm -rf dist
  rm -f package.json
  rm -f package-lock.json
EOF

  sleep 2
}

#######################################
# delete frontend folder
# Arguments:
#   None
#######################################
update_delete_frontend() {
  print_banner
  printf "${WHITE} 💻 Ahora, eliminemos el frontend...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cd /home/$deploy_name/$deploy_name/frontend || exit
  find src -mindepth 1 -not -name 'App.vue' -not -name 'index.template.html' -exec rm -rf {} +
  rm -rf src-pwa
  rm -f public/POSTMAN_v2.json
  rm -f babel.config.js
  rm -f package.json
  rm -f quasar.conf.js
EOF

  sleep 2
}

#######################################
# delete frontend folder
# Arguments:
#   None
#######################################


#######################################
# unzip update
# Arguments:
#   None
#######################################
update_unzip_zpro() {
  print_banner
  printf "${WHITE} 💻 Descomprimiendo la actualización...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  unzip update.zip
EOF

  sleep 2
}

#######################################
# delete zip
# Arguments:
#   None
#######################################
update_delete_zip() {
  print_banner
  printf "${WHITE} 💻 Eliminemos el zip de actualización....${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cd /home/$deploy_name || exit
  rm -f update.zip
EOF

  sleep 2
}

#######################################
# installs node.js dependencies
# Arguments:
#   None
#######################################
update_backend_node_dependencies() {
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
# runs db migrate
# Arguments:
#   None
#######################################
update_backend_db_migrate() {
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
update_backend_db_seed() {
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
# installed node packages
# Arguments:
#   None
#######################################
update_frontend_node_dependencies() {
  print_banner
  printf "${WHITE} 💻 Instalando dependencias frontend...${GRAY_LIGHT}"
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
update_frontend_node_build() {
  print_banner
  printf "${WHITE} 💻 Compilando el código frontend...${GRAY_LIGHT}"
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
# stop all services
# Arguments:
#   None
#######################################
update_start_pm2() {
  print_banner
  printf "${WHITE} 💻 Ahora, reiniciemos los servicios en el $deploy_name...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  pm2 restart all
EOF

  sleep 2
}

#######################################
# creates final message
# Arguments:
#   None
#######################################
update_success() {
  print_banner
  printf "${GREEN} 💻 ¡Actualización completa!${NC}"
  printf "\n\n"
  printf "Si el sistema presenta alguna inestabilidad, revisa los retornos del proceso, buscando posibles inconsistencias o restaura tu copia de seguridad…"
  printf "\n"
  printf "${GREEN}FAQ: https://whatitan.com/${NC}"
  printf "\n"
  printf "${GREEN}Suporte: https://whatitan.com/${NC}"
  printf "\n"
  printf "${CYAN_LIGHT}";
  printf "${NC}";

  sleep 2
}