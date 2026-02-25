import { register } from "register-service-worker";

register(`${process.env.SERVICE_WORKER_FILE}`, {
  ready() {
    console.log("✅ El Service Worker está activo y listo para Web Push.");
  },
  registered() {
    console.log("✅ ¡El Service Worker se registró correctamente!");
  },
  cached() {
    console.log("⚡ La PWA se almacenó en caché para uso sin conexión.");
  },
  updatefound() {
    console.log("🔄 Se encontró un nuevo Service Worker. Actualizando....");
  },
  updated() {
    console.log("🔄 Nuevo contenido disponible, actualiza la página.");
    window.location.reload(true);
  },
  offline() {
    console.log("⚠️ Sin conexión a internet. La aplicación funciona sin conexión.");
  },
  error(error) {
    console.error("❌ Error del Service Worker:", error);
  },
});
