import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://afdviosxwswogcxzwxbu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmZHZpb3N4d3N3b2djeHp3eGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NTg5MTIsImV4cCI6MjAxMzEzNDkxMn0.XKIle_Lx_p61dvssmW0cxsRd7tPxpk7GjX6W2yRgLqY'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase