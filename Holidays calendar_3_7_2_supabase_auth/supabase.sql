
-- ====== Holidays calendar v3.7.0 Supabase Schema ======

-- USERS PROFILE
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  created_at timestamptz default now()
);

-- EMPLOYEES
create table if not exists public.employees (
  id bigserial primary key,
  code text,
  full_name text not null,
  city text,
  department text,
  updated_by uuid references auth.users(id),
  updated_by_username text,
  created_at timestamptz default now()
);

-- HOLIDAYS
create table if not exists public.holidays (
  id bigserial primary key,
  employee_id bigint not null references public.employees(id) on delete cascade,
  start_g date not null,
  end_g date not null,
  start_h text,
  end_h text,
  type text,
  reason text,
  duration integer,
  file_url text,
  file2_url text,
  updated_by uuid references auth.users(id),
  updated_by_username text,
  created_at timestamptz default now()
);

-- AUDIT LOGS
create table if not exists public.audit_logs (
  id bigserial primary key,
  user_id uuid references auth.users(id),
  action text not null,          -- insert/update/delete
  entity text not null,          -- 'employee' | 'holiday' | etc.
  entity_id bigint,
  payload jsonb,
  at timestamptz default now()
);

-- Helper view: show username on audit rows
create or replace view public.audit_logs_with_user as
select a.*, p.username
from public.audit_logs a
left join public.profiles p on p.id = a.user_id;

-- RLS
alter table public.profiles enable row level security;
alter table public.employees enable row level security;
alter table public.holidays enable row level security;
alter table public.audit_logs enable row level security;

-- Authenticated users can see/modify everything (org-shared). Adjust if you need stricter rules.
create policy "profiles_read_self_and_all" on public.profiles
  for select using ( auth.role() = 'authenticated' );

create policy "profiles_write_self" on public.profiles
  for insert with check ( auth.uid() = id );
create policy "profiles_update_self" on public.profiles
  for update using ( auth.uid() = id );

create policy "employees_read" on public.employees
  for select using ( auth.role() = 'authenticated' );
create policy "employees_write" on public.employees
  for all using ( auth.role() = 'authenticated' ) with check ( auth.role() = 'authenticated' );

create policy "holidays_read" on public.holidays
  for select using ( auth.role() = 'authenticated' );
create policy "holidays_write" on public.holidays
  for all using ( auth.role() = 'authenticated' ) with check ( auth.role() = 'authenticated' );

create policy "audit_read" on public.audit_logs
  for select using ( auth.role() = 'authenticated' );
create policy "audit_write" on public.audit_logs
  for insert with check ( auth.role() = 'authenticated' );

-- TRIGGERS to populate updated_by_username from profiles (optional convenience)
create or replace function public.set_updated_by_username_emp()
returns trigger language plpgsql as $$
begin
  if new.updated_by is not null then
    select username into new.updated_by_username from public.profiles where id = new.updated_by;
  end if;
  return new;
end$$;

drop trigger if exists trg_emp_updated_by on public.employees;
create trigger trg_emp_updated_by before insert or update on public.employees
for each row execute function public.set_updated_by_username_emp();

create or replace function public.set_updated_by_username_hol()
returns trigger language plpgsql as $$
begin
  if new.updated_by is not null then
    select username into new.updated_by_username from public.profiles where id = new.updated_by;
  end if;
  return new;
end$$;

drop trigger if exists trg_hol_updated_by on public.holidays;
create trigger trg_hol_updated_by before insert or update on public.holidays
for each row execute function public.set_updated_by_username_hol();

-- INDEXES
create index if not exists idx_emp_code on public.employees(code);
create index if not exists idx_emp_name on public.employees(full_name);
create index if not exists idx_hol_emp on public.holidays(employee_id);
create index if not exists idx_hol_start on public.holidays(start_g);
