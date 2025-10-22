#!/bin/bash

source "${PROJECT_ROOT}/config"
# Función para comprobar si Redis se está ejecutando
check_redis_status() {
  print_banner
  printf "${WHITE} 💻 Comprobando el estado de Redis...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  systemctl status redis-server | grep "active (running)"
  if [ $? -eq 0 ]; then
    printf "${GREEN} Redis se está ejecutando!${NC}\n"
  else
    printf "${RED} ¡Redis no se está ejecutando! Comprobando registros...${NC}\n"
    journalctl -u redis-server.service -b | tail -n 20
  fi
EOF

  sleep 2
}

# Función para enumerar el contenedor Redis que se ejecuta en Docker y eliminarlo
docker_list_and_kill_redis() {
  print_banner
  printf "${WHITE} 💻 Listado y eliminación del contenedor Redis en Docker...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - root <<EOF
  docker ps | grep redis
  docker kill \$(docker ps | grep redis | awk '{print \$1}')
EOF

  sleep 2
}

# Función para leer el archivo .env y obtener la contraseña de Redis
get_redis_password() {
  print_banner
  printf "${WHITE} 💻 Leer el archivo .env y obtener la contraseña de Redis...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  redis_password=$(grep -oP '(?<=IO_REDIS_PASSWORD=).+' /home/$deploy_name/$deploy_name/backend/.env)
  echo "contraseña Redis: \$redis_password"
}

# Función para crear servicio Redis en Ubuntu
create_redis_service() {
  print_banner
  printf "${WHITE} 💻 Creando el servicio Redis en Ubuntu...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  get_redis_password

  sudo su - root <<EOF
  apt-get update
  apt-get install -y redis-server

  # Configurar la contraseña de Redis
  sed -i "s/^# requirepass .*/requirepass $redis_password/" /etc/redis/redis.conf

  # Configurar otras opciones requeridas
  sed -i "s/^supervised no/supervised systemd/" /etc/redis/redis.conf
  sed -i "s/^# appendonly .*/appendonly yes/" /etc/redis/redis.conf

  systemctl restart redis-server
  systemctl enable redis-server
EOF

  sleep 2
}

#######################################
# stop all services
# Arguments:
#   None
#######################################
redis_start_pm2() {
  print_banner
  printf "${WHITE} 💻 Agora, vamos reiniciar os serviços no $deploy_name...${GRAY_LIGHT}"
  printf "\n\n"

  sleep 2

  sudo su - $deploy_name <<EOF
  pm2 restart all
EOF

  sleep 2
}