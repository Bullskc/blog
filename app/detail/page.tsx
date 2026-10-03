import Link from 'next/link';

export default function DetailPage() {
  return (
    <div className="min-h-screen font-sans bg-[#f8f9fa] text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 border-b border-gray-100 sticky top-0 bg-white z-50 shadow-sm">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-100 text-amber-700 flex items-center justify-center rounded-sm font-bold text-xl">신</div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight">신기철 법무사 사무소</span>
            <span className="text-[10px] text-gray-500 tracking-widest">SHIN KI-CHUL LAW OFFICE</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="#" className="text-gray-900 hover:text-blue-600 transition-colors">주요 업무 안내</Link>
          <Link href="#" className="text-blue-600 font-bold transition-colors">법률 칼럼</Link>
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

      {/* Main Content Area */}
      <main className="max-w-[1200px] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column (Content) */}
        <div className="lg:w-[70%]">
          
          {/* Breadcrumb */}
          <div className="text-[13px] text-gray-500 mb-4 flex items-center space-x-2 font-medium">
            <Link href="/" className="hover:text-gray-900">홈</Link>
            <span>&gt;</span>
            <Link href="#" className="hover:text-gray-900">법률 칼럼</Link>
            <span>&gt;</span>
            <span className="text-gray-900 font-bold">상속/증여</span>
          </div>

          {/* Title Area */}
          <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm border border-gray-100">
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              부모님 사망 후 6개월 이내 꼭 챙겨야 할 상속등기 필수 서류와 취득세 감면 실무 가이드
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-100 pt-5">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <div className="w-11 h-11 bg-gray-100 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
                   <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-bold text-gray-900 text-[15px]">신기철 법무사</span>
                    <span className="ml-2 bg-green-50 text-green-700 text-[11px] px-2 py-0.5 rounded font-bold border border-green-100">상속전문 15년 실무 노하우</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 flex items-center space-x-3">
                    <span>작성일 2024.11.20</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>수정일 2024.11.22</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>조회 12,345</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors border border-gray-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>
                <button className="flex items-center bg-[#0f172a] text-white px-4 py-2 rounded-lg text-[13px] font-bold hover:bg-gray-800 transition-colors shadow-sm">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  URL 복사
                </button>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 text-[16px] leading-relaxed text-gray-700">
            
            {/* Executive Summary */}
            <div className="bg-[#fff9e6] rounded-xl p-6 mb-10 border border-[#ffe5b4]">
              <div className="flex items-center font-bold text-[#b47a15] mb-3 text-[17px]">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                핵심 요약 (Executive Summary)
              </div>
              <p className="text-[#8c6012] font-medium leading-relaxed">
                부모님 사망 시 슬픔을 추스를 겨를도 없이 상속과 관련된 법적 분쟁을 처리해야 하는 분들이 많습니다. 특히 <strong className="text-[#654308]">상속등기, 취득세 등 기간 내 꼭 처리해야 할 법률문제</strong>들을 놓쳐 불이익을 당하는 경우가 많습니다. 이번 가이드에서는 상속 실무 경험을 바탕으로 기간 내 반드시 챙겨야 할 필수 서류와 취득세 감면 혜택을 놓치지 않기 위한 핵심을 알려드리겠습니다.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-2xl font-extrabold text-gray-900 mb-5 flex items-center" id="sec-1">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[15px] mr-3">1</span>
              상속등기, 왜 사망 후 6개월 이내에 해야 할까?
            </h2>
            <div className="mb-10">
              <p className="mb-5">
                법정 상속지분에 따라 공동 상속인 전원이 상속등기를 하는 경우나 유언, 증여, 상속재산분할협의를 통해 단독으로 상속을 받는 경우 모두 <strong>상속개시일(사망일)이 속하는 달의 말일부터 6개월 이내</strong>에 취득세를 신고·납부해야 합니다.
              </p>
              <p className="mb-6 text-red-600 font-medium">
                이 기간을 넘길 경우 취득세 무신고 가산세 및 납부지연가산세가 부과됩니다. 만약 상속등기를 미루다 기한을 넘길 경우, 상속 재산의 가액에 따라 수천만 원의 가산세 폭탄을 맞을 수 있으므로 각별한 주의가 필요합니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-red-50 border border-red-100 p-5 rounded-xl">
                  <div className="text-red-600 text-xs font-bold mb-1">취득세 무신고 가산세</div>
                  <div className="text-xl font-extrabold text-red-700 mb-2">20% 가산세 부과</div>
                  <p className="text-[13px] text-red-500">본래 납부해야 할 취득세액의 20%가 무신고 가산세로 부과됩니다.</p>
                </div>
                <div className="bg-orange-50 border border-orange-100 p-5 rounded-xl">
                  <div className="text-orange-600 text-xs font-bold mb-1">납부지연가산세</div>
                  <div className="text-xl font-extrabold text-orange-700 mb-2">연 9.125% 가산</div>
                  <p className="text-[13px] text-orange-500">납부 기한 다음날부터 납부일까지 1일당 10만분의 22 적용(연 9.125%).</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">상속등기 골든타임 3가지 체크 분석</h3>
              <p className="mb-5">상속등기 진행 시 가장 중요하게 확인해야 할 3가지 핵심 포인트를 요약해 드립니다. 각 상황에 맞는 서류 준비가 달라지므로 꼼꼼한 확인이 필요합니다.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                  <div className="inline-block bg-blue-100 text-blue-700 text-[11px] font-bold px-2 py-0.5 rounded mb-3">CHECK 01</div>
                  <h4 className="font-bold text-gray-900 mb-2">협의분할 상속등기</h4>
                  <p className="text-[13px] text-gray-600">공동상속인 전원의 동의와 인감도장 날인이 필수적입니다. 단 한 명이라도 동의하지 않으면 진행이 불가합니다.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                  <div className="inline-block bg-blue-100 text-blue-700 text-[11px] font-bold px-2 py-0.5 rounded mb-3">CHECK 02</div>
                  <h4 className="font-bold text-gray-900 mb-2">한정승인·상속포기 여부</h4>
                  <p className="text-[13px] text-gray-600">상속개시일로부터 3개월 이내에 법원에 청구해야 하며, 상속등기 전에 반드시 확인해야 할 선행 절차입니다.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                  <div className="inline-block bg-blue-100 text-blue-700 text-[11px] font-bold px-2 py-0.5 rounded mb-3">CHECK 03</div>
                  <h4 className="font-bold text-gray-900 mb-2">미성년자·특별대리인</h4>
                  <p className="text-[13px] text-gray-600">미성년 상속인이 있는 경우, 친권자와 이해상반행위가 되므로 특별대리인 선임 청구가 필요합니다.</p>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-gray-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8 relative">
                <div className="flex items-center text-red-600 font-bold mb-3">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  가장 많이 하는 실수 BEST!
                </div>
                <p className="font-semibold text-gray-800 mb-2">"인감증명서/인감도장을 다른 형제에게 모두 맡겼습니다. 괜찮겠죠?" 절대 금물입니다.</p>
                <p className="text-[14px] text-gray-600">상속재산분할협의서의 내용을 정확히 확인하지 않고 도장을 맡길 경우, 본인의 상속분을 모두 포기하는 것으로 협의서가 작성될 수 있습니다. 반드시 협의서 내용을 꼼꼼히 읽어보고 본인이 직접 날인하는 것이 원칙입니다.</p>
                <div className="mt-4 bg-white p-4 rounded border border-gray-200 flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <p className="text-[13px] text-gray-500 font-medium">참고: 해외 거주 상속인의 경우, 거주국 재외공관(영사관)을 통해 위임장에 인증을 받아 제출해야 하며, 이 과정에서 2~3주의 추가 시간이 소요될 수 있습니다.</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100 my-10" />

            {/* Section 2 */}
            <h2 className="text-2xl font-extrabold text-gray-900 mb-5 flex items-center" id="sec-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[15px] mr-3">2</span>
              필수 준비서류 체크리스트
            </h2>
            <div className="mb-10">
              <p className="mb-6">
                기본 입증 서류 목록입니다. 개별 사안에 따라 추가 서류가 필요할 수 있으며, 발급 시에는 <strong>반드시 '상세'로 발급</strong>받아야 하며 주민등록번호 뒷자리까지 모두 공개되도록 발급해야 합니다.
              </p>
              
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-6 bg-white">
                <div className="bg-gray-50 p-4 border-b border-gray-200 font-bold text-gray-800 flex justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    피상속인(망인) 서류 (주민센터 발급)
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">기본증명서 (상세/주민번호 모두 공개)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">가족관계증명서 (상세/주민번호 모두 공개)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">혼인관계증명서 (상세)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">주민등록말소자 초본 (과거주소 변동내역 포함)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">친양자입양관계증명서 (상세)</span>
                  </label>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl overflow-hidden mb-6 bg-white">
                <div className="bg-gray-50 p-4 border-b border-gray-200 font-bold text-gray-800 flex justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    상속인 전원 필수 서류 (각 1부씩 준비)
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">기본증명서 (상세)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">가족관계증명서 (상세)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">주민등록초본 (또는 등본, 주민번호 모두 공개)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">인감증명서 (일반용 - 상속재산분할협의용)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">인감도장 (서류 날인에 필요함)</span>
                  </label>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl overflow-hidden mb-6 bg-white">
                <div className="bg-gray-50 p-4 border-b border-gray-200 font-bold text-gray-800 flex justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h5"></path></svg>
                    기타 (부동산 관련 서류)
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">토지대장 / 건축물대장 (등본)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="group-hover:text-gray-900">공시지리가 확인 서류 (취득세 산출 기준)</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="text-[13px] flex items-center text-blue-600 font-bold bg-blue-50 px-3 py-1.5 rounded border border-blue-100 hover:bg-blue-100 transition-colors">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  체크리스트 인쇄/PDF 다운로드
                </button>
              </div>
            </div>

            <hr className="border-gray-100 my-10" />

            {/* Section 3 */}
            <h2 className="text-2xl font-extrabold text-gray-900 mb-5 flex items-center" id="sec-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[15px] mr-3">3</span>
              취득세 감면 요건과 자진신고 실무
            </h2>
            <div className="mb-10">
              <p className="mb-6">
                상속으로 인한 부동산 취득 시 일반적인 <strong>취득세율은 2.8%</strong>(농특세, 지방교육세 포함 시 3.16%)입니다. 하지만 요건을 충족하는 경우 특례세율을 적용받아 <strong>취득세 감면 혜택(-70% 등)</strong>을 받을 수 있으므로 반드시 확인해야 합니다.
              </p>

              <div className="flex flex-col md:flex-row bg-blue-50 rounded-xl p-6 border border-blue-100 items-center md:items-start gap-6">
                <div className="flex-1">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    1가구 1주택 상속 무주택자 요건 (특례세율 0.8%)
                  </h4>
                  <p className="text-[14px] text-blue-800 leading-relaxed mb-4">
                    상속개시일 현재 상속인과 주민등록표에 함께 기재되어 있는 세대원 전원이 무주택자이며, 상속으로 인하여 1가구 1주택이 되는 경우 취득세의 특례세율(0.8%)이 적용되어 큰 폭의 세금 감면을 받을 수 있습니다.
                  </p>
                  <div className="bg-white p-4 rounded text-[13px] text-gray-700 font-medium border border-blue-200">
                    <span className="text-orange-600 font-bold mr-1">💡 실무 팁:</span> 상속받을 형제 중 유주택자가 있다면, 무주택자인 형제 명의로 상속재산분할협의를 해야 취득세 감면 혜택을 받을 수 있습니다.
                  </div>
                </div>
                <div className="w-40 flex-shrink-0 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-8 border-white bg-blue-100 flex items-center justify-center flex-col shadow-inner relative">
                    <div className="absolute inset-0 rounded-full border-8 border-blue-600 border-r-transparent border-t-transparent transform rotate-45"></div>
                    <span className="font-bold text-gray-500 text-[10px] uppercase tracking-wide">취득세 최대 감면</span>
                    <span className="text-3xl font-extrabold text-blue-700">-70%</span>
                  </div>
                  <div className="text-[11px] text-center text-gray-500 mt-2 font-medium">일반 2.8% → 특례 0.8%</div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100 my-10" />

            {/* Section 4 */}
            <h2 className="text-2xl font-extrabold text-gray-900 mb-5 flex items-center" id="sec-4">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[15px] mr-3">4</span>
              신기철 법무사의 실무 밀착 컨설팅
            </h2>
            <div className="mb-10">
              <p className="mb-6">
                상속등기는 단순한 서류 제출로 끝나지 않습니다. 상속재산 분할 협의 과정에서 발생하는 세금 문제, 빚 상속(채무) 문제 등 복합적인 요소를 종합적으로 고려하여 방향을 설정해야 합니다.
              </p>

              <div className="space-y-4">
                <a href="#" className="block bg-gray-50 hover:bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors group">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-blue-500 mr-3 border border-gray-200 group-hover:border-blue-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center">
                        한정승인 절차, 3개월 내 꼭 준비해야 할 서류 목록
                        <span className="ml-2 bg-gray-200 text-gray-600 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">CASE STUDY</span>
                      </h4>
                      <p className="text-[13px] text-gray-500 mt-1 line-clamp-1">빚이 더 많은 상속재산을 물려받게 될 때 반드시 진행해야 하는 한정승인과 상속포기 실무. 어떤 서류를 준비해야 할까요?</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block bg-gray-50 hover:bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors group">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-blue-500 mr-3 border border-gray-200 group-hover:border-blue-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center">
                        상속재산분할 협의 시 쟁점 (유류분 반환 청구 소송 대비)
                        <span className="ml-2 bg-gray-200 text-gray-600 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">CASE STUDY</span>
                      </h4>
                      <p className="text-[13px] text-gray-500 mt-1 line-clamp-1">특정 상속인에게 재산이 편중되었을 때, 남은 상속인들이 유류분 반환을 청구할 수 있습니다. 분쟁을 사전에 방지하는 협의서 작성 실무.</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block bg-gray-50 hover:bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors group">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-blue-500 mr-3 border border-gray-200 group-hover:border-blue-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center">
                        시골 기획 부동산 상속 및 한정승인/포기 사례 분석
                        <span className="ml-2 bg-green-100 text-green-700 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">인기 칼럼 추천</span>
                      </h4>
                      <p className="text-[13px] text-gray-500 mt-1 line-clamp-1">처분하기도 어렵고 세금만 나오는 기획부동산, 맹지 등을 상속받게 되었을 때의 처리 방안과 한정승인 전략 사례.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <hr className="border-gray-100 my-10" />

            {/* Section 5 FAQ */}
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center" id="sec-5">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[15px] mr-3">5</span>
              상속등기 자주 묻는 질문 (FAQ)
            </h2>
            <div className="space-y-3 mb-10">
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button className="w-full text-left px-5 py-4 font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <span>Q. 상속인 중 한 명이 연락이 두절되었는데 등기를 어떻게 하나요?</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button className="w-full text-left px-5 py-4 font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <span>Q. 미성년 자녀가 있는 경우, 법정대리인 자격에 문제가 있나요?</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button className="w-full text-left px-5 py-4 font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <span>Q. 등기 기한 내에 상속인들 간 협의가 안 되면 어떻게 되나요?</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-10 border-t border-gray-100">
              <span className="text-gray-500 font-medium">마음에 드셨다면?</span>
              <button className="flex items-center px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors font-bold text-gray-700">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                좋아요 120
              </button>
              <button className="flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-bold shadow-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                공유하기
              </button>
            </div>
          </article>
        </div>

        {/* Right Column (Sidebar) */}
        <aside className="lg:w-[30%]">
          <div className="sticky top-24 space-y-6">
            
            {/* Table of Contents */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-extrabold text-gray-900 mb-4 flex items-center border-b border-gray-100 pb-3">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                목차 (Contents)
              </h3>
              <ul className="space-y-3 text-[14px] font-medium text-gray-600">
                <li><a href="#sec-1" className="hover:text-blue-600 transition-colors block py-1">① 상속등기, 왜 6개월 이내에 해야 할까?</a></li>
                <li><a href="#sec-2" className="hover:text-blue-600 transition-colors block py-1">② 필수 준비서류 체크리스트</a></li>
                <li><a href="#sec-3" className="hover:text-blue-600 transition-colors block py-1">③ 취득세 감면 요건과 자진신고</a></li>
                <li><a href="#sec-4" className="text-blue-600 font-bold block py-1 bg-blue-50 -mx-3 px-3 rounded-lg">④ 실무 밀착 컨설팅</a></li>
                <li><a href="#sec-5" className="hover:text-blue-600 transition-colors block py-1">⑤ 자주 묻는 질문 (FAQ)</a></li>
              </ul>
            </div>

            {/* CTA Banner */}
            <div className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg relative border border-gray-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 transform translate-x-10 -translate-y-10"></div>
              <div className="p-6 relative z-10">
                <div className="text-yellow-400 text-xs font-bold mb-2 tracking-wider">상속등기, 아직도 막막하신가요?</div>
                <h4 className="text-white text-lg font-bold mb-4 leading-snug">
                  복잡한 상속 문제,<br/>
                  전문가의 도움이 필요하다면
                </h4>
                <div className="bg-gray-800/80 rounded-xl p-4 mb-4 border border-gray-700 backdrop-blur-sm">
                  <div className="text-gray-400 text-xs mb-1">무료 전화 상담</div>
                  <div className="text-white font-extrabold text-xl tracking-wider">📞 02-588-1234</div>
                  <div className="text-gray-400 text-[11px] mt-1">평일 09:00 - 18:00</div>
                </div>
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 rounded-xl transition-colors text-[14px]">
                  온라인 상담 신청하기 &rarr;
                </button>
              </div>
            </div>

            {/* Profile Sidebar Box */}
            <div className="bg-blue-50/50 rounded-2xl p-6 shadow-sm border border-blue-100">
              <h3 className="font-extrabold text-gray-900 mb-4 flex items-center border-b border-blue-200/60 pb-3 text-[15px]">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                신기철 법무사
              </h3>
              <div className="bg-white p-4 rounded-xl text-[13px] text-gray-600 font-medium text-center border border-white shadow-sm">
                서초역 1번 출구 도보 2분<br/>
                상속 전문 15년 차 신기철 법무사가 직접 상담부터 등기 완료까지 책임집니다.
              </div>
            </div>

          </div>
        </aside>
      </main>

      {/* Bottom Comments / Consulting Section */}
      <section className="bg-white border-t border-gray-200 mt-10">
        
        {/* Full width Banner */}
        <div className="bg-[#0f172a] text-white py-12 px-4">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between">
            <div>
              <div className="text-yellow-500 text-xs font-bold mb-2 tracking-widest uppercase">BEST PRACTICE LAW OFFICE</div>
              <h2 className="text-2xl font-bold leading-tight mb-2">복잡한 등기/상속 절차,<br/>서류 발급부터 완료까지 신기철 법무사가 책임집니다.</h2>
              <p className="text-gray-400 text-sm">법무사가 직접 검토하고 직접 진행합니다. 믿고 맡겨주시면 최적의 솔루션으로 비용과 시간을 아껴드립니다.</p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-3">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold transition-colors">
                &rarr; 1:1 상담 접수하기
              </button>
              <button className="border border-gray-600 hover:bg-gray-800 px-6 py-3 rounded-lg font-bold transition-colors flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                02-588-1234
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 py-16">
          
          <div className="mb-10">
            <h3 className="text-xl font-extrabold text-gray-900 mb-2 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              블로그 관련 질문을 남겨주세요
            </h3>
            <p className="text-gray-500 text-[14px]">궁금한 점을 남겨주시면 신기철 법무사가 직접 답변드립니다.<br/>개인정보가 포함된 구체적 사안은 [온라인 상담] 게시판을 이용해 주시기 바랍니다.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-200 mb-12">
            <h4 className="font-bold text-gray-900 mb-5 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              질문/상담 남기기 (비공개)
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input type="text" placeholder="이름 (예: 홍길동)" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-[14px]" />
              </div>
              <div>
                <input type="password" placeholder="비밀번호 (수정/삭제 시 필요)" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-[14px]" />
              </div>
            </div>
            <textarea placeholder="궁금한 내용을 구체적으로 작성해주세요. (예: 아버지가 돌아가셨는데 어머니 명의로 하려면 상속재산분할협의서는 어떻게 작성해야 하나요? 등)" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-[14px] resize-none mb-4"></textarea>
            
            <div className="flex flex-col sm:flex-row justify-between items-center text-[13px]">
              <label className="flex items-center space-x-2 text-gray-500 mb-4 sm:mb-0 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500" defaultChecked />
                <span>개인정보 수집 및 이용에 동의합니다. (작성된 내용은 법무사 확인 용도로만 사용됩니다.)</span>
              </label>
              <button className="bg-[#0f172a] text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors w-full sm:w-auto">
                질문 등록하기
              </button>
            </div>
          </div>

          <div className="flex justify-between items-end border-b border-gray-200 pb-3 mb-6">
            <h4 className="font-extrabold text-gray-900">등록 된 질의응답 <span className="text-blue-600">(2건)</span></h4>
            <span className="text-[12px] text-gray-400">최신순</span>
          </div>

          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  김
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-bold text-gray-900">김*석 님</span>
                    <span className="text-gray-400 text-xs">2024.11.23 14:30</span>
                  </div>
                  <p className="text-gray-700 text-[14px] leading-relaxed mb-4">
                    미성년 자녀가 있는데 상속재산분할협의를 어떻게 해야하나요? 법정대리인인 어머니가 다 할 수 있는건지, 아니면 다른 절차가 필요한 건지 궁금합니다.
                  </p>
                  
                  {/* Reply */}
                  <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 ml-4 relative">
                    <div className="absolute top-0 left-6 -translate-y-full border-solid border-b-gray-50 border-b-8 border-x-transparent border-x-8 border-t-0"></div>
                    <div className="absolute top-0 left-6 -translate-y-full border-solid border-b-gray-200 border-b-[9px] border-x-transparent border-x-[9px] border-t-0 -z-10 -ml-[1px]"></div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs">법</div>
                      <span className="font-bold text-gray-900 text-[14px]">신기철 법무사</span>
                      <span className="bg-[#0f172a] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">작성자</span>
                      <span className="text-gray-400 text-xs">2024.11.23 16:10</span>
                    </div>
                    <p className="text-gray-700 text-[14px] leading-relaxed">
                      네, 김*석님 안녕하세요. 신기철 법무사입니다.<br/>
                      어머니와 미성년 자녀가 공동상속인인 경우, 공동상속인인 어머니가 자녀의 법정대리인 자격으로 상속재산분할협의를 하는 것은 '이해상반행위'에 해당합니다. 
                      따라서 법원에 미성년자를 위한 특별대리인 선임 청구를 먼저 하신 후, 선임된 특별대리인과 어머니가 협의를 하셔야 합니다. 관련하여 서류 준비가 필요하시면 사무소로 연락 주시기 바랍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  이
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-bold text-gray-900">이*진 님</span>
                    <span className="text-gray-400 text-xs">2024.11.21 10:15</span>
                  </div>
                  <p className="text-gray-700 text-[14px] leading-relaxed mb-4">
                    기한 내에 협의가 도저히 안될 것 같은데 어떻게 하나요? 취득세 가산세는 피하고 싶은데, 법정지분대로 일단 등기를 해야하는 건가요?
                  </p>
                  
                  {/* Reply */}
                  <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 ml-4 relative">
                    <div className="absolute top-0 left-6 -translate-y-full border-solid border-b-gray-50 border-b-8 border-x-transparent border-x-8 border-t-0"></div>
                    <div className="absolute top-0 left-6 -translate-y-full border-solid border-b-gray-200 border-b-[9px] border-x-transparent border-x-[9px] border-t-0 -z-10 -ml-[1px]"></div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs">법</div>
                      <span className="font-bold text-gray-900 text-[14px]">신기철 법무사</span>
                      <span className="bg-[#0f172a] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">작성자</span>
                      <span className="text-gray-400 text-xs">2024.11.21 11:30</span>
                    </div>
                    <p className="text-gray-700 text-[14px] leading-relaxed">
                      네, 이*진님. 상속인들 간 협의가 길어질 경우, 가산세를 피하기 위해 기한 내에 취득세만 먼저 신고·납부하시거나, 공동상속인 중 1인이 대표로 상속인 전원의 법정지분에 따른 상속등기를 신청하실 수 있습니다. 
                      자세한 상황에 따라 유리한 방향이 다를 수 있으므로 전화 주시면 상담해 드리겠습니다.
                    </p>
                  </div>
                </div>
              </div>
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
