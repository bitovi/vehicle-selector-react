import { useCowbird } from '@/cowbirdProvider'
import { useEffect, useState } from 'react'

type Year = string

const baseUrl = import.meta.env.VITE_API_BASE_URL

export function useYears() {
  const [years, setYears] = useState<Year[]>([])
  const { cbFetch } = useCowbird()

  useEffect(() => {
    const fetchYears = async () => {
      const response = await cbFetch(`${baseUrl}/years`)
      const data = await response.json()
      setYears(data.data)
    }
    fetchYears()
  }, [cbFetch])

  return {
    years,
  }
}