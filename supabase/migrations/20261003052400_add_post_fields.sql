alter table public.posts add column if not exists tags text[];
alter table public.posts add column if not exists thumbnail_url text;
alter table public.posts add column if not exists is_featured boolean default false;
alter table public.posts add column if not exists is_private boolean default false;

-- 로그인한 사용자(authenticated)만 글을 생성(insert)할 수 있도록 RLS 정책 추가
create policy "Authenticated users can insert posts"
on public.posts for insert
to authenticated
with check (true);
