import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectPage from "./pages/ProjectPage"
import ProgramPage from "./pages/ProgramPage"
import PeoplePage from "./pages/PeoplePage"
import HistoryPage from "./pages/HistoryPage"
import AIEducationTabs from "./pages/AIEducationTabs"
import BlogPostDetail from "./pages/BlogPostDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="program" element={<ProgramPage />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="aieducation" element={<AIEducationTabs />} />
          <Route path="projectDetail/:id" element={<BlogPostDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
