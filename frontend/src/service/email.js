import request from 'src/service/request.js'

export function EnviarEmail (data) {
  return request({
    url: `/email/`,
    method: 'post',
    data
  }).then(response => {
    // Si la respuesta no es correcta, se genera un error.
    if (!response.data || response.data.success !== true) {
      throw {
        response: {
          data: response.data || {
            success: false,
            error: 'Error al enviar el correo electrónico.',
            details: 'Respuesta no válida del servidor.'
          }
        }
      }
    }
    return response
  }).catch(error => {
    // Si el error ya tiene una respuesta formateada, simplemente se propaga.
    if (error.response?.data) {
      throw error
    }
    
    // Si no hay una respuesta formateada, se crea una nueva.
    throw {
      response: {
        data: {
          success: false,
          error: 'Error al enviar el correo electrónico.',
        //   details: error.message || 'Error desconocido.'
        }
      }
    }
  })
}

export function EnviarEmailComTemplate (data) {
  return request({
    url: `/email/template/`,
    method: 'post',
    data
  }).then(response => {
    // Si la respuesta no es correcta, se genera un error.
    if (!response.data || response.data.success !== true) {
      throw {
        response: {
          data: response.data || {
            success: false,
            error: 'Error al enviar el correo electrónico con la plantilla',
            details: 'Respuesta del servidor no válida'
          }
        }
      }
    }
    return response
  }).catch(error => {
    // Si el error ya tiene una respuesta formateada, simplemente propáguela.
    if (error.response?.data) {
      throw error
    }
    
    // Si no hay una respuesta formateada, cree una.
    throw {
      response: {
        data: {
          success: false,
          error: 'Error al enviar el correo electrónico con la plantilla',
        //   details: error.message || 'Error desconocido'
        }
      }
    }
  })
}

export function EnviarEmailComConfiguracoes (data) {
    // Extrae solo los datos necesarios del correo electrónico.
    const emailData = {
      to: data.to,
      subject: data.subject,
      text: data.text
    };

    return request({
      url: `/emailTenant/`,
      method: 'post',
      data: emailData
    }).then(response => {
      // Si la respuesta no es correcta, se genera un error.
      if (!response.data || response.data.success !== true) {
        throw {
          response: {
            data: response.data || {
              success: false,
              error: 'Error al enviar el correo electrónico con la configuración',
              details: 'Respuesta del servidor no válida'
            }
          }
        }
      }
      return response
    }).catch(error => {
      // Si el error ya tiene una respuesta formateada, simplemente propáguela.
      if (error.response?.data) {
        throw error
      }
      
      // Si no hay una respuesta formateada, cree una.
      throw {
        response: {
          data: {
            success: false,
            error: 'Error al enviar el correo electrónico con la configuración',
            // details: error.message || 'Error desconocido'
          }
        }
      }
    })
}