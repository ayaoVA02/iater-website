import React, { useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { CiShare2 } from 'react-icons/ci';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import DOMPurify from 'dompurify';

const BlogPostModal = ({ post, isOpen, onClose, allPosts }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100) + 10);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen || isImageViewerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isImageViewerOpen]);

  // Early return if modal should not be displayed
  if (!isOpen || !post) return null;

  const formatContent = (rawContent) => {
    if (!rawContent) return '';

    const withH2 = rawContent.replace(
      /h2 (.*?) h2/g,
      '<hr class="mt-8 border-gray-300" /><h2 class="font-bold text-xl pt-4 my-4 text-gray-800">$1</h2>'
    );

    return withH2;
  };

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  return (
    <>
      {/* Background overlay - clicking this closes the modal */}
      <div 
        className="fixed inset-0 bg-black/50 bg-opacity-75 z-40 transition-opacity cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="fixed inset-0 z-45 flex items-center justify-center p-4  mt-28">
        <div 
          className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Scrollable content container */}
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="p-6">{/* Close button */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold flex-1 text-center">{post.title}</h1>
                <button
                  onClick={onClose}
                  className="ml-4 text-gray-500 hover:text-gray-700 text-2xl font-bold min-w-[32px] min-h-[32px] flex items-center justify-center"
                >
                  ×
                </button>
              </div>

              {/* Post date */}
              <div className="text-center text-gray-500 mb-6">
                {post.createdAt?.slice(0, 10)}
              </div>

              {/* Featured image */}
              <div className="mb-8 relative">
                <div className="absolute right-4 bottom-4 flex space-x-4 z-10">
                  <button 
                    onClick={handleLike} 
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex gap-2"
                  >
                    <span className='text-sm'>{likes}</span> 
                    {liked ? <FcLike size={18} /> : <FcLikePlaceholder size={18} />}
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <FaFacebook size={18} />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <CiShare2 size={18} />
                  </button>
                </div>

                {post.images && (
                  <div className="flex justify-center">
                    <button 
                      className="w-[550px] hover:opacity-90 transition-opacity cursor-pointer"
                      onClick={() => setIsImageViewerOpen(true)}
                      title="Click to view full image"
                    >
                      <img
                        src={`/uploads/${post.images}`}
                        alt={post.title}
                        className="w-full h-[450px] rounded-lg shadow-md object-cover"
                      />
                    </button>
                  </div>
                )}
              </div>

              {/* Post content */}
              <div className="prose max-w-none mb-8">
                <div
                  className="text-lg"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(formatContent(post.content || '')),
                  }}
                />
              </div>

              {/* Post metadata */}
              <div className="flex items-center justify-between text-gray-500 mb-8">
                <div className="flex items-center">
                  <BiCalendar size={16} className="mr-1" />
                  <span>{post.createdAt?.slice(0, 10)}</span>
                </div>
                <div className="flex items-center">
                  <BsEye size={16} className="mr-1" />
                  <span>{post.viewer || 0}</span>
                </div>
              </div>

           
            </div>
          </div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {isImageViewerOpen && post.images && (
        <>
          {/* Image viewer overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-[60] transition-opacity cursor-pointer"
            onClick={() => setIsImageViewerOpen(false)}
          />
          
          {/* Image viewer content */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div className="relative max-w-[95vw] max-h-[95vh]">
              {/* Close button */}
              <button
                onClick={() => setIsImageViewerOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-3xl font-bold z-10"
              >
                ×
              </button>
              
              {/* Full size image */}
              <img
                src={`/uploads/${post.images}`}
                alt={post.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <p className="text-center font-medium">{post.title}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BlogPostModal;