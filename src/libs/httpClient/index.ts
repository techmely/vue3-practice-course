import { appEnv } from '@/shared/helpers/environment'
import appConfig from '../../../app.config'
import ky from 'ky'

const headers = {
  'Content-Type': 'application/json',
  'X-App-Version': appEnv.VITE_BASE_API_URL,
  'X-Creator': appConfig.author.name
}

const httpClient = ky.create({
  prefixUrl: appEnv.VITE_BASE_API_URL,
  headers
})

export default httpClient
