// process.env.timeout = 10000
// process.env.timer = 1000

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  printDateOnInterval(res, process.env.timer, process.env.timeout)
})

app.listen(3000, () => {
  console.log('listening 3000')
})

function printDateOnInterval(response, timer, timeOut) {
  const timerId = setInterval(() => {
    const now = new Date()
    const end = new Date(Number(timeOut) + Number(now))

    console.log(now.toUTCString())
    setTimeout(() => {
      clearInterval(timerId)
      response.end(end.toUTCString())
    }, timeOut)
  }, timer)
}
