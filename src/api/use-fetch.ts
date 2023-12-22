import { useCallback } from 'react'
import useFetchBase from './use-fetch-base'
import { FetchInitType, FetchInputType } from '../types/fetch-params'
import { useAuthTokens } from '../contexts/token-context'

function useFetch() {
  const { tokensInfoRef, setTokensInfo } = useAuthTokens()
  const fetchBase = useFetchBase()

  const fetchWrapper = useCallback(
    async (input: FetchInputType, init?: FetchInitType) => {
      return fetchBase(input, init, {
        token: tokensInfoRef.current?.token,
        refreshToken: tokensInfoRef.current?.refreshToken,
        tokenExpires: tokensInfoRef.current?.tokenExpires,
        setTokensInfo,
      })
    },
    [fetchBase, setTokensInfo, tokensInfoRef]
  )

  return fetchWrapper
}

export default useFetch
