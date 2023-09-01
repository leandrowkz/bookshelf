import { useMockData } from '@/test-utils/index'
import { type User as SupabaseUser } from '@supabase/supabase-js'
import { useAuthUser } from './useAuthUser'

jest.mock('@supabase/auth-helpers-react', () => ({
  useUser: () => mocks.supabaseUser,
}))

const mocks: { supabaseUser: Nullable<SupabaseUser> } = {
  supabaseUser: null,
}

test('should return user with proper values when user exists', () => {
  const { supabaseUser, user: mockUser } = useMockData()
  mocks.supabaseUser = supabaseUser

  const user = useAuthUser()

  expect(user).toEqual(mockUser)
})

test('should return nothing when supabase user is not set', () => {
  mocks.supabaseUser = null

  const user = useAuthUser()

  expect(user).toBeUndefined()
})
