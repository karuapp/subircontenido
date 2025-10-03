import request from 'src/service/request.js'

export function MostrarHorariosAtendiemento () {
  return request({
    url: '/tenants/business-hours/',
    method: 'get'
  })
}

export function AtualizarHorariosAtendiemento (data) {
  return request({
    url: '/tenants/business-hours/',
    method: 'put',
    data
  })
}

export function AtualizarMensagemHorariosAtendiemento (data) {
  return request({
    url: '/tenants/message-business-hours/',
    method: 'put',
    data
  })
}

export function MostrarAvaliacao () {
  return request({
    url: '/tenants/rating/',
    method: 'get'
  })
}

export function ValidarVersao () {
  return request({
    url: '/check-version/',
    method: 'get'
  })
}

export function AtualizarAvaliacao (data) {
  return request({
    url: '/tenants/rating/',
    method: 'put',
    data
  })
}

export function MostrarCores () {
  return request({
    url: '/tenants/systemColors/',
    method: 'get'
  })
}

export function MostrarCoresPublicas () {
  return request({
    url: '/publicSystemColors',
    method: 'get'
  })
}

export function AtualizarCores (data) {
  return request({
    url: '/tenants/systemColors/',
    method: 'put',
    data
  })
}

export function AtualizarMenu (data) {
  return request({
    url: '/tenants/menuVisibility/',
    method: 'put',
    data
  })
}

export function AtualizarFeriados (data) {
  return request({
    url: '/tenants/holidays/',
    method: 'put',
    data
  })
}