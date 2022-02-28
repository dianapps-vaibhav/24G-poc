import 'dotenv/config'
import App from './app'

import AccountRoute from './routes/account.route'
import validateEnv from './utils/validateEnv'
import initDB from './startup/db'

validateEnv()
new initDB()

const app = new App([new AccountRoute()])

app.listen()
