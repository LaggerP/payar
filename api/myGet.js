import fetch from 'isomorphic-unfetch'
import Router from 'next/router'

export default async function myGet (url, ctx) {
  const resp = await fetch(url, {
    headers: {
      cookie: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
    }
  })

  if (resp.status === 401 && !ctx.req) {
    Router.replace('login')
    return {}
  }

  if (resp.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: 'login'
    })
    ctx.res.end()
    return
  }

  const json = await resp.json()
  return json
}
