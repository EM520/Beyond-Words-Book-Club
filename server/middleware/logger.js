const objectNotEmpty = (o) => o && Object.keys(o).length !== 0

export default function logRequests(req, res, next) {
  console.log(`-`.repeat(50))
  console.log('\n\n')
  console.log(`A ${req.method} was made on the client!`)
  console.log(`URL: http://${req.hostname}:3001${req.url}`)
  if (objectNotEmpty(req.body)) {
    console.log('request body')
    console.table(req.body)
  }
  if (objectNotEmpty(req.query)) {
    console.log('request query')
    console.table(req.query)
  }
  if (objectNotEmpty(req.params)) {
    console.log('request params')
    console.table(req.params)
  }
  if (objectNotEmpty(req.user)) {
    console.log('logged in user')
    console.table(req.user)
  }
  console.log(`-`.repeat(50))
  console.log('\n\n\n\n')
  next()
}
