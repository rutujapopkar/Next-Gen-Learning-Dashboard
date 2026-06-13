// types/dashboard.ts
import { LucideIcon } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at?: string;
}

export interface DeadlineItem {
  id: string;
  task: string;
  badge: string;
  urgency: 'high' | 'medium' | 'low';
}

export interface ScheduleItem {
  id: string;
  day: string;
  code: string;
  time: string;
  room: string;
}

export interface PeerMessage {
  id: string;
  name: string;
  msg: string;
  active: boolean;
  avatarColor: string;
}