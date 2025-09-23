import { useState } from "react"
import { useTranslation } from "react-i18next"
import { usePosts } from "../hook/usePosts"
import BlogPostModal from "./BlogPostDetail"
import { BiCalendar, BiRefresh } from "react-icons/bi"
import { BsEye, BsFileText } from "react-icons/bs"

const ProjectPage = () => {
  const { data: posts, isLoading, error } = usePosts()
  const { t, i18n } = useTranslation()
  const [selectedPost, setSelectedPost] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePostClick = (post) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPost(null)
  }

  const fontClass = {
    en: "font-en",
    la: "font-lao",
    ko: "font-kr",
  }[i18n.language]

  // Utility to format date
  const formatDate = (iso) => {
    const date = new Date(iso)
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`
  }

  // Filter posts based on current tab

  if (posts === null) return (

    <div className="px-4 w-[1224px] mx-auto">

      <div className="flex  flex-col  items-center justify-center min-h-96 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <BsFileText className="w-10 h-10 text-gray-400" />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-md">
          <h3 className="text-xl font-semibold text-gray-400 mb-3">
            No Posts Available
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            There are currently no posts to display. Please check back later as new content may be added soon.
          </p>

          {/* Action Button */}
          <div className="flex justify-center">
            <button className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-md border border-gray-300 transition-colors duration-200">
              <BiRefresh className="w-4 h-4 mr-2" />
              Refresh Page
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-gray-200 w-full max-w-md">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-2">What you can do:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                Check back later
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                Refresh the page
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                Browse other sections
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  const filteredPosts = (posts || [])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading posts</p>

  return (
    <div className={`bg-white ${fontClass}`}>
      <div className="container mx-auto px-4  py-6 w-[1224px]">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => {
            const imageExists = post.images && post.images.trim() !== "";
            const imageUrl = imageExists ? `/uploads/${post.images}` : null;

            return (
              <div
                key={post.id}
                onClick={() => handlePostClick(post)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="overflow-hidden relative">
                  <img
                    src={imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold capitalize">
                      {post.types}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <BiCalendar size={16} className="mr-1" />
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                    <div className="flex items-center">
                      <BsEye size={16} className="mr-1" />
                      <span>{post.viewer || 0}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 line-clamp-3 leading-relaxed">
                    {post.content.replace(/h2 (.*?) h2/g, '').substring(0, 120)}...
                  </p>

                  <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                    Read more
                    <svg className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <BlogPostModal
          post={selectedPost}
          isOpen={isModalOpen}
          onClose={closeModal}
          allPosts={posts}
        />
      </div>
    </div>
  )
}

export default ProjectPage
