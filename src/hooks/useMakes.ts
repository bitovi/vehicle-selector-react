import { useCowbird } from '@/cowbirdProvider'
import { useEffect, useState } from 'react'

type Make = string

const baseUrl = import.meta.env.VITE_API_BASE_URL

export function useMakes(year: string) {
  const [makes, setMakes] = useState<Make[]>([])
  const { cbFetch } = useCowbird()

  useEffect(() => {
    const fetchMakes = async () => {
      if (year) {
        const response = await cbFetch(`${baseUrl}/makes?year=${year}`)
        const data = await response.json()
        setMakes(data.data)
      } else {
        setMakes([])
      }
    }
    fetchMakes()
  }, [cbFetch, year])

  return {
    makes,
  }
}