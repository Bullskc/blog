'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

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

  // Assuming successful login redirects to dashboard or stays with success message
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
