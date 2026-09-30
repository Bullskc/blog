import Link from 'next/link';
import BlogSection from './components/BlogSection';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 border-b border-gray-100 sticky top-0 bg-white z-50 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-100 text-amber-700 flex items-center justify-center rounded-sm font-bold text-xl">신</div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight">신기철 법무사 사무소</span>
            <span className="text-[10px] text-gray-500 tracking-widest">SHIN KI-CHUL LAW OFFICE</span>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="#" className="text-gray-900 hover:text-blue-600 transition-colors">주요 업무 안내</Link>
          <Link href="#" className="text-gray-900 hover:text-blue-600 transition-colors">법률 칼럼</Link>
          <Link href="#" className="text-gray-900 hover:text-blue-600 transition-colors">온라인 상담 신청</Link>
          <Link href="#" className="text-gray-900 hover:text-blue-600 transition-colors">사무소 소개</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block text-gray-500">
            <svg className="w-4 h-4 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="text" placeholder="사례 결과 검색" className="pl-9 pr-4 py-2 bg-gray-50 border-none rounded-full text-xs w-48 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <Link href="/login" className="bg-[#0f172a] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-gray-800 transition-colors">
            온라인 상담 신청
          </Link>
          <Link href="/login" className="text-gray-500 hover:text-gray-900 text-xs font-medium ml-2 border border-gray-200 px-3 py-1.5 rounded">
            로그인
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 pt-20 pb-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
          <div className="lg:w-3/5 lg:pr-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 bg-white text-blue-700 text-xs font-bold mb-6 shadow-sm">
              <span className="mr-1">대한법무사협회 공인 신규법인 등기 1위</span>
              <span className="mx-2 text-blue-200">|</span>
              <span className="text-gray-600">서울 중앙지법 관할 전문 1위 (2024년)</span>
            </div>
            
            <h1 className="text-4xl lg:text-[44px] font-extrabold leading-[1.3] mb-6 tracking-tight text-gray-900">
              복잡한 법률 절차와 등기·상속, <br/>
              <span className="text-[#a48148]">18년 경력의 신기철 법무사</span>가 <br/>
              직접 든든하게 해결합니다.
            </h1>
            
            <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-xl">
              부동산 등기·상속 한정승인/포기·법인설립 및 변경등기·가사사건 | 사무장 대리 없는 <br/>
              <strong className="text-gray-900 font-semibold">100% 법무사 직접 검토 및 상담</strong>으로 귀중한 재산권과 법적 권리를 든든히 지켜드립니다.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/login" className="bg-[#0f172a] text-white px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-gray-800 transition-all shadow-lg flex items-center">
                <svg className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                3분 빠른 온라인 상담 접수 &rarr;
              </Link>
              <a href="tel:02-588-1234" className="bg-white text-gray-800 border border-gray-200 px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-gray-50 transition-all shadow-sm flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                전화 상담 02-588-1234
              </a>
            </div>
            
            <div className="flex items-center space-x-12 mt-12 pt-8 border-t border-gray-200/60">
              <div>
                <div className="text-2xl font-extrabold text-gray-900 tracking-tight">14,200<span className="text-lg">건+</span></div>
                <div className="text-[11px] font-bold text-gray-500 mt-1 uppercase tracking-wider">누적 상담 실적</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gray-900 tracking-tight">99.4<span className="text-lg">%</span></div>
                <div className="text-[11px] font-bold text-gray-500 mt-1 uppercase tracking-wider">등기 승소·통과율</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gray-900 tracking-tight">1:1 <span className="text-lg">전담</span></div>
                <div className="text-[11px] font-bold text-gray-500 mt-1 uppercase tracking-wider">법무사 직접 상담</div>
              </div>
            </div>
          </div>
          
          {/* Profile Card */}
          <div className="lg:w-2/5 mt-12 lg:mt-0 relative">
            <div className="absolute inset-0 bg-[#fefce8] rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 border border-yellow-100"></div>
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6 border-b border-gray-100 pb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-xl mr-4 overflow-hidden border border-gray-200 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 flex items-center tracking-tight">
                    신기철 <span className="text-[10px] font-bold bg-[#fef08a] text-yellow-900 px-2 py-0.5 rounded ml-2 uppercase tracking-wide">대표 법무사</span>
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-medium">서울중앙지방법원 소속 대표 법무사<br/>제45회 법무사 시험 합격</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-[#a48148] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                  서울대학교 법과대학 법학과 졸업
                </li>
                <li className="flex items-start text-sm text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-[#a48148] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                  제12대 대한법무사회 이사 역임
                </li>
                <li className="flex items-start text-sm text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-[#a48148] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                  (현) 서울중앙지방법원 민사·가사 조정위원
                </li>
                <li className="flex items-start text-sm text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-[#a48148] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                  (현) 대한법무사협회 상속·부동산등기 실무 전임연구위원
                </li>
              </ul>
              
              <div className="bg-[#f8f9fc] rounded-xl p-5 mb-4 border border-blue-50">
                <p className="text-[13px] font-semibold text-[#1e293b] italic leading-relaxed text-center">
                  "평생 모은 재산을 남의 서류처럼 함부로 다루지 않겠습니다.<br/> 사건의 예방부터 꼼꼼한 사후 처리까지 직접 챙깁니다."
                </p>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <div className="text-xs text-green-600 flex items-center font-bold">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  대한법무사협회 등록 사무소
                </div>
                <a href="#" className="text-[13px] font-bold text-[#a48148] hover:text-yellow-800 flex items-center bg-yellow-50 px-3 py-1.5 rounded-full">
                  약력 자세히 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Area */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14">
            <div>
              <div className="text-xs font-extrabold text-blue-600 tracking-widest uppercase mb-3">Core Practice Area</div>
              <h2 className="text-[32px] font-extrabold text-gray-900 tracking-tight">원스톱 핵심 법률·등기 서비스</h2>
            </div>
            <p className="text-gray-500 text-[15px] mt-4 md:mt-0 max-w-md text-right leading-relaxed font-medium">
              사건의 초기 상담 단계부터 법원·등기소 서류 접수 및 최종 통지서 수령까지 빈틈없이 직접 진행합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#f8f9fc] rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#2563eb] mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h5"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">부동산 등기</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 h-20">
                소유권이전, 근저당권 설정, 전세권설정 및 말소 등 복잡한 권리관계를 안전하게 지원.
              </p>
              <a href="#" className="text-[13px] font-bold text-gray-900 flex items-center group-hover:text-blue-600 transition-colors">자세히 보기 <svg className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
            </div>
            {/* Card 2 */}
            <div className="bg-[#f8f9fc] rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#ea580c] mb-6 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">상속·유언</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 h-20">
                상속포기/한정승인 기한 엄수, 상속재산분할협의서 작성 및 원스톱 등기 대행.
              </p>
              <a href="#" className="text-[13px] font-bold text-gray-900 flex items-center group-hover:text-orange-600 transition-colors">자세히 보기 <svg className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
            </div>
            {/* Card 3 */}
            <div className="bg-[#f8f9fc] rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#4f46e5] mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">법인 등기</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 h-20">
                주식회사 설립, 본점 이전, 임원 변경, 해산 및 청산 등 기업 맞춤 컨설팅.
              </p>
              <a href="#" className="text-[13px] font-bold text-gray-900 flex items-center group-hover:text-indigo-600 transition-colors">자세히 보기 <svg className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
            </div>
            {/* Card 4 */}
            <div className="bg-[#f8f9fc] rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#0d9488] mb-6 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">민사·가사</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 h-20">
                가압류/가처분, 지급명령, 소장 작성 대행 및 재판 이혼, 개명, 후견인 선임.
              </p>
              <a href="#" className="text-[13px] font-bold text-gray-900 flex items-center group-hover:text-teal-600 transition-colors">자세히 보기 <svg className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section (Client Component) */}
      <BlogSection />

      {/* CTA Section */}
      <section className="bg-[#0f172a] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-blue-500" fill="currentColor">
            <polygon points="0,100 100,0 100,100" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-10 md:mb-0 md:pr-10">
              <div className="flex items-center text-[#e4c07c] text-xs font-bold mb-4 tracking-widest uppercase">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                비용과 시간 낭비 방지를 위한 사전 징후 점검
              </div>
              <h2 className="text-[32px] font-bold mb-5 leading-tight">
                온라인 게시판이나 블로그 정보만으로 <br className="hidden md:block" /> 
                내 사건의 정확한 해결 경로를 판단하기 어려우신가요?
              </h2>
              <p className="text-gray-400 text-[15px] max-w-2xl leading-relaxed">
                사건마다 처한 가족관계, 세무 조건, 과거 부동산 등기 이력 등 요건관계가 전혀 다릅니다. 18년 경력 신기철 법무사가 직접 서류를 사전 검토한 후 가장 안전하고 비용을 아끼는 최적의 솔루션을 제시합니다.
              </p>
            </div>
            <div className="flex flex-col space-y-3 w-full md:w-auto min-w-[280px]">
              <button className="bg-[#e4c07c] hover:bg-[#d4b06c] text-[#0f172a] px-8 py-4 rounded-xl font-bold text-[15px] transition-colors w-full flex justify-center items-center shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                지금 1:1 비밀상담 신청하기
              </button>
              <button className="border border-slate-600 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-colors w-full flex justify-center items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                사무소 오시는 길 확인
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">WHY THIS LAW OFFICE</div>
          <h2 className="text-[32px] font-bold text-gray-900 mb-5 tracking-tight">신기철 법무사 사무소가 지켜온 4가지 절대 원칙</h2>
          <p className="text-gray-500 text-[15px] mb-16 font-medium">"14,000건 이상의 법원·사건과 등기 업무를 처리하며 의뢰인과 맺어온 단단한 약속입니다."</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div className="text-[11px] font-bold text-blue-600 mb-2 tracking-widest uppercase">01 / 전문성 100% 보장</div>
              <h3 className="font-extrabold text-lg mb-4 text-gray-900 leading-snug">18년 숙련된 실무 경험의<br/>신속·정확한 등기 처리</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">수천 건의 판례와 복잡한 등기 선례를 완벽히 숙지하여 지연이나 반려(보정) 없이 하루라도 빠르게 마무리합니다.</p>
              <div className="text-[13px] font-bold text-gray-900 flex items-center">등기 무사고 18년 달성 <svg className="w-4 h-4 ml-1 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
              </div>
              <div className="text-[11px] font-bold text-orange-600 mb-2 tracking-widest uppercase">02 / 책임 직접 진도</div>
              <h3 className="font-extrabold text-lg mb-4 text-gray-900 leading-snug">법무사가 직접 소통 및<br/>모든 서류 1:1 직접 작성</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">사무장에게 위임하지 않고 신기철 대표 법무사가 직접 고객과 소통하며 서류 기안 및 법원 제출까지 책임집니다.</p>
              <div className="text-[13px] font-bold text-gray-900 flex items-center">대표 법무사 직접 전담 <svg className="w-4 h-4 ml-1 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <div className="text-[11px] font-bold text-indigo-600 mb-2 tracking-widest uppercase">03 / 투명한 비용 청구</div>
              <h3 className="font-extrabold text-lg mb-4 text-gray-900 leading-snug">대한법무사협회 법정 수수료<br/>준수 및 상세 견적서 발송</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">불투명한 추가 비용 없이 법정 보수표를 엄격히 준수하며 공과금과 법무사 보수를 명확히 분리하여 사전에 고지합니다.</p>
              <div className="text-[13px] font-bold text-gray-900 flex items-center">사전 견적서 100% 발송 <svg className="w-4 h-4 ml-1 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div className="text-[11px] font-bold text-teal-600 mb-2 tracking-widest uppercase">04 / 뛰어난 접근성</div>
              <h3 className="font-extrabold text-lg mb-4 text-gray-900 leading-snug">서초역 1번 출구 도보 2분<br/>서울중앙지방법원 최인접</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">대중교통 접근성이 뛰어나며 법원 및 등기국과 매우 가까워 긴급한 보전처분이나 당일 등기 접수에 절대적으로 유리합니다.</p>
              <div className="text-[13px] font-bold text-gray-900 flex items-center">방문 상담 무료 주차 지원 <svg className="w-4 h-4 ml-1 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8f9fc] border-t border-gray-200 py-16 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center mb-16 shadow-sm border border-gray-100">
            <div className="flex items-start mb-6 md:mb-0">
              <div className="bg-[#fefce8] text-[#a48148] rounded-2xl p-3 mr-5 border border-yellow-100">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-gray-900 mb-1">상담 운영 시간 안내</h4>
                <p className="text-[14px] text-gray-500 font-medium">평일 09:00 - 18:00 (점심시간 12:00 - 13:00) · 토/일/공휴일은 온라인 사전 예약 건에 한해 진행</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
              <div className="flex items-center justify-center bg-blue-50/50 px-6 py-3 rounded-xl border border-blue-100 w-full sm:w-auto">
                <svg className="w-5 h-5 mr-2 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="font-extrabold text-[#2563eb] text-lg">02-588-1234</span>
              </div>
              <button className="bg-[#0f172a] hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors w-full sm:w-auto shadow-md">
                오시는 길 자세히 보기
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start pt-2">
            <div className="mb-10 md:mb-0">
              <h2 className="font-extrabold text-[19px] mb-1 text-gray-900 tracking-tight">신기철 법무사 사무소</h2>
              <p className="text-[11px] text-gray-500 font-bold tracking-widest uppercase">서울중앙지방법원 소속 제12450호</p>
              
              <div className="text-[13px] text-gray-500 mt-8 space-y-2.5 leading-relaxed font-medium">
                <p>주소: 서울특별시 서초구 서초대로 250, 스타빌딩 3층 301호 (서초역 1번 출구 도보 2분)</p>
                <p>대표전화: 02-588-1234<span className="mx-2 text-gray-300">|</span>팩스: 02-588-1235<span className="mx-2 text-gray-300">|</span>이메일: contact@shinlaw.kr</p>
                <p>사업자등록번호: 214-12-85672<span className="mx-2 text-gray-300">|</span>대표 법무사: 신기철</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] font-bold">
              <a href="#" className="text-gray-900 hover:text-blue-600 transition-colors">개인정보처리방침</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">이용약관</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">오시는 길 안내</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">카카오톡 채널 상담</a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-200 text-[11px] text-gray-400 font-medium space-y-4 sm:space-y-0">
            <p>© 2025 신기철 법무사 사무소. All Rights Reserved.</p>
            <p className="flex items-center">
              대한법무사협회 규정 준수 검수 필 2025-A-012
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
