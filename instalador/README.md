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
sudo apt-get update -y

apt update
apt install curl gnupg -y
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
apt install git

node -v
npm -v

git clone https://github.com/USER/instalador

sudo chmod +x ./instalador/install
cd ./instalador
sudo ./install
```
===================================================
