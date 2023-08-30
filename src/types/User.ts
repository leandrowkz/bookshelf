export type User = {
  id: string
  name: Nullable<string>
  email: string
  phone: string
  avatar: Nullable<string>
  provider: 'email' | 'google'
}
