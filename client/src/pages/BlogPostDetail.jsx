import { useState,  } from 'react';
import { useParams,  Link } from 'react-router-dom';
import { BsEye, } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { CiShare2 } from 'react-icons/ci';
import { usePostById, usePosts } from '../hook/usePosts';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import DOMPurify from 'dompurify';
const BlogPostDetail = () => {
  const { id } = useParams();

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const { data: postdtail, isLoading, error } = usePostById(id);
  const { data: posts = [] } = usePosts()

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
      </div>
    );
  }

  if (!postdtail) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">게시물을 찾을 수 없습니다</h2>
        <p className="mb-4">요청하신 게시물이 존재하지 않거나 삭제되었습니다.</p>
        <Link to="/iater/blog" className="text-blue-600 hover:underline">
          블로그 목록으로 돌아가기
        </Link>
      </div>
    );
  }


  const formatContent = (rawContent) => {
    if (!rawContent) return '';

    // Convert custom h2 ... h2 to real <h2> with styling
    const withH2 = rawContent.replace(
      /h2 (.*?) h2/g,
      '<hr class="mt-8 border-gray-300" /><h2 class="font-bold text-xl pt-4 my-4">$1</h2>'
    );


    return withH2;
  };


  const handleClick = () => {
    if (!liked) {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };
  return (
    <div className=" mx-auto p-6 pt-[8rem] w-[1224px]">
      {/* Back to list button */}
      <div className="mb-4">
        <Link
          to={"/iater/project"}
          className="inline-block text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← 목록으로
        </Link>
      </div>

      {/* Post header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-4">{postdtail?.title}</h1>
        <div className="text-center text-gray-500 mb-6">{postdtail?.createdAt.slice(0, 10)}</div>
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

            {postdtail?.images && (
              <img
                src={`/uploads/${postdtail?.images}`}
                alt={postdtail?.images}
                className="w-full h-auto rounded-lg shadow-md"
              />

            )}



          </div>

          {/* Post content */}
          <div className="prose max-w-none mb-8">
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(formatContent(postdtail?.content || '')),
              }}
            />


          </div>

          {/* Post metadata */}
          <div className="flex items-center justify-between text-gray-500 mb-8">
            <div className="flex items-center">
              <BiCalendar size={16} className="mr-1" />
              <span>{postdtail?.createdAt.slice(0, 10)}</span>
            </div>
            <div className="flex items-center">
              <BsEye size={16} className="mr-1" />
              <span>{postdtail?.views}</span>
            </div>
          </div>

          

          {/* Related posts */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">관련 게시물</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts
                .filter(p => p.types === postdtail.types && p.id !== postdtail.id)
                .slice(0, 3)
                .map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/projectDetail/${relatedPost.id}`}
                    className="block group"
                  >
                    <div className="overflow-hidden rounded-lg mb-3">
                      <img
                        src={`/uploads/${relatedPost?.images}`}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <div className="text-sm text-gray-500">{relatedPost.createdAt.slice(0, 10)}</div>
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