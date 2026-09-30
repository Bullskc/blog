import Link from 'next/link'
import { login, signup } from './actions'
import styles from './auth.module.css'

export default async function AuthPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const isSignup = params.mode === 'signup';
  const error = params.error as string | undefined;
  const message = params.message as string | undefined;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoBg} />
          <div className={styles.logoShield}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 0L0 2.22222V5.55556C0 8.41111 2.13333 11.0611 5 11.7778C7.86667 11.0611 10 8.41111 10 5.55556V2.22222L5 0ZM4.44444 8.88889L1.66667 6.11111L2.45 5.32778L4.44444 7.31667L7.99444 3.76667L8.77778 4.55556L4.44444 8.88889Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        <div className={styles.badge}>
          <div className={styles.dot} />
          INTRANET SECURE NODE V4.2
        </div>

        <h1 className={styles.title}>신기철 법무사 사무소</h1>
        <p className={styles.subtitle}>사무소 관리자 전용 보안 인증 시스템</p>

        <div className={styles.warningBox}>
          <div className={styles.warningIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 10l-4 4-2-2 4-4 2 2zm7-7l-3 3-2-2-4 4 1.5 1.5-6.5 6.5-1.5-1.5-3 3 5 5 3-3-1.5-1.5 6.5-6.5 1.5 1.5 4-4-2-2 3-3-1-1zM4.5 22.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
          </div>
          <div className={styles.warningText}>
            본 시스템은 인가된 <strong>신기철 법무사 사무소</strong> 임직원 전용 업무 포털입니다. 비인가자의 접근 및 무단 조작은 관련 법령에 의해 민·형사상 처벌을 받을 수 있습니다.
          </div>
        </div>

        {error && (
          <div className={`${styles.message} ${styles.error}`}>
            {error}
          </div>
        )}

        {message && (
          <div className={`${styles.message} ${styles.success}`}>
            {message}
          </div>
        )}

        <form className={styles.form} action={isSignup ? signup : login}>
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label className={styles.label} htmlFor="email">관리자 계정 식별자</label>
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.inputIconLeft}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="master@shinlaw.kr"
                className={styles.input}
                defaultValue={isSignup ? '' : 'master@shinlaw.kr'}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label className={styles.label} htmlFor="password">보안 인증 비밀번호</label>
              <div className={styles.labelRight}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                단방향 암호화
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.inputIconLeft}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••••••"
                className={styles.input}
              />
              <button type="button" className={styles.inputIconRight} title="비밀번호 표시">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>

          {!isSignup && (
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxRow}>
                <input type="checkbox" className={styles.checkbox} defaultChecked />
                <span className={styles.checkboxLabel}>관리자 아이디 저장</span>
              </label>
              <label className={styles.checkboxRow}>
                <input type="checkbox" className={styles.checkbox} />
                <span className={styles.checkboxLabel}>
                  IP 보안 접속 <span className={styles.checkboxSubLabel}>(공인 IP 인증 유지)</span>
                </span>
              </label>
            </div>
          )}

          <button type="submit" className={styles.submitBtn}>
            <div className={styles.submitIconLeft}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
              </svg>
            </div>
            {isSignup ? '관리자 계정 등록' : '관리자 보안 로그인'}
            <div className={styles.submitIconRight}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
        </form>

        <div className={styles.helpText}>
          계정 분실 또는 접속 장애 시 
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a48148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span className={styles.helpPhone}>사무국 전산실 02-588-1235</span>
        </div>

        <div className={styles.footerBox}>
          <div className={styles.sslText}>
            <div className={styles.dot} />
            256-bit SSL 암호화 세션 연결됨
          </div>
          <div className={styles.footerInfo}>
            최종 인증 IP: <span className={styles.footerStrong}>211.234.xx.xx</span> (서초구 본청)
          </div>
          <div className={styles.footerInfo}>
            대한법무사협회 및 서울중앙지방법무사회 보안 표준 권고 준수
          </div>
        </div>

        <Link href={isSignup ? '/login?mode=login' : '/login?mode=signup'} className={styles.toggleLink}>
          {isSignup ? '이미 계정이 있으신가요? 로그인하기' : '새 관리자 계정이 필요하신가요? 회원가입하기'}
        </Link>
      </div>
    </div>
  )
}
