import { createBrowserClient } from '@supabase/ssr';

// 1. Initialize the global browser configuration engine
export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 2. EXPLICIT EXPORT FOR SERVER AND CLIENT PIPELINES
export const getCourses = async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Supabase table execution failure:", error);
    return [];
  }
  return data;
};