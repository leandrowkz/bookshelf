import { type ReactNode, useState } from 'react'
import { useSupabase } from './useSupabase'

export function useAuthSignOut() {
  const supabase = useSupabase()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<ReactNode>(null)

  const handleSignOut = async () => {
    setIsLoading(true)
    setError('')

    const { error } = await supabase.auth.signOut()

    if (error) {
      setError(error.message)
    } else {
      setIsSuccess(true)
    }

    setIsLoading(false)
  }

  return { error, isLoading, isSuccess, handleSignOut }
}
