import { useState } from 'react'
import { useSupabase } from './useSupabase'

export function useAuthSignInWithProvider(provider: 'google') {
  const supabase = useSupabase()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async () => {
    setError('')
    setIsLoading(true)

    const { error } = await supabase.auth.signInWithOAuth({ provider })

    if (error) {
      setError(error.message)
    }

    setIsLoading(false)
  }

  return { error, isLoading, handleSignIn }
}
