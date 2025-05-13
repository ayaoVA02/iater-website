import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { im4, im5, im6, im7, im8, im9 } from "../assets/images"
import { BsArrowLeft, BsArrowRight, BsEye,  } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { CiShare2 } from 'react-icons/ci';

import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

// Placeholder for images (in a real app, you would import actual images)


// Sample data (in a real app, this would come from your database)
const projects = [
  {
    id: 1,
    tab: "external",
    title: "항공대 학과 13개교 매니저멘트 HEWEGO",
    date: "2023.03.11",
    views: 1,
    image: im4,
    description:
      "HEWEGO(헤위고)는 4가지 모델을 통하여 13개교 항공대 서비스로 항공 관광을 활성화가 되어있 매니저멘트 시스템으로 CCG와 신한은 U-Campus에서 시작되어 지금 현재 시작하게 되어 TM-그룹스 시스템으로 운영되고 있습니다.",
  },
  {
    id: 2,
    tab: "internal",
    title: "경기 복합센터 참여하는 바람, 마음부...",
    date: "2023.03.11",
    views: 14,
    image: im5,
    description:
      "경기도 서비스로 항공 관광을 활성화가 되어있 매니저멘트 시스템으로 CCG와 신한은 U-Campus에서 시작되어 지금 현재 시작하게 되어 TM-그룹스 시스템으로 운영되고 있습니다.",
  },
  {
    id: 3,
    tab: "research",
    title: "제6기 신입생 졸업 수료 및 취업처",
    date: "2023.03.10",
    views: 9,
    image: im6,
    description:
      "6기수, 5기수, 3기수 총 13명 신입사 졸업 수료, 12개사 3명씩 졸업 신입사원들에게 수료한 2023년 제6기 신입생 졸업 수료식 개최하여 ~ 졸업 신입사 취업처(이니셜만), 2명 취업 완료하여 신입사원, 2명 취업 활동중",
  },
  {
    id: 4,
    tab: "external",
    title: "고 전효성 시장 5주년 행사 추모 헌화 ~",
    date: "2023.02.13",
    views: 2,
    image: im7,
    description: "추모CG 설명과 기념) 감동을 복사에 헌안 헌화 추모",
  },
  {
    id: 5,
    tab: "internal",
    title: "25년 겨울 강사지도 협회 행사",
    date: "2023.02.01",
    views: 3,
    image: im8,
    description: "FOCUS ON 4차산업혁명 위험안전사회 안전놀이터",
  },
  {
    id: 6,
    tab: "research",
    title: "The 아름다운 꿈들",
    date: "2023.01.30",
    views: 3,
    image: im9,
    description: "제6기 졸업식과 제6기, The 아름다운 꿈들하다",
  },
  {
    id: 7,
    tab: "research",
    title: "The 아름다운 꿈들",
    date: "2023.01.30",
    views: 3,
    image: im9,
    description: "제6기 졸업식과 제6기, The 아름다운 꿈들하다",
  },
  {
    id: 8,
    tab: "research",
    title: "The 아름다운 꿈들",
    date: "2023.01.30",
    views: 3,
    image: im9,
    description: "제6기 졸업식과 제6기, The 아름다운 꿈들하다",
  },
  {
    id: 9,
    tab: "internal",
    title: "25년 겨울 강사지도 협회 행사",
    date: "2023.02.01",
    views: 3,
    image: im8,
    description: "FOCUS ON 4차산업혁명 위험안전사회 안전놀이터",
  },
  {
    id: 10,
    tab: "internal",
    title: "25년 겨울 강사지도 협회 행사",
    date: "2023.02.01",
    views: 3,
    image: im8,
    description: "FOCUS ON 4차산업혁명 위험안전사회 안전놀이터",
  },
  {
    id: 11,
    tab: "external",
    title: "항공대 학과 13개교 매니저멘트 HEWEGO",
    date: "2023.03.11",
    views: 1,
    image: im4,
    description:
      "HEWEGO(헤위고)는 4가지 모델을 통하여 13개교 항공대 서비스로 항공 관광을 활성화가 되어있 매니저멘트 시스템으로 CCG와 신한은 U-Campus에서 시작되어 지금 현재 시작하게 되어 TM-그룹스 시스템으로 운영되고 있습니다.",
  },
  {
    id: 12,
    tab: "external",
    title: "항공대 학과 13개교 매니저멘트 HEWEGO",
    date: "2023.03.11",
    views: 1,
    image: im4,
    description:
      "HEWEGO(헤위고)는 4가지 모델을 통하여 13개교 항공대 서비스로 항공 관광을 활성화가 되어있 매니저멘트 시스템으로 CCG와 신한은 U-Campus에서 시작되어 지금 현재 시작하게 되어 TM-그룹스 시스템으로 운영되고 있습니다.",
  },
]


