const backendErrors = {
  ERR_NO_DEF_WAPP_FOUND:
    'No se encontró ningún WhatsApp predeterminado. Consulta la página de conexiones.',
  ERR_WAPP_NOT_INITIALIZED:
    'Esta sesión de WhatsApp no se ha inicializado. Consulta la página de conexiones.',
  ERR_WAPP_INITIALIZED:
    'No conectado a Whatsapp. Estamos reiniciando la conexión. Inténtelo de nuevo en unos segundos.',
  ERR_WAPP_CHECK_CONTACT:
    'No se puede verificar el contacto de WhatsApp. Consulta la página de conexiones.',
  ERR_WAPP_INVALID_CONTACT: 'Este no es un número de WhatsApp válido.',
  ERR_WAPP_DOWNLOAD_MEDIA:
    'No se pueden descargar medios de WhatsApp. Consulta la página de conexiones.',
  ERR_INVALID_CREDENTIALS:
    'Error de autenticación. Por favor inténtalo de nuevo.',
  ERR_LIMIT_MAX:
    'Error de autenticación. Inténtelo de nuevo en 1 minuto.',
  ERR_SENDING_WAPP_MSG:
    'Error al enviar mensaje de WhatsApp. Consulta la página de conexiones.',
  ERR_DELETE_WAPP_MSG: 'No se puede eliminar el mensaje de WhatsApp.',
  ERR_OTHER_OPEN_TICKET: 'Ya existe un Ticket abierto para este contacto.',
  ERR_SESSION_EXPIRED: 'La sesión expiró. Por favor inicia sesión.',
  ERR_USER_CREATION_DISABLED:
    'El administrador ha desactivado la creación de usuarios.',
  ERR_NO_PERMISSION: 'No tienes permiso para acceder a este recurso.',
  ERR_DUPLICATED_CONTACT: 'Ya existe un contacto con este número.',
  ERR_NO_SETTING_FOUND: 'No se encontró ninguna configuración con este ID.',
  ERR_NO_CONTACT_FOUND: 'No se encontraron contactos con este ID.',
  ERR_NO_TICKET_FOUND: 'No se encontraron boletos con este ID.',
  ERR_NO_USER_FOUND: 'No se encontraron usuarios con este ID.',
  ERR_NO_WAPP_FOUND: 'No se encontró ningún WhatsApp con este ID.',
  ERR_CREATING_MESSAGE: 'Error al crear mensaje en la base de datos.',
  ERR_CREATING_TICKET: 'Error al crear Ticket en la base de datos.',
  ERR_FETCH_WAPP_MSG: 'Error al buscar el mensaje en WhtasApp, quizás sea demasiado antiguo.',
  ERR_TENANT_INACTIVE: 'El acceso de la empresa está inactivo.',
  ERR_ASAAS_OVERDUE: 'Consulta el estado de tu plan'
}

export default backendErrors
