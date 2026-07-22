import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://rsewmmrsbdiytismrsqp.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjljYTE2Yzc0LTZlYWItNDdkNS1iYTM3LTA1NjM5NDg1ZDk1ZiJ9.eyJwcm9qZWN0SWQiOiJyc2V3bW1yc2JkaXl0aXNtcnNxcCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzg0NzMzNjg5LCJleHAiOjIxMDAwOTM2ODksImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.jbjFvfNH0MJ9CGJYW67H4rOlif0lFgvmyAMPRQF5yFM';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };