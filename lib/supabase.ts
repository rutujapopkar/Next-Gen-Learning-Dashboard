import { createClient } from '@supabase/supabase-js';
import { Course } from '../types/dashboard';

// Using 'as string' forces TypeScript to accept them without relying on an external definition file
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co') as string;
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getCourses(): Promise<Course[]> {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      throw error;
    }

    return (data as Course[]) || [];
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Database connection failed');
  }
}