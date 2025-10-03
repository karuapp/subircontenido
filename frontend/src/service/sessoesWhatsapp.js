import request from 'src/service/request.js'

export function ListarWhatsapps (whatsAppId) {
  return request({
    url: '/whatsapp/',
    method: 'get'
  })
}

export function StartWhatsappSession (whatsAppId) {
  return request({
    url: `/whatsappsession/${whatsAppId}`,
    method: 'post'
  })
}

export function DeleteWhatsappSession (whatsAppId) {
  return request({
    url: `/whatsappsession/${whatsAppId}`,
    method: 'delete'
  })
}

export function RequestNewQrCode (data) {
  return request({
    url: `/whatsappsession/${data.id}`,
    method: 'put',
    data
  })
}

export function GetWhatSession (whatsAppId) {
  return request({
    url: `/whatsapp/${whatsAppId}`,
    method: 'get'
  })
}

export function UpdateWhatsapp (whatsAppId, data) {
  return request({
    url: `/whatsapp/${whatsAppId}`,
    method: 'put',
    data
  })
}

export function CriarWhatsapp (data) {
  return request({
    url: '/whatsapp',
    method: 'post',
    data
  })
}

export function DeletarWhatsapp (whatsAppId) {
  return request({
    url: `/whatsapp/${whatsAppId}`,
    method: 'delete'
  })
}

// api.put(`/whatsapp/${whatsAppId}`, {
//   name: values.name,
//   isDefault: values.isDefault,
// });


export function RemoverFotoNula (whatsappId) {
  return request({
    url: `/whatsappRemovePicture/${whatsappId}`,
    method: 'post'
  })
}

export function ResetBaileysConnection (whatsAppId) {
  return request({
    url: `/whatsapp/${whatsAppId}/reset-baileys`,
    method: 'post'
  })
}

export function ListarWhatsappsTenant () {
  return request({
    url: '/whatsappTenantsAll/',
    method: 'get'
  })
}

export function GetWhatSessionTenant (whatsAppId) {
  return request({
    url: `/whatsappTenants/${whatsAppId}`,
    method: 'get'
  })
}

export function UpdateWhatsappTenant (whatsAppId, data) {
  return request({
    url: `/whatsappTenants/${whatsAppId}`,
    method: 'put',
    data
  })
}

export function CriarWhatsappTenant (data) {
  return request({
    url: '/whatsappTenants',
    method: 'post',
    data
  })
}

export function ValidarTodosContatos (data) {
  return request({
    url: '/checkContacts',
    method: 'post',
    data
  })
}

export function DefinirPadrao(whatsappId, data) {
  return request({
    url: '/setDefault',
    method: 'post',
    data: { whatsappId, ...data }
  });
}

export function FecharTodosAbertos(whatsappId) {
  return request({
    url: '/closeAllOpen',
    method: 'post',
    data: { whatsappId }
  });
}

export function FecharTodosPendente(whatsappId) {
  return request({
    url: '/closeAllPending',
    method: 'post',
    data: { whatsappId }
  });
}

export function ForcarMensagem (data) {
  return request({
    url: '/forceMessage',
    method: 'post',
    data
  })
}

export function ForcarMensagemIndividual (data) {
  return request({
    url: '/forceIndividualMessage',
    method: 'post',
    data
  })
}

export function DeletarWhatsappTenant (whatsAppId) {
  return request({
    url: `/whatsappTenants/${whatsAppId}`,
    method: 'delete'
  })
}