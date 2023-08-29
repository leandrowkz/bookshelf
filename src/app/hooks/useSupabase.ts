import { createClient } from '@supabase/supabase-js'

const supabaseUrl = String(process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL)
const supabaseKey = String(process.env.SUPABASE_SERVICE_KEY)
const supabase = createClient(supabaseUrl, supabaseKey)

export function useSupabase() {
  return supabase
}
