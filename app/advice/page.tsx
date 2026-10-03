'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdvicePage() {
  const [phone1, setPhone1] = useState('010');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [method, setMethod] = useState('phone');

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 2000) {
      setContent(e.target.value);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#f8f9fc] text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 border-b border-gray-100 bg-white z-50 shadow-sm relative">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-100 text-amber-700 flex items-center justify-center rounded-sm font-bold text-xl">신</div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-gray-900">신기철 법무사 사무소</span>
              <span className="text-[10px] text-gray-500 tracking-widest">부동산 등기·상속 전문</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center border-l border-gray-200 pl-6 space-x-2 text-sm">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span className="text-gray-500">상담 문의:</span>
            <strong className="text-gray-900 font-bold">02-588-1234</strong>
            <span className="text-xs text-gray-400 ml-1">(평일 09:00 - 18:00)</span>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-bold">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors py-2 border-b-2 border-transparent">홈</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors py-2 border-b-2 border-transparent">주요 업무 안내</Link>
          <Link href="/detail" className="text-gray-600 hover:text-gray-900 transition-colors py-2 border-b-2 border-transparent">법률 칼럼</Link>
          <Link href="/advice" className="text-blue-600 transition-colors py-2 border-b-2 border-blue-600">온라인 상담 신청</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors py-2 border-b-2 border-transparent">사무소 소개</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block text-gray-500">
            <svg className="w-4 h-4 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="text" placeholder="사례 및 판례 검색" className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs w-48 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <Link href="/advice" className="bg-[#0f172a] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors flex items-center">
             <span className="mr-1">💬</span> 온라인 상담 신청
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0f172a] pt-14 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center px-3 py-1.5 rounded-md border border-white/20 bg-white/10 text-blue-200 text-xs font-bold mb-6">
            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            법무사법 제26조(비밀유지 의무) 엄격 준수
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">1:1 비밀 보장 온라인 법률 상담 신청</h1>
          <p className="text-blue-100/70 text-sm md:text-[15px] max-w-3xl leading-relaxed mb-10">
            등기 및 상속, 법인 업무에 대한 모든 상담 내역과 서류는 법무사법 제26조(비밀유지 의무)에 따라 철저히 비공개로 보호되며, 대표 법무사가 사건을 직접 분석합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex">
              <div className="w-8 h-8 rounded bg-yellow-400/20 text-yellow-400 font-bold flex items-center justify-center mr-4 flex-shrink-0 text-sm">1</div>
              <div>
                <div className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest mb-1">Step 01</div>
                <h3 className="text-white font-bold mb-1">상담 신청 접수</h3>
                <p className="text-white/50 text-[12px] leading-relaxed">기본 사실관계 및 희망 상담 방식(전화/방문/서면) 작성</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex">
              <div className="w-8 h-8 rounded bg-blue-400/20 text-blue-400 font-bold flex items-center justify-center mr-4 flex-shrink-0 text-sm">2</div>
              <div>
                <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">Step 02</div>
                <h3 className="text-white font-bold mb-1">대표 법무사 직접 검토</h3>
                <p className="text-white/50 text-[12px] leading-relaxed">신기철 대표 법무사가 작성 내용과 첨부 서류를 정밀 분석</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex">
              <div className="w-8 h-8 rounded bg-emerald-400/20 text-emerald-400 font-bold flex items-center justify-center mr-4 flex-shrink-0 text-sm">3</div>
              <div>
                <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-1">Step 03</div>
                <h3 className="text-white font-bold mb-1">정밀 회신 & 해결책 제시</h3>
                <p className="text-white/50 text-[12px] leading-relaxed">영업일 내 유선 또는 서면으로 명확한 절차 및 비용 안내</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
          
          {/* Left: Form Area */}
          <div className="lg:w-2/3">
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 mb-8 flex items-start">
              <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                <span className="text-red-500 font-bold">* 표시는 필수 입력 항목입니다.</span> 서류가 미비하거나 질문의도가 모호할 경우 제한적인 사실관계만 남아 우선 유선 상담을 통해 해결책을 안내해 드립니다.
              </p>
            </div>

            <form className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              
              {/* Name */}
              <div className="mb-8">
                <label className="block text-[14px] font-bold text-gray-900 mb-2">의뢰인 성함 <span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="예: 홍길동" />
              </div>

              {/* Phone */}
              <div className="mb-8">
                <label className="block text-[14px] font-bold text-gray-900 mb-2">연락처 (휴대폰 번호) <span className="text-red-500">*</span></label>
                <div className="flex items-center space-x-3">
                  <input type="text" value={phone1} onChange={e => setPhone1(e.target.value)} className="w-1/3 text-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" />
                  <span className="text-gray-400">-</span>
                  <input type="text" value={phone2} onChange={e => setPhone2(e.target.value)} className="w-1/3 text-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" placeholder="0000" />
                  <span className="text-gray-400">-</span>
                  <input type="text" value={phone3} onChange={e => setPhone3(e.target.value)} className="w-1/3 text-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" placeholder="0000" />
                </div>
                <p className="text-[12px] text-gray-500 mt-2 flex items-center font-medium">
                  <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  상담 진행 상황 및 접수 확인 문자 발송을 위해 정확한 연락처를 입력해 주세요.
                </p>
              </div>

              {/* Category */}
              <div className="mb-8">
                <label className="block text-[14px] font-bold text-gray-900 mb-3">상담 분야 선택 <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label className={`flex items-center p-3.5 rounded-lg border cursor-pointer transition-colors ${category === 'realestate' ? 'bg-[#0f172a] border-[#0f172a] text-white' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}`} onClick={() => setCategory('realestate')}>
                    <span className="mr-2">🏢</span> <span className="text-[13px] font-bold">부동산 등기 (매매/증여/근저당)</span>
                  </label>
                  <label className={`flex items-center p-3.5 rounded-lg border cursor-pointer transition-colors ${category === 'inheritance' ? 'bg-[#0f172a] border-[#0f172a] text-white' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}`} onClick={() => setCategory('inheritance')}>
                    <span className="mr-2">👨‍👩‍👧‍👦</span> <span className="text-[13px] font-bold">상속·증여 (상속등기/한정승인/포기)</span>
                  </label>
                  <label className={`flex items-center p-3.5 rounded-lg border cursor-pointer transition-colors ${category === 'corporate' ? 'bg-[#0f172a] border-[#0f172a] text-white' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}`} onClick={() => setCategory('corporate')}>
                    <span className="mr-2">🏢</span> <span className="text-[13px] font-bold">법인 등기 (설립/임원변경/증자)</span>
                  </label>
                  <label className={`flex items-center p-3.5 rounded-lg border cursor-pointer transition-colors ${category === 'family' ? 'bg-[#0f172a] border-[#0f172a] text-white' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}`} onClick={() => setCategory('family')}>
                    <span className="mr-2">📝</span> <span className="text-[13px] font-bold">가사·개명 (성본변경/개명/이혼재산분할)</span>
                  </label>
                  <label className={`flex items-center p-3.5 rounded-lg border cursor-pointer transition-colors ${category === 'civil' ? 'bg-[#0f172a] border-[#0f172a] text-white' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}`} onClick={() => setCategory('civil')}>
                    <span className="mr-2">⚖️</span> <span className="text-[13px] font-bold">민사 / 지급명령 / 기타 법률 사무</span>
                  </label>
                </div>
              </div>

              {/* Consultation Method */}
              <div className="mb-8">
                <label className="block text-[14px] font-bold text-gray-900 mb-3">희망 상담 방식 선택 <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className={`p-4 rounded-xl border-2 cursor-pointer transition-colors relative ${method === 'phone' ? 'bg-[#0f172a] border-[#0f172a]' : 'bg-white border-gray-200 hover:border-gray-300'}`} onClick={() => setMethod('phone')}>
                    {method === 'phone' && (
                      <div className="absolute top-3 right-3 text-white">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                    )}
                    <h4 className={`text-[15px] font-bold mb-2 flex items-center ${method === 'phone' ? 'text-white' : 'text-gray-900'}`}>
                      <span className="mr-2">📞</span> 전화 상담
                    </h4>
                    <p className={`text-[12px] leading-relaxed font-medium ${method === 'phone' ? 'text-gray-300' : 'text-gray-500'}`}>
                      법무사가 유선으로 빠르고 정확하게 전화 상담을 직접 진행합니다.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border-2 cursor-pointer transition-colors relative ${method === 'visit' ? 'bg-orange-50 border-orange-500' : 'bg-white border-gray-200 hover:border-gray-300'}`} onClick={() => setMethod('visit')}>
                    {method === 'visit' && (
                      <div className="absolute top-3 right-3 text-orange-500">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                    )}
                    <h4 className={`text-[15px] font-bold mb-2 flex items-center ${method === 'visit' ? 'text-orange-900' : 'text-gray-900'}`}>
                      <span className="mr-2">🏢</span> 사무소 방문
                    </h4>
                    <p className={`text-[12px] leading-relaxed font-medium ${method === 'visit' ? 'text-orange-700' : 'text-gray-500'}`}>
                      서초역 앞 사무실로 직접 방문하여 관련 현장 서류를 대면 검토합니다.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border-2 cursor-pointer transition-colors relative ${method === 'kakao' ? 'bg-yellow-50 border-yellow-500' : 'bg-white border-gray-200 hover:border-gray-300'}`} onClick={() => setMethod('kakao')}>
                    {method === 'kakao' && (
                      <div className="absolute top-3 right-3 text-yellow-600">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                    )}
                    <h4 className={`text-[15px] font-bold mb-2 flex items-center ${method === 'kakao' ? 'text-yellow-900' : 'text-gray-900'}`}>
                      <span className="mr-2">💬</span> 카카오톡/이메일
                    </h4>
                    <p className={`text-[12px] leading-relaxed font-medium ${method === 'kakao' ? 'text-yellow-700' : 'text-gray-500'}`}>
                      일정이 바쁘신 분들을 위해 텍스트 및 서면 리포트로 회신합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="mb-8">
                <label className="block text-[14px] font-bold text-gray-900 mb-2">상담 제목 <span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="예: 부모님 사망 후 협의분할 상속등기 및 취득세 문의드립니다." />
              </div>

              {/* Content */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-[14px] font-bold text-gray-900">상세 문의 내용 <span className="text-red-500">*</span></label>
                  <span className="text-[11px] font-bold text-gray-400">{content.length.toLocaleString()} / 2,000자</span>
                </div>
                <textarea 
                  value={content}
                  onChange={handleContentChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors resize-none leading-relaxed" 
                  rows={6}
                  placeholder="상담하시고자 하는 사건의 개요(부동산 소재지, 상속인 수, 채무 유무, 계약 현황 등)를 적어주시면 더욱 구체적이고 정밀한 법률적 조언이 가능합니다. (최소 20자 이상 권장)"
                ></textarea>
              </div>

              {/* File Upload */}
              <div className="mb-10">
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-[14px] font-bold text-gray-900">관련 서류/자료 첨부 <span className="text-gray-400 font-normal text-xs">(선택 사항)</span></label>
                  <span className="text-[10px] font-bold text-gray-400">최대 30MB : PDF, JPG, PNG, HWP</span>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-[#a48148] mb-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  </div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-1">등기부등본, 계약서, 상속관계 서류를 드래그하거나 클릭하여 첨부하세요</h4>
                  <p className="text-[12px] text-gray-500 font-medium mb-4">여러 파일 동시 선택 가능 · 파일 암호화 보안 전송 지원</p>
                  <button type="button" className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-md shadow-sm">
                    내 PC에서 파일 찾아보기
                  </button>
                </div>
              </div>

              {/* Consent */}
              <div className="mb-8">
                <label className="flex items-start cursor-pointer group">
                  <div className="flex items-center h-5">
                    <input type="checkbox" className="w-4 h-4 text-[#0f172a] rounded border-gray-300 focus:ring-[#0f172a] mt-0.5" />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors">[필수] 개인정보 수집 및 이용에 동의합니다.</span>
                      <button type="button" className="text-[11px] text-gray-500 font-bold flex items-center hover:text-gray-900">약관 전문 보기 <svg className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></button>
                    </div>
                    <p className="text-[12px] text-gray-500 mt-1 font-medium">수집된 정보는 법률 상담 및 법무사 업무 이력 관리 외 다른 목적으로 절대 사용되지 않습니다.</p>
                  </div>
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                <button type="button" className="flex-1 bg-[#0f172a] text-white py-4 rounded-xl font-bold text-[15px] flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  1:1 비밀 온라인 상담 접수하기
                </button>
                <button type="button" className="sm:w-1/3 bg-blue-50 text-blue-700 py-4 rounded-xl font-bold text-[15px] flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  긴급 유선 상담: 02-588-1234
                </button>
              </div>

            </form>

            <div className="mt-8 text-center flex items-center justify-center text-[11px] font-bold text-gray-500">
              <svg className="w-3.5 h-3.5 text-green-500 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              전송되는 모든 데이터는 SSL 256비트 암호화 프로토콜을 통해 안전하게 보호됩니다.
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            
            {/* Profile */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-5 pb-5 border-b border-gray-100">
                <div className="w-14 h-14 bg-gray-100 rounded-xl mr-4 overflow-hidden border border-gray-200 flex items-center justify-center">
                  <img src="https://ui-avatars.com/api/?name=Shin&background=f3f4f6&color=4b5563" alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-500 mb-0.5">대표 법무사</div>
                  <h3 className="text-[17px] font-extrabold text-gray-900 tracking-tight">신기철</h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">서울중앙지방법무사회 제12450호</p>
                </div>
              </div>
              
              <div className="bg-[#f8f9fc] rounded-xl p-4 mb-5 border border-gray-100 relative">
                <svg className="w-6 h-6 text-gray-200 absolute top-2 left-2" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
                <p className="text-[12px] font-medium text-gray-600 leading-relaxed text-center px-4 relative z-10">
                  "사건 사무장이나 보조 직원이 아닌, 대표 법무사가 처음부터 끝까지 직접 사실관계를 법리 검토하여 가장 실효성 있는 절차를 제시해 드립니다."
                </p>
              </div>

              <h4 className="text-[13px] font-bold text-gray-900 mb-3 flex items-center">
                <span className="mr-1.5">⚖️</span> 신기철 법무사의 3대 약속
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-[10px] font-bold mr-3 flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <strong className="text-[13px] text-gray-900 block mb-0.5">책임 사건 분석</strong>
                    <p className="text-[12px] text-gray-500 font-medium">사건을 정확하게 진단하고 분석합니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-[10px] font-bold mr-3 flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <strong className="text-[13px] text-gray-900 block mb-0.5">경제적 해결책 제시</strong>
                    <p className="text-[12px] text-gray-500 font-medium">불필요하지 않고 가장 실속있는 절차를 제시합니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-[10px] font-bold mr-3 flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <strong className="text-[13px] text-gray-900 block mb-0.5">투명한 법정 보수</strong>
                    <p className="text-[12px] text-gray-500 font-medium">대한법무사협회 보수기준을 철저히 준수하여 합리적 보수를 사전 공시합니다.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[14px] font-bold text-gray-900 flex items-center">
                  <svg className="w-4 h-4 text-orange-500 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  사무소 내방 안내
                </h4>
                <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-1 rounded">서초역 1번 출구 도보 2분</span>
              </div>
              <div className="bg-gray-100 h-40 rounded-xl mb-4 overflow-hidden border border-gray-200 relative">
                <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/127.0097,37.4923,15,0/600x300?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja29xa3NxbmcwMG41Mm9vNm9pOXB4MjQ2In0.example" alt="Map" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-3 py-1.5 rounded shadow text-[11px] font-bold text-gray-800 whitespace-nowrap">서초 스타빌딩 5층 502호</div>
                </div>
              </div>
              <ul className="text-[12px] space-y-2 text-gray-600 font-medium">
                <li className="flex"><span className="text-gray-400 w-10">주소:</span> <span className="flex-1">서울시 서초구 서초대로 250, 5층 502호</span></li>
                <li className="flex"><span className="text-gray-400 w-10">시간:</span> <span className="flex-1">평일 09:00 - 18:00 (점심시간 12:00 - 13:00)</span></li>
                <li className="flex"><span className="text-gray-400 w-10">주차:</span> <span className="flex-1">건물 내 지하 자주식 주차장 (방문 상담건 1시간 무료)</span></li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h4 className="text-[14px] font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-1.5">❓</span> 자주 묻는 상담 문의
              </h4>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <strong className="text-[13px] text-gray-900 block mb-1">Q. 상담 비용이 발생하나요?</strong>
                  <p className="text-[12px] text-gray-500 font-medium leading-relaxed">기본적인 절차 및 필요 서류 확인, 개략적인 판단 등은 <span className="text-blue-600 font-bold">전액 무료</span>로 진행됩니다.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <strong className="text-[13px] text-gray-900 block mb-1">Q. 언제쯤 답변을 받을 수 있나요?</strong>
                  <p className="text-[12px] text-gray-500 font-medium leading-relaxed">영업일 기준 접수 즉시 또는 늦어도 익일 오전까지 직접 연락드립니다.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col space-y-3 z-50">
        <div className="bg-[#0f172a] text-white px-4 py-2 rounded-full shadow-lg flex items-center text-xs font-bold animate-pulse origin-right">
          <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span> 빠른 전화 상담: 02-588-1234
        </div>
        <button className="w-12 h-12 bg-[#fbe950] text-[#3a2929] rounded-full shadow-lg flex items-center justify-center hover:bg-[#f6e12e] transition-colors ml-auto border border-yellow-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-5.52 0-10 3.53-10 7.89 0 2.5 1.48 4.75 3.75 6.13-.26 1.41-1.12 3.48-1.15 3.55-.06.18.01.37.16.48.15.11.36.11.52.01 2.37-1.46 4.38-2.58 5.16-2.93C10.95 18.73 11.47 18.78 12 18.78c5.52 0 10-3.53 10-7.89S17.52 3 12 3z"></path></svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#f8f9fc] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-10 md:mb-0">
              <h2 className="font-extrabold text-[19px] mb-1 text-gray-900 tracking-tight">신기철 법무사 사무소</h2>
              <p className="text-[11px] text-gray-500 font-bold tracking-widest uppercase">서울중앙지방법무사회 소속 제12450호</p>
              
              <div className="text-[12px] text-gray-500 mt-6 space-y-2 leading-relaxed font-medium">
                <p>주소: 서울특별시 서초구 서초대로 250, 스타빌딩 5층 502호 (서초역 1번 출구 도보 2분)</p>
                <p>대표전화: 02-588-1234<span className="mx-2 text-gray-300">|</span>팩스: 02-588-1235<span className="mx-2 text-gray-300">|</span>이메일: contact@shinlaw.kr</p>
                <p>사업자등록번호: 214-12-89472<span className="mx-2 text-gray-300">|</span>대표 법무사: 신기철</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-4 text-[12px] font-bold">
              <a href="#" className="text-gray-900 hover:text-blue-600 transition-colors">개인정보처리방침</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">이용약관</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">오시는 길 (지도)</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">카카오톡 채널 상담</a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200 text-[11px] text-gray-400 font-medium">
            <p>© 2025 신기철 법무사 사무소. All Rights Reserved.</p>
            <p className="mt-4 sm:mt-0">
              대한법무사협회 공인 법률 사무소
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
