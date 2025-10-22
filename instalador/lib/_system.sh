#!/bin/bash

# 
# system management

#######################################
# creates user
# Arguments:
#   None 
#######################################
source "${PROJECT_ROOT}/config"
system_create_user() {
  print_banner
  printf "${WHITE} 💻 Ahora, creemos el usuario para implementar....${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  useradd -m -p $(openssl passwd $deploy_name) -s /bin/bash -G sudo $deploy_name
  usermod -aG sudo $deploy_name
  cp "${PROJECT_ROOT}"/script.zip /home/$deploy_name/
EOF

  sleep 2
}

#######################################
# set timezone
# Arguments:
#   None
#######################################
system_set_timezone() {
  print_banner
  printf "${WHITE} 💻 Configuración de zona horaria...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  timedatectl set-timezone $time_zone
EOF

  sleep 2
}

#######################################
# unzip crm
# Arguments:
#   None
#######################################
system_unzip_crm() {
  print_banner
  printf "${WHITE} 💻 Desempaquetando script...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  unzip script.zip
  mv crm $deploy_name
EOF

  sleep 2
}

#######################################
# updates system
# Arguments:
#   None
#######################################
system_update() {
  print_banner
  printf "${WHITE} 💻 Vamos actualizar el sistema...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  apt -y update && apt -y upgrade
EOF

  sleep 2
}

#######################################
# installs node
# Arguments:
#   None
#######################################
source "${PROJECT_ROOT}/config"

system_create_user() {
  print_banner
  printf "${WHITE} 💻 Ahora, creemos el usuario para implementar....${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  # Crear usuario con contraseña igual al nombre
  sudo useradd -m -s /bin/bash -G sudo "$deploy_name"

  # Establecer contraseña
  echo "$deploy_name:$deploy_name" | sudo chpasswd

  # Copiar el archivo script.zip al home del nuevo usuario
  sudo cp "${PROJECT_ROOT}/script.zip" "/home/$deploy_name/"

  # Cambiar propietario del archivo copiado
  sudo chown "$deploy_name:$deploy_name" "/home/$deploy_name/script.zip"

  sleep 2
}


#######################################
# installs docker
# Arguments:
#   None
#######################################
system_docker_install() {
  print_banner
  printf "${WHITE} 💻 Instalando docker...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  apt install -y apt-transport-https \
                 ca-certificates curl \
                 software-properties-common
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
  apt install -y docker-ce
EOF

  sleep 2
}

#######################################
# Ask for file location containing
# multiple URL for streaming.
# Globals:
#   WHITE
#   GRAY_LIGHT
#   BATCH_DIR
#   PROJECT_ROOT
# Arguments:
#   None
#######################################
system_puppeteer_dependencies() {
  print_banner
  printf "${WHITE} 💻 Instalando puppeteer dependencias...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  apt-get install -y libxshmfence-dev \
                      libgbm-dev \
                      wget \
                      unzip \
                      fontconfig \
                      locales \
                      gconf-service \
                      libasound2 \
                      libatk1.0-0 \
                      libc6 \
                      libcairo2 \
                      libcups2 \
                      libdbus-1-3 \
                      libexpat1 \
                      libfontconfig1 \
                      libgcc1 \
                      libgconf-2-4 \
                      libgdk-pixbuf2.0-0 \
                      libglib2.0-0 \
                      libgtk-3-0 \
                      libnspr4 \
                      libpango-1.0-0 \
                      libpangocairo-1.0-0 \
                      libstdc++6 \
                      libx11-6 \
                      libx11-xcb1 \
                      libxcb1 \
                      libxcomposite1 \
                      libxcursor1 \
                      libxdamage1 \
                      libxext6 \
                      libxfixes3 \
                      libxi6 \
                      libxrandr2 \
                      libxrender1 \
                      libxss1 \
                      libxtst6 \
                      ca-certificates \
                      fonts-liberation \
                      libappindicator1 \
                      libnss3 \
                      lsb-release \
                      xdg-utils \
                      git \
                      libssl-dev
EOF

  sleep 2
}

#######################################
# install libs
# Arguments:
#   None
#######################################
system_libs() {
  print_banner
  printf "${WHITE} 💻 Vamos actualizar el sistema...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  apt-add-repository universe
  apt install -y python2-minimal
  apt-get install -y build-essential
  apt -y update && apt -y upgrade
  apt install unzip -y
EOF

  sleep 2
}

#######################################
# installs pm2
# Arguments:
#   None
#######################################
system_pm2_install() {
  print_banner
  printf "${WHITE} 💻 Instalando pm2...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  npm install -g pm2
  pm2 startup ubuntu -u $deploy_name
  env PATH=\$PATH:/usr/bin pm2 startup ubuntu -u $deploy_name --hp /home/$deploy_name
EOF

  sleep 2
}

#######################################
# installs snapd
# Arguments:
#   None
#######################################
system_snapd_install() {
  print_banner
  printf "${WHITE} 💻 Instalando snapd...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  apt install -y snapd
  snap install core
  snap refresh core
EOF

  sleep 2
}

