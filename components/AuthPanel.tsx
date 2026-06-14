'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mail, Lock, User, ShieldAlert, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';

type AuthMode = 'signin' | 'signup' | 'forgot';

export default function AuthPanel() {
  const [mode, setMode] = useState<AuthMode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  
  const [infoMessage, setInfoMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setInfoMessage('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        const { data: authData, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });

        if (signUpError) throw signUpError;

        const userId = authData?.user?.id;

        if (userId) {
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([{ id: userId, full_name: fullName }]);

          if (profileError) throw profileError;
          
          setInfoMessage('Registration complete! Proceeding to access login...');
          setMode('signin');
          setPassword('');
          setFullName('');
        } else {
          throw new Error('Authentication subsystem failed to allocate a unique user signature token.');
        }
      } 
      
      // Inside AuthPanel.tsx, find the mode === 'signin' block
else if (mode === 'signin') {
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) throw signInError;

  // Simply reload the page. The Server Component (page.tsx) 
  // will now see the cookie and switch to DashboardShell automatically.
  window.location.href = '/';
}

      else if (mode === 'forgot') {
        const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}`,
        });

        if (resetError) throw resetError;
        setInfoMessage('A recovery reset link has been broadcast to your email.');
        setMode('signin');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Authentication sequence pipeline conflict.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#08080a] flex items-center justify-center p-6 relative overflow-hidden select-none">
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl pointer-events-none" />

      <motion.div 
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900 to-zinc-950 p-10 md:p-12 relative z-10 shadow-2xl"
      >
        <div className="text-center space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 font-bold tracking-widest uppercase bg-violet-500/5 px-4 py-1.5 rounded-full border border-violet-500/10">
            <Sparkles className="h-4 w-4 animate-pulse" /> Security Matrix Gate
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            {mode === 'signin' && "Access Terminal"}
            {mode === 'signup' && "Create Student Node"}
            {mode === 'forgot' && "Recover Credentials"}
          </h1>
        </div>

        {errorMessage && (
          <div className="flex items-center gap-3.5 p-5 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm md:text-base font-mono mb-6">
            <ShieldAlert className="h-6 w-6 shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        {infoMessage && (
          <div className="flex items-center gap-3.5 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm md:text-base font-mono mb-6">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
            <span>{infoMessage}</span>
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-6">
          <AnimatePresence mode="popLayout">
            {mode === 'signup' && (
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                className="space-y-2.5"
              >
                <label className="text-sm md:text-base font-mono font-bold text-zinc-400 block">Full Student Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                  <input 
                    type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-zinc-950 rounded-xl border border-white/5 text-base md:text-lg text-white font-medium focus:border-violet-500/40 focus:outline-none transition-colors"
                    placeholder="e.g. Rutuja Popkar"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-2.5">
            <label className="text-sm md:text-base font-mono font-bold text-zinc-400 block">Email Address Datastream</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
              <input 
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zinc-950 rounded-xl border border-white/5 text-base md:text-lg text-white font-medium focus:border-violet-500/40 focus:outline-none transition-colors"
                placeholder="student@terminal.edu"
              />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <label className="text-sm md:text-base font-mono font-bold text-zinc-400 block">Security Password</label>
                {mode === 'signin' && (
                  <button 
                    type="button" onClick={() => setMode('forgot')}
                    className="text-xs md:text-sm font-mono text-zinc-500 hover:text-violet-400 bg-transparent border-0 cursor-pointer"
                  >
                    Forgot Key Token?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <input 
                  type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zinc-950 rounded-xl border border-white/5 text-base md:text-lg text-white font-medium focus:border-violet-500/40 focus:outline-none transition-colors"
                  placeholder="••••••••••••"
                />
              </div>
            </div>
          )}

          <button 
            type="submit" disabled={loading}
            className="w-full mt-3 flex items-center justify-center gap-3 py-4 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-base md:text-lg font-black text-white transition-all cursor-pointer disabled:opacity-50"
          >
            <span>
              {loading ? "Decrypting Protocols..." : 
               mode === 'signin' ? "Mount Dashboard" : 
               mode === 'signup' ? "Initialize Credentials" : "Broadcast Reset Directives"}
            </span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>

        <div className="text-center mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4">
          {mode !== 'signin' ? (
            <button 
              onClick={() => { setMode('signin'); setErrorMessage(''); }}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-bold font-mono text-zinc-400 hover:text-white transition-colors bg-transparent border-0 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" /> Return to Access Terminal
            </button>
          ) : (
            <button 
              onClick={() => { setMode('signup'); setErrorMessage(''); }}
              className="text-xs md:text-sm font-bold font-mono text-zinc-500 hover:text-violet-400 transition-colors bg-transparent border-0 cursor-pointer"
            >
              Unregistered signature? Register Node First
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}