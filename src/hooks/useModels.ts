import { useCowbird } from '@/cowbirdProvider'
import { useEffect, useState } from 'react'

type Model = string

const baseUrl = import.meta.env.VITE_API_BASE_URL

export function useModels(year: string, make: string) {
  const [models, setModels] = useState<Model[]>([])
  const { cbFetch } = useCowbird()

  useEffect(() => {
    const fetchModels = async () => {
      if (year && make) {
        const response = await cbFetch(`${baseUrl}/models?year=${year}&make=${make}`)
        const data = await response.json()
        setModels(data.data)
      } else {
        setModels([])
      }
    }
    fetchModels()
  }, [cbFetch, make, year])

  return {
    models,
  }
}