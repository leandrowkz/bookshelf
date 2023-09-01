import { useUser } from '@supabase/auth-helpers-react'
import { type User } from '@/types/User'

export function getAuthUser(): User | undefined {
  const user = useUser()

  if (user) {
    const { user_metadata, app_metadata } = user

    return {
      id: user.id,
      name: user_metadata.name || null,
      email: String(user.email),
      phone: String(user.phone),
      avatar: user_metadata?.avatar_url || null,
      provider: app_metadata?.provider || 'email',
    } as User
  }
}
