import CryptoJS from 'crypto-js'
import request from 'src/service/request.js'

// Default encryption key - will be replaced by tenant 1 key
const DEFAULT_ENCRYPTION_KEY = 'encryption-key'

/**
 * Gets the encryption key from tenant 1 via API (always the main tenant)
 * @returns {Promise<string>} - Tenant 1 encryption key
 */
async function getTenantEncryptionKey() {
  try {
    const response = await request({
      url: '/publicEncryptionKey',
      method: 'get'
    })
    
    if (response.status === 200 && response.data) {
      return response.data
    }
    
    // If API fails, use default key
    return DEFAULT_ENCRYPTION_KEY
  } catch (error) {
    console.error('Error getting encryption key from tenant 1:', error)
    return DEFAULT_ENCRYPTION_KEY
  }
}

/**
 * Encrypts a password using AES
 * @param {string} password - Password to be encrypted
 * @returns {Promise<string>} - Encrypted password in base64
 */
export async function encryptPassword(password) {
  try {
    const encryptionKey = await getTenantEncryptionKey()
    const encrypted = CryptoJS.AES.encrypt(password, encryptionKey).toString()
    return encrypted
  } catch (error) {
    console.error('Error encrypting password:', error)
    throw new Error('Password encryption failed')
  }
}

/**
 * Decrypts an encrypted password using AES
 * @param {string} encryptedPassword - Encrypted password in base64
 * @returns {Promise<string>} - Decrypted password
 */
export async function decryptPassword(encryptedPassword) {
  try {
    const encryptionKey = await getTenantEncryptionKey()
    const decrypted = CryptoJS.AES.decrypt(encryptedPassword, encryptionKey)
    return decrypted.toString(CryptoJS.enc.Utf8)
  } catch (error) {
    console.error('Error decrypting password:', error)
    throw new Error('Password decryption failed')
  }
}

/**
 * Generates a random encryption key (for future use)
 * @returns {string} - Random encryption key
 */
export function generateEncryptionKey() {
  return CryptoJS.lib.WordArray.random(256/8).toString()
}
