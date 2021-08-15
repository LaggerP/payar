import fetch from 'isomorphic-unfetch'

export default async function myGet (url, ctx) {
  const resp = await fetch(url, {
    headers: { cookie: ctx }
  })

  if (resp.status === 401 && !ctx.req) {
    console.log('NO HAY NADA')
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
