import { type User } from '@/types/User'
import { type User as SupabaseUser } from '@supabase/supabase-js'

export const user: User = {
  id: '99b058c5-669f-439d-81fe-XXXXX',
  avatar:
    'https://lh3.googleusercontent.com/a/AAcHTtdB4CAeYE3vFpMCHnJxYnFIH1KkR2ug6PRmACUhLRWm3_po=s96-c',
  email: 'leandrowkz@gmail.com',
  name: 'Leandro Mangini Antunes',
  phone: '',
  provider: 'email',
}

export const supabaseUser: SupabaseUser = {
  id: '99b058c5-669f-439d-81fe-XXXXX',
  factors: undefined,
  aud: 'authenticated',
  email: 'leandrowkz@gmail.com',
  phone: '',
  app_metadata: {
    provider: 'email',
    providers: ['email', 'google'],
  },
  user_metadata: {
    avatar_url:
      'https://lh3.googleusercontent.com/a/AAcHTtdB4CAeYE3vFpMCHnJxYnFIH1KkR2ug6PRmACUhLRWm3_po=s96-c',
    email: 'leandrowkz@gmail.com',
    email_verified: true,
    full_name: 'Leandro Mangini Antunes',
    iss: 'https://accounts.google.com',
    name: 'Leandro Mangini Antunes',
    picture:
      'https://lh3.googleusercontent.com/a/AAcHTtdB4CAeYE3vFpMCHnJxYnFIH1KkR2ug6PRmACUhLRWm3_po=s96-c',
    provider_id: '103429788',
    sub: '103429788',
  },
  role: 'authenticated',
  created_at: '2020-01-01T12:34:23',
}
