'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Sparkles, ShieldAlert, ArrowRight } from 'lucide-react';

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;
      
      setSuccessMessage('Password token updated successfully. Redirection sequence initiated...');
      setTimeout(() => {
        router.push('/login');
      }, 2500);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to update encryption key credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#08080a] flex items-center justify-center p-6 relative overflow-hidden select-none">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900 to-zinc-950 p-10 relative z-10 shadow-2xl"
      >
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 font-bold tracking-widest uppercase bg-violet-500/5 px-3 py-1.5 rounded-full border border-violet-500/10">
            <Sparkles className="h-4 w-4 animate-pulse" /> Override Node
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white">Update Password</h1>
          <p className="text-sm text-zinc-400 font-mono">Sign a new authentication sequence patch key</p>
        </div>

        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono mb-5">
            <ShieldAlert className="h-5 w-5 text-red-500 inline mr-2" />
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono mb-5">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleUpdatePassword} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-mono font-bold text-zinc-400 block">New Security Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
              <input 
                type="password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-zinc-950 rounded-xl border border-white/5 text-base text-white focus:border-violet-500/40 focus:outline-none"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" disabled={loading || !!successMessage}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 font-bold text-white transition-all cursor-pointer disabled:opacity-50"
          >
            <span>Update Credentials</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}