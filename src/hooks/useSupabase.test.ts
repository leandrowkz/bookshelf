import { useSupabase } from './useSupabase'

jest.mock('@supabase/auth-helpers-react', () => ({
  useSupabaseClient: () => mockSupabaseClient(),
}))

const mockSupabaseClient = jest.fn()

test('should call supabase constructor properly', () => {
  useSupabase()

  expect(mockSupabaseClient).toHaveBeenCalled()
})
