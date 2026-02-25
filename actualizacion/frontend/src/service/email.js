import request from 'src/service/request.js'

export function EnviarEmail (data) {
  return request({
    url: `/email/`,
    method: 'post',
    data
  }).then(response => {
    // Se a resposta não tem sucesso, lança um erro
    if (!response.data || response.data.success !== true) {
      throw {
        response: {
          data: response.data || {
            success: false,
            error: 'Error al enviar el correo electrónico',
            details: 'Respuesta del servidor no válida'
          }
        }
      }
    }
    return response
  }).catch(error => {
    // Se o erro já tem uma resposta formatada, apenas propaga
    if (error.response?.data) {
      throw error
    }
    
    // Se não tem resposta formatada, cria uma
    throw {
      response: {
        data: {
          success: false,
          error: 'Error al enviar el correo electrónico',
        //   details: error.message || 'Error desconocido'
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
    // Se a resposta não tem sucesso, lança um erro
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
    // Se o erro já tem uma resposta formatada, apenas propaga
    if (error.response?.data) {
      throw error
    }
    
    // Se não tem resposta formatada, cria uma
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
    // Extrai apenas os dados necessários do email
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
      // Se a resposta não tem sucesso, lança um erro
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
      // Se o erro já tem uma resposta formatada, apenas propaga
      if (error.response?.data) {
        throw error
      }
      
      // Se não tem resposta formatada, cria uma
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