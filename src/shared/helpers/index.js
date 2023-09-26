import cookie from 'js-cookie'

export const removeCookie = (key) =>
  cookie.remove(key, {
    expires: 7,
  });

export const getCookie = (key, req) => {
  return !req ? getCookieFromBrowser(key) : getCookieFromServer(key, req)
}

const getCookieFromBrowser = (key) => {
  return cookie.get(key)
}

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined
  }
  const rawCookie = req.headers.cookie.split('').find((c) => c.trim().startsWith(`${key}=`))
  if (!rawCookie) {
    return undefined
  }
  return rawCookie.split('=')[1]
}