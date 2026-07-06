'use client';

import React, { useState } from 'react';
import { 
  ShieldAlert, User, CreditCard, FileDown, FilePlus2, 
  Home, BookOpen, AlertCircle, Award, CheckCircle2, 
  Clock, Download, RefreshCw, Bookmark, ShieldCheck 
} from 'lucide-react';

// Import your folder sub-tiles for full layout framework compatibility 
import DocumentCenterTile from './DocumentCenterTile';
import FeeStatusTile from './FeeStatusTile';
import RegistrationPortalTile from './RegistrationPortalTile';

export default function AdministrativeHub() {
  const [activeFormTab, setActiveFormTab] = useState<'profile' | 'finance' | 'docs' | 'logistics'>('profile');

  return (
    <div className="space-y-6 antialiased font-sans text-sm text-zinc-200">
      
      {/* Structural Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/5 font-mono">
        <div className="space-y-0.5">
          <h2 className="text-lg font-bold text-white tracking-tight">🛡️ Administrative Protocols Terminal</h2>
          <p className="text-xs text-zinc-500">Logistical framework managing records, digital downloads, tuition lines, and campus compliance.</p>
        </div>
      </div>

      {/* =========================================================
          PRIMARY WORKSPACE MATRIX LAYOUT GATES
         ========================================================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* COLUMN 1: STUDENT PROFILE DATA CARD */}
        <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <User className="h-4 w-4 text-violet-400" />
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Institutional Identity Profile</h3>
            </div>

            {/* Profile Credentials Records Grid */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-black/20 border border-white/5">
              <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 shrink-0 font-mono flex items-center justify-center font-bold text-sm text-white shadow-md">RP</div>
              <div className="min-w-0">
                <h4 className="text-sm font-black text-white truncate">Rutuja Popkar</h4>
                <p className="text-[10px] font-mono text-zinc-500 mt-0.5">Dept: Computer Science Engineering</p>
                <p className="text-[10px] font-mono text-violet-400 font-bold">Current Term: Semester VI</p>
              </div>
            </div>

            <div className="space-y-2.5 font-mono text-[11px] text-zinc-400 pt-2">
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-zinc-500">Roll Number:</span>
                <span className="text-zinc-300 font-bold">CSE-2026-045</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-zinc-500">PRN Code:</span>
                <span className="text-zinc-300 font-bold">92300452187B</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-zinc-500">Contact Line:</span>
                <span className="text-zinc-300 font-bold">+91 98765 43210</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Emergency Link:</span>
                <span className="text-zinc-300 font-bold">+91 98765 43219</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-violet-500/5 border border-violet-500/10 text-violet-400 font-mono text-[10px] uppercase tracking-wide text-center mt-6">
            Identity Card Status: Active Verified Node
          </div>
        </div>

        {/* COLUMN 2: FINANCIAL ACCOUNTING & LEAVE MANAGEMENT TRAFFIC */}
        <div className="space-y-6">
          
          {/* FEE MANAGEMENT MATRIX (Integrates FeeStatusTile Layout elements) */}
          <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-emerald-400" />
                <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Tuition Ledger Accounts</h3>
              </div>
            </div>
            {/* Renders your live tuition accounts dashboard block */}
            <FeeStatusTile />
            
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-1">
              <div className="p-2 rounded bg-black/20 border border-white/5">
                <p className="text-zinc-500 uppercase tracking-wider text-[8px]">Paid Term Balance</p>
                <p className="text-xs font-bold text-zinc-300 mt-0.5">$4,800.00</p>
              </div>
              <button className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg text-xs font-mono transition-all border-0 shadow-md cursor-pointer flex items-center justify-center">
                💳 Online Payment Gate
              </button>
            </div>
          </div>

          {/* LEAVE APPLICATIONS TRACKING BOARD */}
          <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-3">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2.5">
              <FilePlus2 className="h-4 w-4 text-fuchsia-400" />
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Leave Request Compliance</h3>
            </div>

            <div className="space-y-2 font-mono text-[11px]">
              <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-zinc-300 font-sans">Medical Absence Filing</p>
                  <p className="text-[9px] text-zinc-500 mt-0.5">Token ID: #L-9022</p>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">Approved</span>
              </div>

              <button className="w-full py-2 bg-zinc-950 hover:bg-zinc-900 border border-white/5 hover:border-fuchsia-500/20 text-zinc-400 hover:text-zinc-200 text-xs font-bold rounded-lg transition-all cursor-pointer">
                ➕ File New Leave Application
              </button>
            </div>
          </div>

        </div>

        {/* COLUMN 3: DIGITAL DOCUMENTS DESK & REPOS */}
        <div className="space-y-6">
          
          {/* DIGITAL DOCUMENTS VAULT (Integrates DocumentCenterTile items) */}
          <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <FileDown className="h-4 w-4 text-fuchsia-400" />
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Document Registry Desks</h3>
            </div>
            {/* Renders your live document certificate list desk */}
            <DocumentCenterTile />

            {/* Expanded Document Retrieval Grid */}
            <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
              {["Bonafide Cert", "Leaving Doc", "Digital ID Card", "Fee Receipt", "Mark Sheets", "Official Transcript"].map((doc, idx) => (
                <button key={idx} className="p-2 rounded-xl bg-black/20 border border-white/5 hover:border-zinc-700/50 flex justify-between items-center group transition-all text-left text-zinc-400 hover:text-white cursor-pointer">
                  <span className="truncate pr-1">{doc}</span>
                  <Download className="h-3 w-3 text-zinc-600 group-hover:text-fuchsia-400 transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* =========================================================
          ROW 2: LOGISTICAL SYSTEM REPOS (HOSTEL, LIBRARY, CLAIMS)
         ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* HOSTEL & MESS MATRIX DETAILS */}
        <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Home className="h-4 w-4 text-violet-400" />
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Campus Logistics & Housing</h3>
          </div>

          <div className="space-y-3 font-mono text-[11px] text-zinc-400">
            <div className="p-2.5 rounded-xl bg-black/20 border border-white/5 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-zinc-300 font-sans">Hostel Assignment Block</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Room Allocated: 404-Delta (Double Occupancy)</p>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-black/20 border border-white/5 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-zinc-300 font-sans">Mess Operations Smart Tracker</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Active Cycle: Type A Premium Vegetarian Card</p>
              </div>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded px-1.5 py-0.2 font-bold uppercase">Valid</span>
            </div>
          </div>
        </div>

        {/* LIBRARY ACCOUNTS METRICS SYSTEM */}
        <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <BookOpen className="h-4 w-4 text-amber-500" />
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">OPAC Library Ledger</h3>
          </div>

          <div className="space-y-2.5 font-mono text-[11px]">
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-bold text-zinc-300 font-sans truncate">Neural Networks Principles</p>
                <p className="text-[9px] text-zinc-500 mt-0.5">Due Date: July 18 • Overdue Fine: <span className="text-emerald-400 font-bold">$0.00</span></p>
              </div>
              <div className="flex gap-1 shrink-0 text-[9px] font-bold">
                <button className="p-1 rounded bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white cursor-pointer"><RefreshCw className="h-3 w-3" /></button>
                <button className="p-1 rounded bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white cursor-pointer"><Bookmark className="h-3 w-3" /></button>
              </div>
            </div>

            <p className="text-[10px] text-zinc-600 tracking-tight leading-tight uppercase">Aggregate Books Issued Tracking Limit: 1 / 3 Items Active</p>
          </div>
        </div>

        {/* COMPLAINTS & SCHOLARSHIPS PROTOCOLS GATES */}
        <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <AlertCircle className="h-4 w-4 text-red-400" />
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Grievance & Scholarship Modules</h3>
          </div>

          <div className="space-y-2 font-mono text-[11px]">
            {/* Raise Complaint Infrastructure tracking lists */}
            <div className="p-2 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-sans">WiFi Infrastructure Outage Ticket</span>
              <span className="text-[10px] bg-amber-500/10 text-amber-500 border border-amber-500/20 px-1.5 rounded font-bold uppercase animate-pulse">Tracking</span>
            </div>
            
            {/* Scholarship scheme status box layout */}
            <div className="p-2.5 rounded-xl bg-violet-500/5 border border-violet-500/10 flex items-start gap-2 text-violet-400">
              <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold font-sans text-zinc-200">Merit Research Scholarship Fund</p>
                <p className="text-[9px] text-zinc-500 mt-0.5">Status Check: <span className="text-emerald-400 font-bold">Verified & Approved</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}