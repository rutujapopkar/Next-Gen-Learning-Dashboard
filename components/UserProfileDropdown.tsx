'use client';

import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { LogOut, User, Settings, X, Upload, Phone, Mail, FileText, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UserProfileDropdown({ initialName }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const dropdownRef = useRef<any>(null);

  // Form State
  const [fullName, setFullName] = useState(initialName || 'User');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [imageError, setImageError] = useState(false);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 1. RUN THIS ON MOUNT TO RETRIEVE THE CHOSEN IMAGE INSTANTLY ON LOAD
  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setEmail(user.email || '');

      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (data) {
        setFullName(data.full_name || '');
        setPhone(data.phone || '');
        setAvatarUrl(data.avatar_url || '');
        setImageError(false);
      }
    } catch (err) {
      console.error('Data load error', err);
    }
  };

  const handleAvatarUpload = async (e: any) => {
    try {
      setUploading(true);
      setImageError(false);
      const file = e.target.files[0];
      if (!file) return;

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, file, { 
          cacheControl: '3600',
          upsert: true 
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);
      
      setAvatarUrl(publicUrl);
    } catch (err: any) {
      console.error('Upload Error:', err);
    } finally {
      setUploading(false);
    }
  };

  const handleSaveChanges = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase.from('profiles').update({
        full_name: fullName,
        phone: phone,
        avatar_url: avatarUrl
      }).eq('id', user?.id);

      if (error) throw error;

      setIsModalOpen(false);
      window.location.reload(); // Force refresh to re-sync layouts
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/'; 
  };


  return (
    <div className="relative" ref={dropdownRef}>
      {/* Top Navbar Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-all cursor-pointer"
      >
        <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center text-xs font-bold overflow-hidden shrink-0">
          {avatarUrl && !imageError ? (
            <img src={avatarUrl} onError={() => setImageError(true)} className="h-full w-full object-cover" />
          ) : (
            <span className="text-white text-xs uppercase">{fullName.charAt(0)}</span>
          )}
        </div>
        <span className="text-sm font-medium pr-2 text-white">{fullName}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-xl p-1 shadow-2xl z-[100]"
          >
            <button 
              onClick={() => { loadProfileData(); setIsModalOpen(true); setIsOpen(false); }} 
              className="w-full flex items-center gap-2 p-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg border-0 bg-transparent cursor-pointer text-left"
            >
              <Settings className="h-4 w-4" /> Edit Profile
            </button>
            <button 
              onClick={handleLogout} 
              className="w-full flex items-center gap-2 p-2 text-sm text-red-400 hover:bg-red-400/5 rounded-lg border-0 bg-transparent cursor-pointer text-left"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown Edit Card Menu Wrapper */}
      {isModalOpen && (
        <div className="absolute right-0 mt-3 w-[360px] md:w-[400px] bg-[#0c0c0e] border border-white/10 rounded-2xl p-6 shadow-2xl z-[999]">
          
          <button 
            onClick={() => setIsModalOpen(false)} 
            className="absolute top-4 right-4 text-zinc-500 hover:text-white border-0 bg-transparent cursor-pointer transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          
          <div className="mb-5">
            <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Settings className="text-violet-500 h-4 w-4" /> Edit Profile Matrix
            </h2>
            <p className="text-[11px] text-zinc-500 font-mono mt-0.5">Modify system user profile parameters.</p>
          </div>

          <form onSubmit={handleSaveChanges} className="space-y-4">
            {/* Avatar Selector Panel */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-950 border border-white/5">
              <div className="h-12 w-12 rounded-full bg-zinc-800 overflow-hidden flex items-center justify-center border border-white/10 shrink-0">
                {avatarUrl && !imageError ? (
                  <img src={avatarUrl} onError={() => setImageError(true)} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-white text-sm uppercase font-bold">{fullName.charAt(0)}</span>
                )}
              </div>
              <label className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] font-bold cursor-pointer transition-colors text-white font-mono">
                {uploading ? 'UPLOADING...' : 'CHANGE IMAGE'}
                <input type="file" className="hidden" onChange={handleAvatarUpload} accept="image/*" />
              </label>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono text-zinc-400 block">Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-2.5 bg-black rounded-lg border border-white/10 text-white outline-none focus:border-violet-500 text-xs transition-all" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono text-zinc-500 block">Email Channel (Protected)</label>
              <input type="email" value={email} disabled className="w-full p-2.5 bg-zinc-950 rounded-lg border border-white/5 text-zinc-500 cursor-not-allowed text-xs" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono text-zinc-400 block">Phone Signature</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2.5 bg-black rounded-lg border border-white/10 text-white outline-none focus:border-violet-500 text-xs transition-all" />
            </div>

            <button type="submit" disabled={loading || uploading} className="w-full py-2.5 mt-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-bold transition-all cursor-pointer disabled:opacity-50 text-xs tracking-wide">
              {loading ? 'Saving Parameters...' : 'Save Changes'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}