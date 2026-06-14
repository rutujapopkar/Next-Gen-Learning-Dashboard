import React from 'react';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import { getCourses } from '@/lib/supabase';
import DashboardShell from '@/components/DashboardShell';
import AuthPanel from '@/components/AuthPanel';

export const revalidate = 0;

export default async function DashboardPage() {
  const cookieStore = await cookies();

  const supabaseServer = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Handled internally on server layers
          }
        },
      },
    }
  );

  // SECURE AUTHENTICATION RE-VERIFICATION
  // This contacts the Supabase Auth server directly, clearing your terminal warning!
  const { data: { user }, error: authError } = await supabaseServer.auth.getUser();
  
  if (authError || !user) {
    return <AuthPanel />;
  }

  // Pull personalized student name metadata mapped to the verified user ID
  const { data: profile } = await supabaseServer
    .from('profiles')
    .select('full_name')
    .eq('id', user.id)
    .single();

  const studentName = profile?.full_name || "Explorer_Node";
  
  // Fetch live courses database matrix
  const initialCourses = await getCourses();

  return <DashboardShell initialCourses={initialCourses || []} studentName={studentName} />;
}