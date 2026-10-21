# 🗓️ Holidays calendar v3.7.2

**Holidays calendar** is a full-stack, bilingual (Arabic/English) employee leave management system. It is designed to track, manage, and audit employee holidays with a modern, responsive dashboard. 

## 🔗 Live Demo

🚀 **Website:** [https://holidaycalendars.netlify.app)

## ✨ Key Features

*   **🔐 Secure Authentication:** Email/password sign-up and sign-in powered by Supabase Auth.
*   **👤 User Profiles:** Unique usernames for every user (Text-based profiles currently; profile pictures planned for future updates).
*   **📝 Full CRUD Operations:** Create, Read, Update, and Delete employees and holiday records with automatic `updated_by` tracking.
*   **📎 File Attachments:** Upload up to two attachments per holiday (stored securely in Supabase Storage).
*   **🕵️ Comprehensive Audit Log:** A dedicated page to track "who did what and when" in plain, readable text.
*   **📊 Advanced Reporting:** Generate reports for a single employee or all employees, with styled Excel and PDF export capabilities.
*   **🌍 Bilingual UI:** Seamless AR/EN translation toggling without breaking the layout direction.

## 🏗️ Architecture & Tech Stack

This project uses a modern, serverless architecture:

1.  **Frontend:** Vanilla JavaScript, HTML5, CSS3.
2.  **Database & Auth:** Supabase (PostgreSQL + Row Level Security).
3.  **Storage:** Supabase Storage (for holiday attachments).
4.  **Hosting:** Netlify (Continuous Deployment via GitHub).
5.  **Keep-Alive:** Cron-job.org (prevents the free Supabase tier from pausing).

## 🚀 How to Run Locally & Setup

**1. Database Setup (Supabase)**
*   Create a new project on [Supabase](https://supabase.com).
*   In the SQL Editor, run the provided SQL code in `supabase.sql` (creates tables, RLS policies, and views).
*   In the **Storage** section, create a public bucket named exactly: `holiday-files`.
*   **Important:** Ensure the `holiday-files` bucket is set to **Public** so attachments display correctly.

**2. Environment Variables (Netlify Setup)**
Instead of hardcoding your keys, you can securely inject them using Netlify:
1. In Netlify, go to **Site Configuration > Environment Variables**.
2. Add the following variables:
   *   `SUPABASE_URL` = `https://YOUR-REF.supabase.co`
   *   `SUPABASE_ANON_KEY` = `YOUR-ANON-KEY`
3. *(Alternatively, for local testing, just open `assets/config.js` and paste them there).*

**3. Authentication Setup**
*   Go to your Supabase Dashboard > Authentication > Providers.
*   If you want to disable email confirmation for easier testing, toggle "Confirm email" off in the Email settings.

**4. Run the App**
*   Open `index.html` locally or host on Netlify/GitHub Pages.
*   Sign up your first user (Username + Email + Password), then sign in.

## 🔒 Security Notes

*   **RLS Policies:** The included Row Level Security policies allow only authenticated users to read/write data.
*   **Audit Logs:** Logs are readable to authenticated users via a secure view that exposes the username (without leaking emails).

## 🛠️ Troubleshooting

*   **Attachments not loading?** Ensure the `holiday-files` bucket exists and is marked as **Public** in Supabase Storage.
*   **Login issues?** Check your Supabase Auth settings. If email confirmation is enabled, check your spam folder for the verification link.

## 🚀 Future Enhancements

*   **Profile Pictures:** Allow users to upload an avatar to their profile.
*   **Automated Backup:** Set up a cron job to back up the PostgreSQL database regularly.
*   **Advanced Role-Based Access:** Distinguish between Admin (can delete) and Viewer (read-only) roles.
