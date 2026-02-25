const errors = [
  {
    error: 'ERR_SESSION_EXPIRED',
    description: 'Tu conexión ha agotado el tiempo de espera.',
    detail: 'La validez de su conexión ha caducado. Se requiere un nuevo inicio de sesión.'
  },
  {
    error: 'ERR_API_CONFIG_NOT_FOUND',
    description: 'Configuración de API no encontrada.',
    detail: 'Actualiza la página y vuelve a intentarlo. Si el error persiste, comuníquese con el soporte.'
  },
  // {
  //   error: 'ERR_CREATING_MESSAGE',
  //   description: 'Problemas al crear el mensaje vía API.',
  //   detail: 'Compruebe que se haya enviado toda la información requerida. Inténtalo de nuevo y si el error persiste contacta con soporte.'
  // },
  {
    error: 'ERR_NO_CONTACT_FOUND',
    description: 'Contacto no encontrado en el sistema.',
    detail: 'Compruebe si el número está guardado correctamente en el sistema o registre el contacto.'
  },
  {
    error: 'ERR_DUPLICATED_CONTACT',
    description: 'Contacto ya registrado en el sistema.',
    detail: 'Localiza el contacto ya registrado.'
  },
  {
    error: 'ERR_CONTACT_TICKETS_REGISTERED',
    description: 'El contacto no se puede eliminar.',
    detail: 'El contacto tiene servicios registrados y no se puede eliminar para garantizar la integridad de la información.'
  },
  {
    error: 'ERR_CREATING_MESSAGE',
    description: 'El mensaje no fue creado.',
    detail: 'Comprueba si la conexión a Whatsapp está activa o si el mensaje no viola los términos de WhatsApp.'
  },
  {
    error: 'ERR_NO_TICKET_FOUND',
    description: 'Servicio no localizado.',
    detail: 'No pudimos encontrar el servicio prestado. Actualiza la página (F5) y vuelve a intentarlo. Consulte con soporte si el error persiste'
  },
  {
    error: 'ERR_AUTO_REPLY_RELATIONED_TICKET',
    description: 'No es posible eliminar el registro.',
    detail: 'El flujo ya se ha utilizado en varios servicios.'
  },
  {
    error: 'ERR_NO_AUTO_REPLY_FOUND',
    description: 'Flujo informado no encontrado.',
    detail: 'Compruebe si la transmisión realmente existe. Actualiza la página y vuelve a intentarlo.'
  },
  {
    error: 'ERR_NO_STEP_AUTO_REPLY_FOUND',
    description: 'No hay ubicación de paso para el flujo.',
    detail: 'Consulta los pasos de registro del chatbot. Confirme que el paso realmente existe.'
  },
  {
    error: 'ERR_CAMPAIGN_CONTACTS_NOT_EXISTS_OR_NOT_ACESSIBLE',
    description: 'La campaña no existe o no es accesible.',
    detail: 'Compruebe si la campaña todavía existe o está disponible.'
  },
  {
    error: 'ERROR_CAMPAIGN_NOT_EXISTS',
    description: 'Campaña no encontrada.',
    detail: 'Compruebe si la campaña todavía existe o está disponible.'
  },
  {
    error: 'ERR_NO_CAMPAIGN_FOUND',
    description: 'Campaña no encontrada.',
    detail: 'Compruebe si la campaña todavía existe o está disponible.'
  },
  {
    error: 'ERR_NO_UPDATE_CAMPAIGN_NOT_IN_CANCELED_PENDING',
    description: 'La campaña no está cancelada ni pendiente.',
    detail: 'Sólo se pueden cambiar las campañas en los estados mencionados.'
  },
  {
    error: 'ERROR_CAMPAIGN_DATE_NOT_VALID',
    description: 'Fecha de programación no válida.',
    detail: 'La fecha debe ser mayor que la fecha actual.'
  },
  {
    error: 'ERR_NO_CAMPAIGN_CONTACTS_NOT_FOUND',
    description: 'La campaña no existe.',
    detail: 'Campaña no encontrada. Actualiza la página.'
  },
  {
    error: 'ERR_CAMPAIGN_CONTACTS_NOT_EXISTS',
    description: 'La campaña no existe. Contactos desvinculados.',
    detail: 'Posiblemente la campaña ya haya sido eliminada y no haya contactos vinculados. Actualiza la página.'
  },
  {
    error: 'ERR_CAMPAIGN_CONTACTS',
    description: 'Problema con la campaña.',
    detail: 'Actualiza la página y vuelve a intentarlo.'
  },
  {
    error: 'ERR_NO_FAST_REPLY_FOUND',
    description: 'Respuesta rápida no encontrada.',
    detail: 'Verifique que el registro realmente exista. Actualiza la página y vuelve a intentarlo.'
  },
  {
    error: 'ERR_FAST_REPLY_EXISTS',
    description: 'La respuesta rápida no existe.',
    detail: 'Probablemente el registro ya haya sido eliminado. Actualiza la página.'
  },
  {
    error: 'ERR_NO_QUEUE_FOUND',
    description: 'Departamento no encontrada.',
    detail: 'Probablemente el registro ya haya sido eliminado. Actualiza la página.'
  },
  {
    error: 'ERR_QUEUE_TICKET_EXISTS',
    description: 'El departamento tiene servicios vinculados. ',
    detail: 'No es posible eliminar el registro para mantener la integridad de la información.'
  },
  {
    error: 'ERR_NO_TAG_FOUND',
    description: 'Etiqueta no encontrada.',
    detail: 'Probablemente el registro ya haya sido eliminado. Actualiza la página.'
  },
  {
    error: 'ERR_TAG_CONTACTS_EXISTS',
    description: 'La etiqueta tiene contactos vinculados. ',
    detail: 'No es posible eliminar el registro para mantener la integridad de la información.'
  },
  {
    error: 'ERR_NO_SETTING_FOUND',
    description: 'La configuración no existe.',
    detail: 'Actualiza la página y vuelve a intentarlo. Consulte con soporte si el error persiste.'
  },
  {
    error: 'ERR_NO_TENANT_FOUND',
    description: 'No encontramos ninguna empresa registrada o activa.',
    detail: 'Actualiza la página y vuelve a intentarlo. Consulte con soporte si el error persiste.'
  },
  {
    error: 'ERR_CREATING_TICKET',
    description: 'No se puede crear el servicio.',
    detail: 'Actualiza la página y vuelve a intentarlo. Consulte con soporte si el error persiste.'
  },
  {
    error: 'ERR_NO_STATUS_SELECTED',
    description: 'No se seleccionó ningún estado.',
    detail: 'Es necesario seleccionar el estado para enumerar los servicios.'
  },
  {
    error: 'ERR_INVALID_CREDENTIALS',
    description: 'Nombre de usuario y/o contraseña no válidos.',
    detail: 'Los datos de inicio de sesión no son válidos. Si el problema persiste, comuníquese con un administrador del sistema para restablecer las credenciales.'
  },
  {
    error: 'ERR_LIMIT_MAX',
    description: 'Nombre de usuario y/o contraseña no válidos.',
    detail: 'Error de autenticación. Inténtelo de nuevo en 1 minuto.'
  },
  {
    error: 'ERR_NO_USER_FOUND',
    description: 'Usuario no encontrado.',
    detail: 'Compruebe si el usuario realmente existe. Actualiza la página si es necesario.'
  },
  {
    error: 'ERR_WAPP_INVALID_CONTACT',
    description: 'El número proporcionado en el contacto no es válido',
    detail: 'El número no es un contacto vinculado a una cuenta de Whatsapp.'
  },
  {
    error: 'ERR_WAPP_CHECK_CONTACT',
    description: 'Ocurrió un error al validar el contacto vía WhatsApp.',
    detail: 'Comprueba si la conexión de WhatsApp está activa. Si es necesario, actualiza la página y vuelve a intentarlo en unos momentos.'
  },
  {
    error: 'ERR_DELETE_WAPP_MSG',
    description: 'Whatsapp no te permitió borrar el mensaje.',
    detail: 'No es posible eliminar mensajes antiguos. Si el mensaje es de las últimas 24 horas, verifica si la conexión de WhatsApp está activa. Si es necesario, actualiza la página y vuelve a intentarlo en unos momentos.'
  },
  {
    error: 'ERR_SENDING_WAPP_MSG',
    description: 'Mensaje no enviado por Whatsapp.',
    detail: 'Comprueba si la conexión de WhatsApp está activa. Si es necesario, actualiza la página y vuelve a intentarlo en unos momentos..'
  },
  {
    error: 'ERR_WAPP_NOT_INITIALIZED',
    description: 'Sesión de whatsapp no inicializada',
    detail: 'Consulta el estado de la conexión de WhatsApp del sistema. La conexión debe establecerse exitosamente.'
  },
  {
    error: 'ERR_CONTACTS_NOT_EXISTS_WHATSAPP',
    description: 'El contacto no existe en Whatsapp.',
    detail: 'El número no es un contacto válido de Whatsapp.'
  },
  {
    error: 'ERR_NO_WAPP_FOUND',
    description: 'Sesión no encontrada.',
    detail: 'Verifique que el registro realmente exista. Si es necesario, actualice la página.'
  },
  {
    error: 'ERR_OTHER_OPEN_TICKET',
    description: 'Ya hay un servicio abierto para contacto.',
    detail: 'Localice el contacto en la lista de contactos.'
  },
  {
    error: 'ERR_NO_DEF_WAPP_FOUND',
    description: 'No hay ninguna conexión marcada como "DEFAULT".',
    detail: 'Es necesario realizar la definición en el menú de sesiones.'
  },
  {
    error: 'ERR_FETCH_WAPP_MSG',
    description: 'No se pueden encontrar mensajes.',
    detail: 'Valida el estado de la conexión de WhatsApp.'
  },
  {
    error: 'ERR_NO_PERMISSION',
    description: 'Usuario sin permiso.',
    detail: 'Su usuario no tiene permiso para realizar la acción.'
  }
]

export default errors
