import { useState } from 'react'
import { useSupabase } from './useSupabase'
import { isEmail, useForm } from '@mantine/form'

export type PasswordResetForm = {
  email: string
}

export function useAuthPasswordReset() {
  const supabase = useSupabase()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  const form = useForm<PasswordResetForm>({
    initialValues: {
      email: '',
    },
    validate: {
      email: isEmail('Invalid email'),
    },
  })

  const handlePasswordReset = async (values: PasswordResetForm) => {
    setIsLoading(true)
    setError('')

    const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo: 'https://usebookshelf.app/auth/password-update',
    })

    if (error) {
      setError(error.message)
    } else {
      setIsSuccess(true)
    }

    setIsLoading(false)
  }

  return { form, error, isLoading, isSuccess, handlePasswordReset }
}