#######################################
# installs certbot
# Arguments:
#   None
#######################################
system_certbot_install() {
  print_banner
  printf "${WHITE} 💻 Instalando certbot...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  apt-get remove certbot
  snap install --classic certbot
  ln -s /snap/bin/certbot /usr/bin/certbot
EOF

  sleep 2
}

#######################################
# installs nginx
# Arguments:
#   None
#######################################
system_nginx_install() {
  print_banner
  printf "${WHITE} 💻 Instalando nginx...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  apt install -y nginx
  rm /etc/nginx/sites-enabled/default
EOF

  sleep 2
}

#######################################
# install_chrome
# Arguments:
#   None
#######################################
system_set_user_mod() {
  print_banner
  printf "${WHITE} 💻 Vamos a actualizar el sistema...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  sudo usermod -aG docker $deploy_name
  su - $deploy_name
EOF

  sleep 2
}

#######################################
# restarts nginx
# Arguments:
#   None
#######################################
system_nginx_restart() {
  print_banner
  printf "${WHITE} 💻 reiniciando nginx...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  service nginx restart
EOF

  sleep 2
}

#######################################
# setup for nginx.conf
# Arguments:
#   None
#######################################
system_nginx_conf() {
  print_banner
  printf "${WHITE} ¿Es la primera instalación?${GRAY_LIGHT}"
  printf "\n\n"
  printf "  [1] Sí, es la primera instalación\n"
  printf "  [2] No, ya está instalado\n"
  printf "\n"
  read -p "> " is_first_install

  if [[ "$is_first_install" == "1" ]]; then
    print_banner
    printf "${WHITE} 💻 Configurando Nginx...${GRAY_LIGHT}"
    printf "\n\n"
    
    sleep 2

    sudo su - root << EOF
cat > /etc/nginx/conf.d/$deploy_name.conf << 'END'
client_max_body_size 64M;
large_client_header_buffers 4 16k;
client_body_buffer_size 16k;
proxy_buffer_size 32k;
proxy_buffers 8 32k;
END
EOF

    sleep 2
  else
    printf "${GREEN} ✅ Saltando configuración de Nginx...${NC}\n"
  fi
}

#######################################
# installs nginx
# Arguments:
#   None
#######################################
system_certbot_setup() {
  print_banner
  printf "${WHITE} 💻 Configurando certbot...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  backend_domain=$(echo "${backend_url/https:\/\/}")
  frontend_domain=$(echo "${frontend_url/https:\/\/}")
  admin_domain=$(echo "${admin_url/https:\/\/}")

  sudo su - root <<EOF
  certbot -m $deploy_email \
          --nginx \
          --agree-tos \
          --non-interactive \
          --domains $backend_domain,$frontend_domain
EOF

  sleep 2
}

#######################################
# reboot
# Arguments:
#   None
#######################################
system_reboot() {
  print_banner
  printf "${WHITE} 💻 Reboot...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  reboot
EOF

  sleep 2
}

#######################################
# creates docker db
# Arguments:
#   None
#######################################
system_docker_start() {
  print_banner
  printf "${WHITE} 💻 Iniciando container docker...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  docker stop $(docker ps -q)
  docker container start postgresql-$deploy_name
  docker container start redis-$deploy_name
EOF

  sleep 2
}

#######################################
# creates docker db
# Arguments:
#   None
#######################################
system_docker_restart() {
  print_banner
  printf "${WHITE} 💻 Iniciando container docker...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  docker container restart portainer-$deploy_name
  docker container restart postgresql-$deploy_name
EOF

  sleep 10
}

#######################################
# delete zip
# Arguments:
#   None
#######################################
system_delete_zip() {
  print_banner
  printf "${WHITE} 💻 Vamos eliminar el zip de actualizacion...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cd /home/$deploy_name || exit
  rm -f script.zip
EOF

  sleep 2
}

#######################################
# creates final message
# Arguments:
#   None
#######################################
system_success() {
  print_banner
  printf "${GREEN} 💻 Instalación completada exitosamente...${NC}"
  printf "${CYAN_LIGHT}";
  printf "\n\n"
  printf "SuperAdmin: superadmin@whatitan.com"
  printf "\n"
  printf "Contraseña: 123456"
  printf "\n"
  printf "Usuario: admin@whatitan.com"
  printf "\n"
  printf "Contraseña: 123456"
  printf "\n"
  printf "URL front: https://$frontend_domain"
  printf "\n"
  printf "URL back: https://$backend_domain"
  printf "\n"
  printf "Acceso a Portainer: http://ip.da.vps:9000"
  printf "\n"
  printf "Contraseña de usuario Deploy: $deploy_name"
  printf "\n"
  printf "Usuario de base de datos: $deploy_name"
  printf "\n"
  printf "Nombre de la base de datos: $deploy_name"
  printf "\n"
  printf "Contraseña de la base de datos: $pg_pass"
  printf "\n"
  printf "contraseña de redis: $redis_pass"
  printf "\n"
  printf "${NC}";

  sleep 2
}