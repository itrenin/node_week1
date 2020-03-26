process.env.timeout = 10000
process.env.timer = 1000

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Получил ПОСТ')

  printDateOnInterval(process.env.timer, process.env.timeout)
})

app.listen(3000, () => {
  console.log('listening 3000')
})

function printDateOnInterval(timer, timeOut) {
  const timerId = setInterval(() => {
    const now = new Date()
    console.log(now.toLocaleString('ru'))
    setTimeout(() => {
      clearInterval(timerId)
    }, timeOut)
  }, timer)
}
