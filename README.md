# Next-Gen Learning Dashboard 🚀

A futuristic, hardware-accelerated educational command center prototype. This application delivers a fluid, dark-mode Bento Grid experience with zero layout shifts, powered by Next.js Server Components streaming live data from Supabase.

---

## 🛠️ Tech Stack & Architecture Constraints

As strictly dictated by the technical evaluation criteria, no substitutions were made to the core stack:

* **Framework:** Next.js 14 (App Router Architecture)
* **Database/BaaS:** Supabase (PostgreSQL engine)
* **Styling:** Tailwind CSS (Deep dark tones & glowing accent gradients)
* **Animations:** Framer Motion (Strict Spring Physics execution)
* **Iconography:** Lucide React

---

## 🏗️ Core Architectural Choices

### 1. Server vs. Client Component Split (RSC Engine)
To maximize data security and initial page load speed, this application leverages **Next.js React Server Components (RSC)** for its primary backend orchestration pipeline.
* **Server Component (`app/dashboard/page.tsx`):** Handles secure network communication with the Supabase PostgreSQL database using confidential API environment keys. Data validation and dynamic error states are completely computed on the server side before rendering down the wire.
* **Client Components (`components/*`):** Interactive presentation layers (such as `BentoCard`, `CourseCard`, and `Sidebar`) are split into client sheets. This ensures that heavy animation logic trees and frame tracking remain client-side, isolating browser calculations away from structural page logic.

### 2. Zero Layout Shifts (CLS Optimization)
To guarantee a buttery-smooth user experience free of layout shifts during hydration or component mount states:
* Animations are strictly restricted to hardware-accelerated CSS properties: **`transform` (Y-axis translations)** and **`opacity`**.
* The system completely bypasses layout-distorting modifications (like fluctuating padding, margins, or dynamic box-model dimensions), keeping paint intervals and browser layout recalculations at absolute zero.
* `will-change: transform` styles are explicitly enforced on interactive surfaces to leverage GPU-bound rendering layers.

### 3. Staggered Page Load & Natural Spring Physics
Rather than snapping into layout instantly, elements flow onto the viewport progressively:
* **Staggered Ingress:** The `BentoGridContainer` orchestrates a controlled entry routine, sequential fading, and sliding transitions into view.
* **Spring Dynamics:** Micro-interactions discard linear ease curves in favor of crisp, physics-driven natural responses modeled explicitly on string properties (`stiffness: 300, damping: 20`).

---

## 📊 Database Schema Setup

The database layer runs on a managed Supabase Postgres instance utilizing the following schema structure:

```sql
create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

## Local Development Configuration

To run this system locally, you must establish local environment access keys.

1. Clone this repository to your machine.
2. Initialize a file named `.env.local` in the project root directory.
3. Populate it with your target Supabase connection tokens (as outlined in `.env.example`):

```env
NEXT_PUBLIC_SUPABASE_URL=[https://your-project-id.supabase.co](https://your-project-id.supabase.co)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-long-anon-public-jwt-key

---

## Setup Execution Terminal

Install dependencies using legacy peer overrides to align framework package variations smoothly:

```Bash
npm install --legacy-peer-deps

Fire up the local development engine:

```Bash
npm run dev

Open your browser window to http://localhost:3000/dashboard to inspect the implementation.
