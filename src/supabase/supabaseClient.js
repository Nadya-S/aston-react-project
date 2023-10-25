import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://nheertebkppdakpedabv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZWVydGVia3BwZGFrcGVkYWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3NDU0MTIsImV4cCI6MjAxMzMyMTQxMn0.5Nb9Wc7VVikzJce9D5jsZkex0krShBDxHrjKokOVxds'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase