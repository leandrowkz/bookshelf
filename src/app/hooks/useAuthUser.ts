import { useSupabase } from './useSupabase'

import { type User } from '@/types/User'

export async function getLoggedUser(): Promise<User | undefined> {
  const supabase = useSupabase()
  const { data } = await supabase.auth.getUser()

  if (data.user) {
    const { user } = data

    return {
      id: user.id,
      name: user.user_metadata.name || null,
      email: String(user.email),
      phone: String(user.phone),
      avatar: null,
      provider: user.app_metadata?.provider,
    } as User
  }
}
