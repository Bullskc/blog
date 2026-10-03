'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export type Category = {
  id: string
  name: string
  slug?: string
  created_at?: string
}

export type Post = {
  id: string
  title: string
  content: string
  author: string
  view_count: number
  created_at: string
  category_id?: string
  tags?: string[]
  thumbnail_url?: string
  is_featured?: boolean
  is_private?: boolean
  categories: Category
}

export type CreatePostInput = {
  title: string
  content: string
  categoryId: string
  author: string
  tags?: string[]
  isFeatured?: boolean
  isPrivate?: boolean
  thumbnailUrl?: string
}

// ----------------------------------------------------
// 카테고리 목록 조회 (서버 사이드 실행)
// ----------------------------------------------------
export async function getCategories(): Promise<Category[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true })

  if (error) {
    console.error('Failed to fetch categories:', error)
    return []
  }

  return (data || []) as Category[]
}

// ----------------------------------------------------
// 블로그 글 목록 조회 (서버 사이드 실행)
// ----------------------------------------------------
export async function getPosts({
  categoryId = 'all',
  page = 1,
  postsPerPage = 6,
}: {
  categoryId?: string
  page?: number
  postsPerPage?: number
} = {}): Promise<{ posts: Post[]; totalPosts: number }> {
  const supabase = await createClient()

  let query = supabase
    .from('posts')
    .select('*, categories(*)', { count: 'exact' })

  if (categoryId && categoryId !== 'all') {
    query = query.eq('category_id', categoryId)
  }

  const from = (page - 1) * postsPerPage
  const to = from + postsPerPage - 1

  query = query.order('created_at', { ascending: false }).range(from, to)

  const { data, count, error } = await query

  if (error) {
    console.error('Failed to fetch posts:', error)
    return { posts: [], totalPosts: 0 }
  }

  return {
    posts: (data || []) as Post[],
    totalPosts: count ?? 0,
  }
}

// ----------------------------------------------------
// 신규 글 작성 (서버 사이드 세션 검증 & DB 저장)
// ----------------------------------------------------
export async function createPost(input: CreatePostInput): Promise<{
  success: boolean
  error?: string
  post?: any
}> {
  const supabase = await createClient()

  // 1. 서버 세션 및 사용자 인증 상태 확인
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    return {
      success: false,
      error: '발행 권한이 없습니다. 관리자 로그인을 먼저 진행해주세요.',
    }
  }

  // 2. 서버 사이드 데이터베이스 Insert
  const { data, error } = await supabase
    .from('posts')
    .insert({
      title: input.title,
      content: input.content,
      category_id: input.categoryId,
      author: input.author,
      tags: input.tags || [],
      is_featured: input.isFeatured ?? false,
      is_private: input.isPrivate ?? false,
      thumbnail_url: input.thumbnailUrl,
    })
    .select()

  if (error) {
    console.error('Failed to insert post:', error)
    return {
      success: false,
      error: error.message || '게시글 저장 중 오류가 발생했습니다.',
    }
  }

  // 3. 캐시 갱신
  revalidatePath('/')
  revalidatePath('/admin/write')

  return {
    success: true,
    post: data?.[0],
  }
}

// ----------------------------------------------------
// 로그인 & 회원가입 액션 (기존 기능 유지)
// ----------------------------------------------------
export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    redirect(`/login?error=${encodeURIComponent('이메일과 비밀번호를 입력해주세요.')}`)
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`)
  }

  redirect(`/?message=${encodeURIComponent('로그인 성공')}`)
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    redirect(`/login?mode=signup&error=${encodeURIComponent('이메일과 비밀번호를 입력해주세요.')}`)
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    redirect(`/login?mode=signup&error=${encodeURIComponent(error.message)}`)
  }

  redirect(`/login?mode=login&message=${encodeURIComponent('이메일 확인을 위해 수신함을 확인해주세요.')}`)
}
