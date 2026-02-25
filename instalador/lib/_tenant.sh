#!/bin/bash

# 
# functions for setting up app backend

#######################################
# copy zip
# Arguments:
#   None
#######################################
source "${PROJECT_ROOT}/config"
tenant_copy_zip() {
  print_banner
  printf "${WHITE} 💻 Ahora copiemos el tenant.zip...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cp "${PROJECT_ROOT}"/tenant.zip /home/$deploy_name/
EOF

  sleep 2
}


#######################################
# unzip tenant
# Arguments:
#   None
#######################################
tenant_unzip() {
  print_banner
  printf "${WHITE} 💻 Descomprimiendo tenant.zip...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  unzip tenant.zip
EOF

  sleep 2
}

#######################################
# sets environment variable for tenant.
# Arguments:
#   None
#######################################
tenant_set_env() {
  print_banner
  printf "${WHITE} 💻 Configurar variables de entorno...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  # ensure idempotency
  api_url=$(echo "${api_url/https:\/\/}")
  api_url=${api_url%%/*}
  api_url=https://$api_url

sudo su - $deploy_name <<EOF
  cat <<'[-]EOF' > /home/$deploy_name/$deploy_name/tenant/.env
API_BASE_URL=${api_url}
API_TOKEN='${tenant_token}'
[-]EOF
EOF

  sleep 2
}

#######################################
# installs node.js dependencies
# Arguments:
#   None
#######################################
tenant_install() {
  print_banner
  printf "${WHITE} 💻 Instalando dependencias tenant...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/tenant
  npm install
EOF

  sleep 2
}

#######################################
# starts tenant using pm2 in 
# production mode.
# Arguments:
#   None
#######################################
tenant_start_pm2() {
  print_banner
  printf "${WHITE} 💻 Iniciando pm2 (backend)...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  cd /home/$deploy_name/$deploy_name/tenant
  pm2 start server.js --name $deploy_name-tenant
  pm2 save
EOF

  sleep 2
}

#######################################
# updates frontend code
# Arguments:
#   None
#######################################
tenant_nginx_setup() {
  print_banner
  printf "${WHITE} 💻 Configurando nginx...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  tenant_hostname=$(echo "${tenant_url/https:\/\/}")

sudo su - root << EOF

cat > /etc/nginx/sites-available/$deploy_name-tenant << 'END'
server {
  server_name $tenant_hostname;

  location / {
    proxy_pass http://127.0.0.1:3101;
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

ln -s /etc/nginx/sites-available/$deploy_name-tenant /etc/nginx/sites-enabled
EOF

  sleep 2
}

#######################################
# delete zip
# Arguments:
#   None
#######################################
tenant_delete_zip() {
  print_banner
  printf "${WHITE} 💻 eliminemos el zip tenant...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  cd /home/$deploy_name || exit
  rm -f tenant.zip
EOF

  sleep 2
}

#######################################
# installs nginx
# Arguments:
#   None
#######################################
tenant_certbot_setup() {
  print_banner
  printf "${WHITE} 💻 Configurando certbot...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  tenant_domain=$(echo "${tenant_url/https:\/\/}")

  sudo su - root <<EOF
  certbot -m $deploy_email \
          --nginx \
          --agree-tos \
          --non-interactive \
          --domains $tenant_domain
EOF

  sleep 2
}

#######################################
# creates final message
# Arguments:
#   None
#######################################
tenant_success() {
  print_banner
  printf "${GREEN} 💻 Instalación completa!${NC}"
  printf "\n\n"
  printf "URL Tenant: https://$tenant_domain"
  printf "\n"
  printf "${GREEN}FAQ: https://whatitan.com/${NC}"
  printf "\n"
  printf "${GREEN}Suporte: https://whatitan.com/${NC}"
  printf "\n"
  printf "${CYAN_LIGHT}";
  printf "${NC}";

  sleep 2
}