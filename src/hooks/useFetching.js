import { useState } from 'react'

export const useFetching = (callBack) => {
  const [isLoading, setIsLoading] = useState()
  const [postError, setPostError] = useState()

  const fetching = async () => {
    try {
      setIsLoading(true)
      await callBack()
    } catch (e) {
      setPostError(e.message)
    } finally {
      setIsLoading(false)
    }
  }
  return [fetching, isLoading, postError]
}