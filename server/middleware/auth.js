import jwtToken from 'jsonwebtoken'
// grab the user from the token in client
// set req.user to be the username and id of the logged in user
export default function attachUser(req, res, next) {
  const authorizationHeader = req.headers.authorization
  if (authorizationHeader) {
    const token = authorizationHeader.split(' ')[1]
    const decoded = jwtToken.decode(token)
    req.user = { id: decoded.id, username: decoded.username }
  }
  next()
}