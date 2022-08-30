const express = require('express')
const app = express()
const port = 3000

const response = {
  name: "missingo",
  age: 9999999999999999,
  identity: NaN
}

app.get('/', (req, res) => {
  res.send(response)
  console.log({serverAge: response.age})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})