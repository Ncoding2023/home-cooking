import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { AppBar, Toolbar, Typography } from '@mui/material';
import RecipeNavbar from './components/RecipeNavbar'
import './App.css'
import RecipeList from './pages/RecipeList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './pages/RecipeDetail';
// import { Test1 } from './pages/Test1';
import Test1 from './pages/Test1';  // 기본 내보내기 방식으로 import
import RecipeSearchPage from './pages/RecipeSearchPage';
import RecipeAbout from './pages/RecipeAbout';
import RecipeFavorite from './pages/RecipeFavorite';

// import { RecipeProvider } from './types/RecipeContext';  // RecipeProvider import
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
      {/* 메뉴바 */}
 {/* 메뉴바 스타일을 명시적으로 설정 */}
 {/* <RecipeProvider> */}

 <Router>  {/* Router로 감싸줍니다 */}
    <RecipeNavbar />
    <div className="content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/RecipeList" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/Test1" element={<Test1/>} />
      <Route path="/search" element={<RecipeSearchPage/>} />
      <Route path="/RecipeAbout" element={<RecipeAbout/>} />
      <Route path="/RecipeFavorite" element={<RecipeFavorite/>} />
      {/* <Route path="/RecipeList" element={<RecipeList />} /> */}
    </Routes>
    </div>
  </Router>
  {/* </RecipeProvider> */}
      {/* <RecipeNavbar /> */}
      {/* 본문 */}
      
    </div>
      
      {/* <div className="card">
      <Home/>
      </div> */}
    </>
  )
}

export default App
