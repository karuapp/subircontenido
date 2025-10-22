#!/bin/bash

# Atualização do sistema para múltiplas instalações de zpro.io

#######################################
# Percorre todas as instalações dentro de /home/$deploy_name/
# e executa a atualização para cada pasta $deploy_name encontrada.
#######################################
source "${PROJECT_ROOT}/config"
update_all_instances() {
  for instance in /home/$deploy_name/*/$deploy_name; do
    if [ -d "$instance" ]; then
      echo "\n🚀 Actualizando: $instance"
      update_instance "$instance"
    fi
  done
}

#######################################
# Ejecuta la actualización en una instancia específica.
# Arguments:
#   $1 - Caminho da instância (ex: /home/$deploy_name/install1/$deploy_name)
#######################################
update_instance() {
  local INSTANCE_PATH="$1"

  print_banner
  printf "${WHITE} 💻 Actualizando instancia en $INSTANCE_PATH...${GRAY_LIGHT}\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  pm2 stop all
EOF

  sleep 2

  sudo su - root <<EOF
  cp "${PROJECT_ROOT}"/update.zip "$INSTANCE_PATH/.."
EOF

  sleep 2

  sudo su - root <<EOF
  cd "$INSTANCE_PATH/backend" || exit
  rm -rf node_modules dist package.json package-lock.json
EOF

  sleep 2

  sudo su - root <<EOF
  cd "$INSTANCE_PATH/frontend" || exit
  find src -mindepth 1 -not -name 'App.vue' -not -name 'index.template.html' -exec rm -rf {} +
  rm -rf src-pwa public/POSTMAN_v2.json babel.config.js package.json quasar.conf.js
EOF

  sleep 2

  sudo su - root <<EOF
  cd "$INSTANCE_PATH/.." || exit
  unzip update.zip
  rm -f update.zip
EOF

  sleep 2

  sudo su - $deploy_name <<EOF
  cd "$INSTANCE_PATH/backend"
  npm install --force
  npx sequelize db:migrate
EOF

  sleep 2

  sudo su - $deploy_name <<EOF
  cd "$INSTANCE_PATH/frontend"
  npm install --force
  export NODE_OPTIONS=--openssl-legacy-provider
  npx quasar build -P -m pwa
EOF

  sleep 2

  sudo su - $deploy_name <<EOF
  pm2 restart all
EOF

  sleep 2

  print_banner
  printf "${GREEN} ✅ Actualización completada para $INSTANCE_PATH${NC}\n"
}

#######################################
# Ejecuta la actualización para todas las instancias.
#######################################
update_all_instances
