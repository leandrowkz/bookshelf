import { type MouseEvent as ReactMouseEvent, type ReactNode, type HTMLAttributes } from 'react'
import { Button } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'
import { useAuthSignInWithProvider } from '@/hooks/useAuthSignInWithProvider'

export type AuthButtonGoogle = HTMLAttributes<HTMLButtonElement> & {
  label?: ReactNode
}

export function AuthButtonGoogle({
  label = 'Sign in with Google',
  onClick,
  ...props
}: AuthButtonGoogle) {
  const { isLoading, handleSignIn } = useAuthSignInWithProvider('google')

  const handleClick = async (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(e)
    }
    handleSignIn()
  }

  return (
    <Button
      variant="default"
      {...props}
      leftIcon={<IconBrandGoogle />}
      onClick={handleClick}
      loading={isLoading}
    >
      {label}
    </Button>
  )
}
