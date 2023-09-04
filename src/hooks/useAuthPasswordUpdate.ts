import { useState } from 'react'
import { useSupabase } from './useSupabase'
import { hasLength, matchesField, useForm } from '@mantine/form'

export type PasswordUpdateForm = {
  password: string
  confirmPassword: string
}

export function useAuthPasswordUpdate() {
  const supabase = useSupabase()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  const form = useForm<PasswordUpdateForm>({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: {
      password: hasLength({ min: 6 }, 'Password must be 6 or more characters long'),
      confirmPassword: matchesField('password', 'Passwords must be equal'),
    },
  })

  const handlePasswordUpdate = async (values: PasswordUpdateForm) => {
    setError('')
    setIsLoading(true)
    setIsSuccess(false)

    const { error } = await supabase.auth.updateUser({ password: values.password })

    if (error) {
      setError(error.message)
    } else {
      setIsSuccess(true)
    }

    setIsLoading(false)
  }

  return { form, error, isLoading, isSuccess, handlePasswordUpdate }
}
