'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/navigation';
import { getCategories, createPost, type Category } from '@/app/actions';

export default function AdminWritePage() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  
  // Form State
  const [title, setTitle] = useState('2025년 개정 상속세법과 취득세 감면을 위한 상속등기 실무 핵심 가이드');
  const [categoryId, setCategoryId] = useState('');
  const [author, setAuthor] = useState('신기철 법무사');
  const [tags, setTags] = useState(['상속등기', '취득세감면', '협의분할서', '1세대1주택']);
  const [tagInput, setTagInput] = useState('');
  const [content, setContent] = useState(`## 1. 상속등기 신청기한 및 과태료 규정

피상속인의 사망으로 인한 부동산 소유권이전등기는 **사망일이 속한 달의 말일로부터 6개월 이내**에 취득세를 신고·납부해야 합니다. 상속세 신고기한과 일치하지만, 만약 이 기간을 도과할 경우 「지방세법 제21조」에 의거하여 무신고가산세(20%) 및 납부지연가산세가 일할 가산됩니다.

> **대법원 2012다20352 판결 요지**
> *"상속재산 협의분할에 의한 소유권이전등기 신청 시에는 상속인 전원의 진정한 의사합치가 객관적 서면(인감증명서 첨부 인감날인 또는 본인서명사실확인서)으로 입증되어야 하며, 일부 상속인이 누락된 분할협의는 원인무효에 해당한다."*

## 2. 단계별 상속등기 실무 절차

| 절차 단계 | 소요 기간 | 관할 기관 | 법무사 주안점 |
| :--- | :--- | :--- | :--- |
| 제적·가족관계 증명 발급 | 1~2일 | 주민센터·구청 | 피상속인의 출생부터 사망까지 연속 제적 확인 |
| 상속인 확정 및 분할협의 | 3~7일 | 신기철 사무소 | 상속지분 및 세금 감면 최적화 시뮬레이션 |
| 취득세 신고 및 납부 | 1일 | 관할 시·군·구청 | 특례세율(0.8%) 등 감면 요건 적용 |
| 상속등기 신청 및 완료 | 2~4일 | 관할 등기소 | 각하·보정 없는 신속 정확한 등기 완료 |`);

  const [isFeatured, setIsFeatured] = useState(true);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      if (data && data.length > 0) {
        setCategories(data);
        setCategoryId(data[0].id);
      }
    }
    fetchCategories();
  }, []);

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const insertMarkdown = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('markdown-editor') as HTMLTextAreaElement;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const beforeText = content.substring(0, start);
    const afterText = content.substring(end);
    
    setContent(beforeText + prefix + selectedText + suffix + afterText);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, end + prefix.length);
    }, 0);
  };

  const handlePublish = async () => {
    if (!title || !content || !categoryId) {
      alert('제목, 내용, 카테고리를 입력해주세요.');
      return;
    }

    setIsPublishing(true);
    try {
      // 서버 사이드 Server Action 호출 (세션 검증 및 DB 저장이 모두 서버에서 실행됨)
      const result = await createPost({
        title,
        content,
        categoryId,
        author,
        tags,
        isFeatured,
        isPrivate,
      });

      if (!result.success) {
        throw new Error(result.error || '게시글 발행에 실패했습니다.');
      }
      
      alert('성공적으로 발행되었습니다.');
      router.push('/');
    } catch (error: any) {
      console.error('Catch Error:', error);
      alert('발행 중 오류가 발생했습니다:\n' + (error.message || '알 수 없는 오류'));
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f3f4f6] text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
          <div className="w-8 h-8 bg-amber-100 text-amber-700 flex items-center justify-center rounded-sm font-bold">신</div>
          <div>
            <div className="font-bold text-[15px] leading-tight">신기철 법무사</div>
            <div className="text-[11px] text-gray-500">통합 관리 시스템</div>
          </div>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1">
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50">
            <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            상담 신청 관리
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-bold rounded-lg bg-[#0f172a] text-white">
            <svg className="w-5 h-5 mr-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            칼럼 작성/발행
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50">
            <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            등기·사건 관리
          </a>
          
          <div className="pt-8 pb-2">
            <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50">
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              대국민 웹사이트
            </a>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center w-full px-4 py-3 text-sm font-bold text-red-600 rounded-lg hover:bg-red-50">
            <svg className="w-5 h-5 mr-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center text-sm text-gray-500 font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            인증된 보안 관리자 세션
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700">신기철 법무사 (본인)</span>
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
               <img src="https://ui-avatars.com/api/?name=Shin&background=0D8ABC&color=fff" alt="avatar" />
            </div>
          </div>
        </header>

        {/* Action Header */}
        <div className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between flex-shrink-0 shadow-sm z-10 relative">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <div>
              <div className="flex items-center text-[12px] text-gray-500 font-medium mb-1">
                칼럼 관리 <span className="mx-1">&gt;</span> <span className="text-gray-900">새로운 법률 칼럼 발행</span>
              </div>
              <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">실무 칼럼 및 판례 해설 작성</h1>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center shadow-sm">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
              임시저장 (Draft)
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center shadow-sm hidden lg:flex">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              미리보기 확대 모드
            </button>
            <button 
              onClick={handlePublish}
              disabled={isPublishing}
              className="px-6 py-2 bg-[#0f172a] hover:bg-gray-800 text-white rounded-lg text-sm font-bold shadow-md flex items-center transition-colors disabled:opacity-50"
            >
              <svg className="w-4 h-4 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              {isPublishing ? '발행 중...' : '최종 공개 발행'}
            </button>
          </div>
        </div>

        {/* Workspace */}
        <div className="flex-1 overflow-hidden flex relative">
          
          {/* Editor Panel (Left) */}
          <div className="flex-1 flex flex-col w-1/2 min-w-0 border-r border-gray-200 overflow-y-auto bg-gray-50/30">
            <div className="p-8 max-w-3xl mx-auto w-full space-y-6">
              
              {/* Post Meta Box */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-200">
                
                <div className="mb-6">
                  <div className="flex justify-between items-end mb-2">
                    <label className="block text-sm font-bold text-gray-800">칼럼 제목 <span className="text-red-500">*</span></label>
                    <span className="text-[11px] text-gray-400">고객 검색 유입 최적화(SEO) 반영</span>
                  </div>
                  <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-xl font-bold px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    placeholder="제목을 입력하세요"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">분류 카테고리</label>
                    <select 
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-700 bg-gray-50"
                    >
                      {categories.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">작성자 명의</label>
                    <div className="flex items-center px-4 py-3 border border-gray-200 bg-blue-50/50 rounded-xl">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="font-bold text-gray-800 text-sm">{author} 직접 감수</span>
                      <span className="ml-auto bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded font-bold">공인</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-800 mb-2">전문 태그 메타데이터 (키워드)</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map(tag => (
                      <span key={tag} className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-bold border border-blue-100">
                        #{tag}
                        <button onClick={() => removeTag(tag)} className="ml-1.5 text-blue-400 hover:text-blue-600">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </span>
                    ))}
                  </div>
                  <input 
                    type="text" 
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagInputKeyDown}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                    placeholder="태그 입력 후 Enter..."
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-800 mb-2">대표 썸네일 이미지</label>
                  <div className="flex gap-4">
                    <div className="w-40 h-24 bg-gray-900 rounded-lg relative overflow-hidden flex-shrink-0 group">
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-bold">변경</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                        <span className="text-white text-[10px] font-bold">현재 대표 이미지</span>
                      </div>
                      <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="thumbnail" />
                    </div>
                    <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 flex flex-col items-center justify-center p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                      <svg className="w-6 h-6 text-yellow-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                      <div className="text-[13px] text-gray-600 font-medium">여기로 이미지를 드래그하거나 <span className="text-blue-600 font-bold">파일 선택</span></div>
                      <div className="text-[11px] text-gray-400 mt-1">권장 비율 16:9 (최대 10MB, JPG, WebP, PNG)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-3">노출 및 부가 기능 설정</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center space-x-2 bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg cursor-pointer flex-1">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" defaultChecked />
                      <span className="text-[13px] font-bold text-gray-700 leading-tight">1:1 맞춤상담 배너 자동<br/>삽입</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg cursor-pointer flex-1">
                      <input type="checkbox" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                      <span className="text-[13px] font-bold text-gray-700 leading-tight">메인 홈 상단 추천 칼럼<br/>노출</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg cursor-pointer flex-1">
                      <input type="checkbox" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                      <span className="text-[13px] font-bold text-gray-700 leading-tight">비공개 비밀 질문 허용</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Editor Box */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col" style={{ minHeight: '600px' }}>
                <div className="px-4 py-2 border-b border-gray-200 flex flex-wrap gap-2 items-center bg-gray-50 rounded-t-2xl">
                  <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
                    <button onClick={() => insertMarkdown('**', '**')} className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded font-serif font-bold text-gray-700">B</button>
                    <button onClick={() => insertMarkdown('*', '*')} className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded font-serif italic text-gray-700">I</button>
                  </div>
                  <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
                    <button onClick={() => insertMarkdown('## ')} className="px-2 h-8 flex items-center justify-center hover:bg-gray-200 rounded font-bold text-gray-700 text-sm">H2</button>
                    <button onClick={() => insertMarkdown('### ')} className="px-2 h-8 flex items-center justify-center hover:bg-gray-200 rounded font-bold text-gray-700 text-sm">H3</button>
                  </div>
                  <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
                    <button onClick={() => insertMarkdown('- ')} className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded text-gray-700">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                    <button onClick={() => insertMarkdown('1. ')} className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded text-gray-700 font-bold text-xs">1.</button>
                  </div>
                  <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
                    <button onClick={() => insertMarkdown('> ')} className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded text-gray-700 font-serif font-bold">”</button>
                  </div>
                  <div className="flex ml-auto space-x-2">
                    <button className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[11px] font-bold text-gray-700 hover:bg-gray-50 flex items-center shadow-sm">
                       <span className="mr-1">⚖️</span> 판례·조문 인용
                    </button>
                    <button className="px-3 py-1.5 bg-green-50 border border-green-200 rounded text-[11px] font-bold text-green-700 hover:bg-green-100 flex items-center shadow-sm">
                       <span className="mr-1">☑️</span> 서류 체크리스트
                    </button>
                    <button className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[11px] font-bold text-gray-700 hover:bg-gray-50 flex items-center shadow-sm">
                       <span className="mr-1">📈</span> 절차 타임라인
                    </button>
                  </div>
                </div>
                
                <div className="px-4 py-2 border-b border-gray-200 bg-gray-50 flex justify-between items-center text-[11px] text-gray-400 font-mono uppercase tracking-wider">
                  <div className="flex items-center">
                    <span className="mr-2">&lt; &gt;</span> Markdown Source Editor (UTF-8)
                  </div>
                  <div>Line: 24 | Col: 12</div>
                </div>

                <div className="flex-1 flex relative">
                  <textarea
                    id="markdown-editor"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="flex-1 w-full p-4 resize-none focus:outline-none text-[14px] leading-relaxed font-mono text-gray-800 bg-white"
                    style={{ minHeight: '500px' }}
                    spellCheck="false"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Preview Panel (Right) */}
          <div className="flex-1 flex flex-col w-1/2 min-w-0 bg-gray-100/50">
            <div className="p-4 border-b border-gray-200 bg-white flex justify-between items-center flex-shrink-0 shadow-sm z-10">
              <div className="flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2"></span>
                <span className="font-bold text-sm text-gray-800">실제 블로그 뷰어 화면 (실시간 반영)</span>
              </div>
              <button className="flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-xs font-bold transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                PC 와이드 레이아웃 규격
              </button>
            </div>
            
            {/* Live Preview Content */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="bg-white max-w-[800px] mx-auto rounded-2xl shadow-sm border border-gray-200 p-10 min-h-full">
                
                {/* Preview Header */}
                <div className="mb-10 pb-8 border-b border-gray-100">
                  <div className="flex items-center text-sm text-gray-500 font-medium mb-4">
                    <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-bold text-xs border border-blue-100 mr-3">상속·증여</span>
                    <span>2025. 05. 14 발행</span>
                    <span className="mx-2">·</span>
                    <span>소요시간 4분</span>
                  </div>
                  <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                    {title || '제목을 입력하세요'}
                  </h1>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-lg border border-gray-200">
                      신
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-[14px]">{author}</div>
                      <div className="text-[11px] text-gray-500">대한법무사협회 정회원 - 서울중앙지방법무사회</div>
                    </div>
                  </div>
                </div>

                {/* Markdown Content */}
                <div className="prose prose-blue max-w-none text-gray-800 leading-loose prose-h2:text-2xl prose-h2:font-extrabold prose-h2:mt-10 prose-h2:mb-5 prose-h2:flex prose-h2:items-center prose-h3:text-xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-p:mb-5 prose-li:my-1 prose-a:text-blue-600 prose-blockquote:border-l-4 prose-blockquote:border-[#a48148] prose-blockquote:bg-[#fefce8] prose-blockquote:p-5 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-700 prose-blockquote:font-medium prose-blockquote:not-italic prose-table:w-full prose-table:border-collapse prose-th:bg-gray-50 prose-th:p-3 prose-th:border prose-th:border-gray-200 prose-th:text-left prose-td:p-3 prose-td:border prose-td:border-gray-200 prose-td:text-[14px]">
                  <ReactMarkdown
                    components={{
                      h2: ({node, ...props}) => (
                        <h2 {...props}>
                          <span className="w-1.5 h-6 bg-[#a48148] mr-3 rounded-full inline-block"></span>
                          {props.children}
                        </h2>
                      )
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Footer */}
        <footer className="h-10 bg-white border-t border-gray-200 flex items-center justify-between px-6 flex-shrink-0 text-[12px] font-medium text-gray-500 z-10">
          <div className="flex items-center">
            <span className="flex items-center text-emerald-600"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span> 단어 수: {content.split(/\s+/).length}자 (본문 기준)</span>
            <span className="mx-4 text-gray-300">|</span>
            <span className="flex items-center text-gray-700">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              자동 저장됨: 방금 전 (14:32:05)
            </span>
          </div>
          <div className="flex items-center">
            <span className="flex items-center text-amber-700 font-bold">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              작성 권한: 신기철 법무사 (Master Account)
            </span>
            <span className="mx-4 text-gray-300">|</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-bold">Auto-Sync ON</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
