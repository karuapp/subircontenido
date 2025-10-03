import request from 'src/service/request.js'

export function ConsultarTicketsQueuesService (params) {
  return request({
    url: '/dash-tickets-queues',
    method: 'get',
    params
  })
}

export function RelatorioContatos (params) {
  return request({
    url: '/contacts-report',
    method: 'get',
    params
  })
}

export function RelatorioContatosCampanha (params) {
  return request({
    url: '/contacts-report-campaign',
    method: 'get',
    params
  })
}

export function RelatorioTiketss (params) {
  return request({
    url: '/tickets-report',
    method: 'get',
    params
  })
}

export function RelatorioResumoAtendimentosUsuarios (params) {
  return request({
    url: '/statistics-per-users',
    method: 'get',
    params
  })
}

export function GetDashTicketsAndTimes (params) {
  return request({
    url: '/statistics-tickets-times',
    method: 'get',
    params
  })
}

export function GetDashTicketsChannels (params) {
  return request({
    url: '/statistics-tickets-channels',
    method: 'get',
    params
  })
}

export function GetDashTicketsEvolutionChannels (params) {
  return request({
    url: '/statistics-tickets-evolution-channels',
    method: 'get',
    params
  })
}

export function GetDashTicketsEvolutionChannelsName (params) {
  return request({
    url: '/statistics-tickets-evolution-channels-name',
    method: 'get',
    params
  })
}

export function GetDashTicketsEvolutionByPeriod (params) {
  return request({
    url: '/statistics-tickets-evolution-by-period',
    method: 'get',
    params
  })
}

export function GetDashTicketsEvolutionByValue (params) {
  return request({
    url: '/statistics-tickets-evolution-by-value',
    method: 'get',
    params
  })
}

export function GetDashTicketsPerUsersDetail (params) {
  return request({
    url: '/statistics-tickets-per-users-detail',
    method: 'get',
    params
  })
}

export function GetDashTicketsQueue (params) {
  return request({
    url: '/statistics-tickets-queue',
    method: 'get',
    params
  })
}

export function GetDashTicketsUser (params) {
  return request({
    url: '/statistics-tickets-user',
    method: 'get',
    params
  })
}

export function GetDashTicketsStatus (params) {
  return request({
    url: '/statistics-tickets-status',
    method: 'get',
    params
  })
}

export function GetDashTicketsReasons (params) {
  return request({
    url: '/statistics-tickets-reasons',
    method: 'get',
    params
  })
}