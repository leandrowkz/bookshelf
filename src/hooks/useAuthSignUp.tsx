import { type ReactNode, useState } from 'react'
import { useSupabase } from './useSupabase'
import { hasLength, isEmail, matchesField, useForm } from '@mantine/form'
import { Anchor, Box } from '@mantine/core'

export type SignUpForm = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function useAuthSignUp() {
  const supabase = useSupabase()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<ReactNode>(null)
  const form = useForm<SignUpForm>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      email: isEmail('Invalid email'),
      password: hasLength({ min: 6 }, 'Password must be 6 or more characters long'),
      confirmPassword: matchesField('password', 'Passwords must be equal'),
    },
  })

  const handleSignUp = async (values: SignUpForm) => {
    setIsLoading(true)
    setError('')

    const { error, data } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          name: values.name,
        },
      },
    })

    if (error) {
      setError(error.message)
    } else if (data.user?.identities?.length === 0) {
      setError(
        <Box>
          An account already exists with this email. Try{' '}
          <Anchor href="/auth/password-reset">reset your password</Anchor>.
        </Box>
      )
    } else {
      setIsSuccess(true)
    }

    setIsLoading(false)
  }

  return { form, error, isLoading, isSuccess, handleSignUp }
}
