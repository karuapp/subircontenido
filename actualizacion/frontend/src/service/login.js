import request from 'src/service/request'
import { encryptPassword } from 'src/utils/encryption'

export async function RealizarLogin (user) {
  // Encrypt password before sending
  const encryptedUser = {
    ...user,
    password: await encryptPassword(user.password)
  }
  
  return request({
    url: '/auth/login/',
    method: 'post',
    data: encryptedUser
  })
}

export function RealizarLogout (user) {
  return request({
    url: '/auth/logout/',
    method: 'post',
    data: user
  })
}

export function RefreshToken () {
  return request({
    url: '/auth/refresh_token',
    method: 'post'
  })
}

export function ResetarPassword (data) {
  return request({
    url: '/password-reset',
    method: 'post',
    data
  })
}

export function RedefinirSenha (data) {
  return request({
    url: '/reset-password',
    method: 'post',
    data
  })
}