Holidays v3.7.0 (Supabase + netlify)
====================================================

This build adds:
- Email/password sign up & sign in Done.
- Username profile (per user) Still didnt add pic just text.
- Audit log page (who did what & when)Done
- CRUD on employees & holidays with 'updated_by' tracking Done.
- Two attachments per holiday (Supabase Storage) Done but hopfully no issues later.
- Reports for one employee or all employees (Excel/PDF) Done Fixed the excel style.
---------------------
1) Create a Supabase project.
2) In Supabase SQL Editor, run the SQL in `supabase.sql` (creates tables, RLS, views).
3) In Storage, create a public bucket named `holiday-files`.
4) Open `assets/config.js` and set:
   window.SUPABASE_URL  = "https://YOUR-REF.supabase.co"
   window.SUPABASE_ANON = "YOUR-ANON-KEY"
   window.ENABLE_AUTH   = true
5) Open `index.html` locally or host on Netlify/GitHub Pages.
6) Sign up first user (Username + Email + Password), then sign in.
-----------------
Learn more about the netlify deploy system
1) project Configuration .
2)Environment variables.
3)add the URL and Anon key as a varible. for the bukets to work better.
-----------------
Security Notes
--------------
- The included RLS policies allow only authenticated users to read/write.Done.
- Audit logs are readable to authenticated users via a view that exposes username (no emails).Done.

Troubleshooting
---------------
- If login requires email confirmation, enable or disable confirmation in Supabase Auth settings.
- Ensure 'holiday-files' bucket exists and is public; otherwise attachments won't display.ALL OF IT SHOULD BE PUBLIC CAUSE YOU CHANGED THE COE AGAIN.
