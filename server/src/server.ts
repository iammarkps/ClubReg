import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as morgan from 'morgan'
import * as compression from 'compression'
import * as helmet from 'helmet'

const app = express()
const port: number = parseInt(process.env.PORT, 10) || 3000
const dev: boolean = process.env.ENV === 'dev'

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(cors())
app.use(helmet())

if (dev) {
  app.use(morgan('dev'))
} else {
  app.use(morgan('combined'))
}

app.use(compression())

app.get('/', (_req, res) => {
  res.send('Hello Express with Typescript!')
})

app.listen(port, () => console.log(`🚀App ready on http://localhost:${port}`))
