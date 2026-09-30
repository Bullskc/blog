create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  category_id uuid references public.categories(id),
  author text not null,
  view_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.categories enable row level security;
alter table public.posts enable row level security;

create policy "Categories are viewable by everyone." on public.categories for select using (true);
create policy "Posts are viewable by everyone." on public.posts for select using (true);
