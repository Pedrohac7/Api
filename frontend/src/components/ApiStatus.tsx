import { useEffect, useState } from 'react'
import { checkApiHealth } from '../api/client'

type ConnectionState = 'checking' | 'online' | 'offline'

export function ApiStatus() {
  const [status, setStatus] = useState<ConnectionState>('checking')

  async function refreshStatus() {
    setStatus('checking')
    try {
      await checkApiHealth()
      setStatus('online')
    } catch {
      setStatus('offline')
    }
  }

  useEffect(() => {
    void refreshStatus()
  }, [])

  const label = status === 'checking' ? 'Checking API' : status === 'online' ? 'API online' : 'API unavailable'

  return <button className={`api-status ${status}`} type="button" onClick={refreshStatus} title="Check API connection">
    <span className="status-dot" />
    {label}
    <i className="bi bi-arrow-clockwise" />
  </button>
}
