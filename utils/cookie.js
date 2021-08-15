// utils/cookie.js
import cookie from 'js-cookie'

export const getCookieFromBrowser = key => cookie.get(key)
export const deleteCookieFromBrowser = key => cookie.remove(key)
export const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) return false

  const rawCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith(`${key}=`))
  if (!rawCookie) return false
  const [, token] = rawCookie.split('=')
  if (!token) return false

  return token
}

export const getCookie = (key, req) => {
  if (process.browser) return getCookieFromBrowser(key)
  return getCookieFromServer(key, req)
}
