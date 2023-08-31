import { useSupabase } from '@/hooks/useSupabase'
import { Button } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'
import {
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  type HTMLAttributes,
} from 'react'

export type ButtonAuthGoogleProps = HTMLAttributes<HTMLButtonElement> & {
  label?: ReactNode
}

export function ButtonAuthGoogle({
  label = 'Sign in with Google',
  onClick,
  ...props
}: ButtonAuthGoogleProps) {
  const supabase = useSupabase()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(e)
    }
    setIsLoading(true)
    await supabase.auth.signInWithOAuth({ provider: 'google' })
  }

  return (
    <Button
      variant="default"
      {...props}
      leftIcon={<IconBrandGoogle />}
      onClick={(e) => handleClick(e)}
      loading={isLoading}
    >
      {label}
    </Button>
  )
}
