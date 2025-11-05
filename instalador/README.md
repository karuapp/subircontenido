===================================================
## CRM WHATSAPP ##
===================================================

## CREA SUBDOMINIO Y APUNTA A TU IP VPS ##

FRONTEND_URL: app.dominio.com
BACKEND_URL:  api.dominio.com


## VERIFICAR LA PROPAGACIÓN DEL DOMINIO ##

https://dnschecker.org/

## COPIAR LA CARPETA PARA ROOT Y EJECUTAR LOS COMANDOS A CONTINUACIÓN ##
```bash
#eliminar las notificaciones interactivas
sudo bash -c 'echo "debconf debconf/frontend select Noninteractive" | debconf-set-selections'
export DEBIAN_FRONTEND=noninteractive
export DEBCONF_NONINTERACTIVE_SEEN=true
export APT_LISTCHANGES_FRONTEND=none
export NEEDRESTART_MODE=a

#actualiza el servidor
sudo apt-get update -y

#instala node y apt
apt update
apt install curl gnupg -y
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
apt install git

#confrima la version 20 de node y 10 de apt
node -v
npm -v

# si va subir por github use este comando caso contrario siga al siguiente comando
git clone https://github.com/USER/instalador

#dale permisos a la carpeta y los archivos para ejecutarse
sudo chmod +x ./instalador/install
cd ./instalador
sudo ./install
```
===================================================
