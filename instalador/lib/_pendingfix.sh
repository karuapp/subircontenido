#!/bin/bash

# 
# system management

#######################################
# installs node
# Arguments:
#   None
#######################################
source "${PROJECT_ROOT}/config"
pending_node_install() {
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
# stop all services
# Arguments:
#   None
#######################################
pending_stop_pm2() {
  print_banner
  printf "${WHITE} 💻 Ahora, pasemos a los servicios en $deploy_name...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  pm2 stop all
EOF

  sleep 2
}

#######################################
# move fix folder
# Arguments:
#   None
#######################################
pending_mv_fix() {
  print_banner
  printf "${WHITE} 💻 Ahora, traslademos la migración al $deploy_name...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cp "${PROJECT_ROOT}"/fix.zip /home/$deploy_name/
EOF

  sleep 2
}

#######################################
# delete service file
# Arguments:
#   None
#######################################
pending_delete_service() {
  print_banner
  printf "${WHITE} 💻 Ahora, eliminemos el servicio de envío....${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cd /home/$deploy_name/$deploy_name/backend/dist/services/WbotServices || exit
  rm -f SendMessagesSystemWbot.ts
EOF

  sleep 2
}

#######################################
# unzip fix
# Arguments:
#   None
#######################################
pending_unzip_fix() {
  print_banner
  printf "${WHITE} 💻 Descomprimiendo la migración...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  unzip fix.zip
EOF

  sleep 2
}

#######################################
# delete zip
# Arguments:
#   None
#######################################
pending_delete_zip() {
  print_banner
  printf "${WHITE} 💻 Eliminemos el zip de reparación....${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cd /home/$deploy_name || exit
  rm -f fix.zip
EOF

  sleep 2
}

#######################################
# stop all services
# Arguments:
#   None
#######################################
pending_restart_pm2() {
  print_banner
  printf "${WHITE} 💻 Ahora, reiniciemos los servicios en el $deploy_name...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  pm2 restart all
EOF

  sleep 2
}