const BlogPostDetail = () => {
  const { id } = useParams(); // Get the id from URL params
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
 const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Simulate fetching data from API/database
    const fetchPost = async () => {
      setLoading(true);
      try {
        // In a real app, you would fetch from an API
        // const response = await fetch(`/api/posts/${id}`);
        // const data = await response.json();

        // For this example, we'll find the post in our local data
        const postId = parseInt(id, 10);
        const foundPost = projects.find(p => p.id === postId);

        // Simulate network delay
        setTimeout(() => {
          setPost(foundPost || null);
          setLoading(false);
        }, 300);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Find previous and next post IDs
  const currentIndex = projects.findIndex(p => p.id === parseInt(id, 10));
  const prevPost = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextPost = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Navigate to previous or next post
  const goToPrevPost = () => {
    if (prevPost) navigate(`/blog/${prevPost.id}`);
  };

  const goToNextPost = () => {
    if (nextPost) navigate(`/blog/${nextPost.id}`);
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">게시물을 찾을 수 없습니다</h2>
        <p className="mb-4">요청하신 게시물이 존재하지 않거나 삭제되었습니다.</p>
        <Link to="/blog" className="text-blue-600 hover:underline">
          블로그 목록으로 돌아가기
        </Link>
      </div>
    );
  }


   

  const handleClick = () => {
    if (!liked) {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };
  return (
    <div className="max-w-4xl mx-auto p-6 pt-[8rem]">
      {/* Back to list button */}
      <div className="mb-4">
        <Link
          to={"/project"}
          className="inline-block text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← 목록으로
        </Link>
      </div>

      {/* Post header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-4">{post.title}</h1>
        <div className="text-center text-gray-500 mb-6">{post.date}</div>
      </div>

      {/* Social sharing sidebar */}
      <div className="relative">


        {/* Main content */}
        <div className="">
          {/* Featured image */}
          <div className="mb-8 relative">

            <div className="absolute right-4 bottom-4 flex  space-x-4">
              <button onClick={handleClick} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex gap-2">
                 <span className='text-sm'>{likes}</span> {liked ? <FcLike size={18} /> : <FcLikePlaceholder size={18} />}
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <FaFacebook size={18} />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <CiShare2 size={18} />
              </button>
            </div>
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-md"
            />


          </div>

          {/* Post content */}
          <div className="prose max-w-none mb-8">
            <p className="text-lg">{post.description}</p>

            {/* This would be your actual blog content */}
            <div className="mt-8 border-t pt-8">
              <h2 className="text-xl font-bold mb-4">글로벌 가족 사랑과 커뮤스 기회</h2>
              <p className="mb-4">
                매년 5월 8일, 한국에서는 어버이날에 카네이션을 드리며 감사와 사랑을 전해요. 이런 어버이날이
                우리나라에만 있을까요? 부모님을 향한 사랑은 보편적인 정서로, 미국과 일본에서도 어머니와 아버지를 위한
                날을 별도로 기념하며 이는 중요한 상업적 기회로도 이어져요.
              </p>
              <p>
                이 글에서는 미국 대표 어버이날 Mother's Day의 문화적 배경과 일본의 '하하노히(母の日, 어머니날)' 및
                '치치노히(父の日, 아버지날)' 전통을 살펴보고자 해요. 이를 통해 글로벌 어커머스 시장의 시즌 마케팅
                아이디어를 발견하고, 가족을 소중히 여기는 마음이 국경을 넘는 비즈니스의 장벽만 연결고리가 될 수 있음을
                보여드릴게요.
              </p>
            </div>
          </div>

          {/* Post metadata */}
          <div className="flex items-center justify-between text-gray-500 mb-8">
            <div className="flex items-center">
              <BiCalendar size={16} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <BsEye size={16} className="mr-1" />
              <span>조회수 {post.views}</span>
            </div>
          </div>

          {/* Post navigation */}
          <div className="flex justify-between border-t border-b py-4 my-8">
            <button
              onClick={goToPrevPost}
              disabled={!prevPost}
              className={`flex items-center ${!prevPost ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-800'}`}
            >
              <BsArrowLeft size={16} className="mr-2" />
              {prevPost ? `이전: ${prevPost.title.substring(0, 15)}...` : '이전 글 없음'}
            </button>

            <button
              onClick={goToNextPost}
              disabled={!nextPost}
              className={`flex items-center ${!nextPost ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-800'}`}
            >
              {nextPost ? `다음: ${nextPost.title.substring(0, 15)}...` : '다음 글 없음'}
              <BsArrowRight size={16} className="ml-2" />
            </button>
          </div>

          {/* Related posts */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">관련 게시물</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects
                .filter(p => p.tab === post.tab && p.id !== post.id)
                .slice(0, 3)
                .map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="block group"
                  >
                    <div className="overflow-hidden rounded-lg mb-3">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <div className="text-sm text-gray-500">{relatedPost.date}</div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;