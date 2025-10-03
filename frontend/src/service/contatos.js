import request from 'src/service/request.js'

export function ListarContatos (params) {
  return request({
    url: '/contacts/',
    method: 'get',
    params
  })
}

export function ListarContatosAniversario (params) {
  return request({
    url: '/contactsBirthday/',
    method: 'get',
    params
  })
}

export function ListarContatosKanban (params) {
  return request({
    url: '/contactsKanban/',
    method: 'get',
    params
  })
}

export function ListarContatosPorEtiqueta (params) {
  return request({
    url: '/contactsByTags/',
    method: 'get',
    params
  })
}

export function ListarContatosPorEtiquetaEspecifica (params) {
  return request({
    url: '/contactsBySpecificTag/',
    method: 'get',
    params
  })
}

export function ListarContatosKanbanTags (params) {
  return request({
    url: '/contactsTags/',
    method: 'get',
    params
  })
}

export function ListarContatosPorKanbanEspecifico (params) {
  return request({
    url: '/contactsBySpecificKanban/',
    method: 'get',
    params
  })
}

export function ObterContato (contactId) {
  return request({
    url: `/contacts/${contactId}`,
    method: 'get'
  })
}

export function ObterContatoPeloNumero (numberId) {
  return request({
    url: `/contactsNumber/${numberId}`,
    method: 'get'
  })
}

export function RemoverFotoNula (contactId) {
  return request({
    url: `/contactsRemovePicture/${contactId}`,
    method: 'post'
  })
}

export function AtualizarLid (contactId, lid) {
  return request({
    url: `/contactsUpdateLid/${contactId}`,
    method: 'post',
    data: { lid }
  })
}

export function AtualizarNome (contactId, name) {
  return request({
    url: `/contactsUpdateName/${contactId}`,
    method: 'post',
    data: { name }
  })
}

export function AtualizarLidFromContactId (contactId) {
  return request({
    url: `/contactsUpdateLidFromContactId/${contactId}`,
    method: 'post'
  })
}

export function DeletarDuplicados () {
  return request({
    url: '/contactsDeleteDuplicate',
    method: 'post'
  })
}

export function AgruparLid () {
  return request({
    url: '/contactsCheckLid',
    method: 'post'
  })
}

export function ChecarNonoDigito () {
  return request({
    url: '/contactsGroupDuplicate',
    method: 'post'
  })
}

export function MigrarContato(contactId) {
  return request({
    url: '/contactMigrate',
    method: 'post',
    data: {
      contactId
    }
  });
}

export function SanitizarContato(contactId) {
  return request({
    url: '/closeAllContactTickets',
    method: 'post',
    data: { contactId }
  });
}

export function CriarContato (data) {
  return request({
    url: '/contacts',
    method: 'post',
    data
  })
}

export function CriarContatoVcard (data) {
  return request({
    url: '/contactVcard',
    method: 'post',
    data
  })
}


export function ListarUrlFoto (data) {
  return request({
    url: '/contactsShowProfilePicture',
    method: 'post',
    data
  })
}

export function ImportarArquivoContato (data) {
  return request({
    url: '/contacts/upload',
    method: 'post',
    data,
    timeout: 120000
  })
}

export function ExportarArquivoContato (data) {
  return request({
    url: '/contacts/export',
    method: 'post',
    data,
    timeout: 120000
  })
}

export function SyncronizarContatos () {
  return request({
    url: '/contacts/sync',
    method: 'post'
  })
}

export function SyncronizarGrupos () {
  return request({
    url: '/groups/sync',
    method: 'post'
  })
}

export function EditarContato (contactId, data) {
  return request({
    url: `/contacts/${contactId}`,
    method: 'put',
    data
  })
}

export function DeletarContato (contactId) {
  return request({
    url: `/contacts/${contactId}`,
    method: 'delete'
  })
}

export function DeletarContatoForcado (contactId) {
  return request({
    url: `/contactsforce/${contactId}`,
    method: 'delete'
  })
}

export function EditarEtiquetasContato (contactId, tags) {
  const data = {
    tags
  }
  return request({
    url: `/contact-tags/${contactId}`,
    method: 'put',
    data
  })
}

export function EditarCarteiraContato (contactId, wallets) {
  const data = {
    wallets
  }
  return request({
    url: `/contact-wallet/${contactId}`,
    method: 'put',
    data
  })
}
