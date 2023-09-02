import { useState } from 'react'
import { useSupabase } from './useSupabase'
import { hasLength, isEmail, useForm } from '@mantine/form'

export type SignInForm = {
  email: string
  password: string
}

export function useAuthSignInWithEmail() {
  const supabase = useSupabase()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  const form = useForm<SignInForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isEmail('Invalid email'),
      password: hasLength({ min: 6 }, 'Password must be 6 or more characters long'),
    },
  })

  const handleSignIn = async (values: SignInForm) => {
    setIsLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    })

    if (error) {
      setError(error.message)
    } else {
      setIsSuccess(true)
    }

    setIsLoading(false)
  }

  return { form, error, isLoading, isSuccess, handleSignIn }
}
