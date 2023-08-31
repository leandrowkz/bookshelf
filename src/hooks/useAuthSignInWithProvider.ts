import { useState } from 'react'
import { useSupabase } from './useSupabase'

export function useAuthSignInWithProvider(provider: 'google') {
  const supabase = useSupabase()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async () => {
    setIsLoading(true)
    await supabase.auth.signInWithOAuth({ provider })
  }

  return { isLoading, handleSignIn }
}
