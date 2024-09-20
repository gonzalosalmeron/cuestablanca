import { useCallback, useState } from 'react'

export const useFetcher = (key: string | null) => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchData = useCallback(async () => {
    if (!key) {
      setError('Debes proporcionar los días')
      return
    }
    setLoading(true)
    setError(null)
    const cache = localStorage.getItem(key)

    if (cache) {
      setData(JSON.parse(cache))
      setLoading(false)
      return
    }

    try {
      const response = await fetch(key)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const result = await response.json()

      // save on localstorage if possible
      try {
        localStorage.setItem(key, JSON.stringify(result))
      } catch (storageError) {
        console.error(
          "[WARNING] Couldn't store data in localStorage:",
          storageError
        )
      }

      if (result?.error) {
        setError(result.error)
      } else {
        setData(result)
      }
    } catch (e) {
      // TODO: Add report into log system
      console.error("[ERROR] Couldn't fetch data:", e)
      setError('Error obteniendo los datos')
    } finally {
      setLoading(false)
    }
  }, [key])

  return { data, error, loading, refetch: fetchData }
}

export const API_URL = (dateFrom: string, dateTo: string) =>
  dateFrom && dateTo
    ? `https://stg-app.energysequence.com/v2/datalog/?meter=5d12082581c1e06964703077&date_from=${dateFrom}&date_to=${dateTo}`
    : null
