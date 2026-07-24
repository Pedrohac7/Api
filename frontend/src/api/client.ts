import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api',
  timeout: 6000,
})

type HealthResponse = {
  success: boolean
  data: {
    status: 'online'
    service: string
  }
}

export async function checkApiHealth() {
  const { data } = await api.get<HealthResponse>('/health')
  return data.data
}
