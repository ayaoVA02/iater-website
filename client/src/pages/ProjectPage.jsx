import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Logo from "../components/Logo"
import LanguageSelector from "../components/LanguageSelector"
import { usePosts } from "../hook/usePosts"

const ProjectPage = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState("EXTERNAL")
  const { data: posts, isLoading, error } = usePosts()
  const { t, i18n } = useTranslation()


  // Hash -> tab id map
  const hashToTabId = {
    "#external": "EXTERNAL",
    "#internal": "INTERNAL_ACTIVITY",
    "#research": "RESEARCH",
  }

  // Handle initial tab from hash
  useEffect(() => {
    if (location.hash && hashToTabId[location.hash.toLowerCase()]) {
      setActiveTab(hashToTabId[location.hash.toLowerCase()])
    }
  }, [location.hash])


  const tabs = [
    { id: "EXTERNAL", name: t("home.projectMenuItems1"), color: "bg-blue-500" },
    { id: "INTERNAL_ACTIVITY", name: t("home.projectMenuItems2"), color: "bg-orange-500" },
    { id: "RESEARCH", name: t("home.projectMenuItems3"), color: "bg-green-500" },
  ]

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
  const filteredPosts = (posts || []).filter(post => post.types === activeTab)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading posts</p>

  return (
    <div className={`bg-white ${fontClass}`}>
      <div className="container mx-auto px-4  py-6 w-[1224px]">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <LanguageSelector />
        </div>

        <h1 className="text-center text-xl mb-6">{t("home.project_subtitle")}</h1>

        <div className="flex mb-6 space-x-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`transition-all duration-300 ease-in-out cursor-pointer text-white rounded 
          ${tab.color} 
          ${isActive ? "py-2 px-4 text-base  fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 " : "py-2 px-4 text-base "}
        `}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            );
          })}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => {
            const imageExists = post.images && post.images.trim() !== "";
            const imageUrl = imageExists ? `/uploads/${post.images}` : null;

            return (
              <Link to={`/iater/projectDetail/${post.id}`} key={post.id}>
                <div className="group rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow">
                  <div className="overflow-hidden">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2 hover:text-blue-500">{post.title}</h3>
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>{formatDate(post.createdAt)}</span>
                      <span>👁 {post.viewer || 0}</span>
                    </div>
                    <p className="text-sm line-clamp-3 whitespace-pre-wrap">{post.content}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
