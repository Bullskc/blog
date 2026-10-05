import Link from 'next/link';
import { type Category, type Post } from '@/app/actions';

interface BlogSectionProps {
  categories: Category[];
  posts: Post[];
  totalPosts: number;
  currentCategory: string;
  currentPage: number;
}

export default function BlogSection({
  categories,
  posts,
  totalPosts,
  currentCategory,
  currentPage,
}: BlogSectionProps) {
  const postsPerPage = 6;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <section className="py-16 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">신기철 법무사의 실무 법률 칼럼</h2>
          <Link href="#" className="text-sm font-medium text-gray-600 flex items-center hover:text-gray-900 transition-colors">
            전체 칼럼 및 판례 해설 보기 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </Link>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 items-center bg-white/60 p-4 rounded-xl border border-gray-200">
           <div className="relative flex-grow max-w-sm mr-4">
             <input type="text" placeholder="궁금하신 실무나 사건 키워드를 검색해보세요 (예: 상속세 절세, 법인설립 절차)" className="w-full pl-10 pr-16 py-2.5 bg-white border border-gray-200 rounded-full text-sm focus:ring-1 focus:ring-[#0f172a] focus:border-[#0f172a] outline-none" />
             <svg className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
             <button className="absolute right-1 top-1 bg-[#0f172a] text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors">검색</button>
           </div>
          
          <Link 
            href={`/?category=all&page=1`}
            scroll={false}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentCategory === 'all' ? 'bg-[#0f172a] text-white' : 'text-gray-600 hover:bg-white hover:shadow-sm border border-transparent'}`}
          >
            전체
          </Link>
          {categories.map(cat => (
            <Link 
              key={cat.id}
              href={`/?category=${cat.id}&page=1`}
              scroll={false}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${currentCategory === cat.id ? 'bg-[#0f172a] text-white border-[#0f172a]' : 'text-gray-600 hover:bg-gray-50 bg-white border-gray-200'}`}
            >
              #{cat.name}
            </Link>
          ))}
        </div>

        {/* Posts Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-200 opacity-100`}>
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group cursor-pointer">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md">
                  {post.categories?.name}
                </span>
                <span className="text-xs text-gray-400 font-medium"># {String(post.id).substring(0,6)}</span>
              </div>
              <h3 className="font-bold text-[17px] mb-3 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">{post.title}</h3>
              <p className="text-gray-500 text-[14px] mb-6 line-clamp-2 leading-relaxed">{post.content}</p>
              
              <div className="flex justify-between items-center text-xs text-gray-400 mt-auto pt-5 border-t border-gray-50">
                <span className="font-medium">{new Date(post.created_at).toLocaleDateString('ko-KR').replace(/\.$/, '')} · 조회 {post.view_count.toLocaleString()}</span>
                <div className="flex items-center">
                  <span className="flex items-center hover:text-blue-600 transition-colors"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> 원문 읽기</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <Link
                key={i}
                href={`/?category=${currentCategory}&page=${i + 1}`}
                scroll={false}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${currentPage === i + 1 ? 'bg-[#0f172a] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
              >
                {i + 1}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
