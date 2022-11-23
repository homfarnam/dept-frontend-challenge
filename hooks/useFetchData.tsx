import { AxiosError } from 'axios'
import { api } from 'api/api'
import { useQuery } from '@tanstack/react-query'

const useFetchData = <T,>(url: string) => {
  const fetchData = async (url: string) => {
    const response = await api.get(url)
    const data = response.data as T

    return data
  }

  const { isLoading, data, isSuccess, error, isError } = useQuery(
    ['products', url],
    () => fetchData(url),
    {
      staleTime: 3000,
      retry: 3,
      onError: (error: AxiosError) => {
        console.log(error.message)
      },
    }
  )

  return {
    data,
    isLoading,
    isSuccess,
    isError,
  }
}

export default useFetchData
