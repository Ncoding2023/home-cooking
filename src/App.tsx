import Home from './pages/Home'
import RecipeNavbar from './components/RecipeNavbar'
import './App.css'
// import { AppContainer, Content } from './AppStyles.js'
import RecipeList from './pages/RecipeList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './pages/RecipeDetail';
import RecipeSearchPage from './pages/RecipeSearchPage';
import RecipeAbout from './pages/RecipeAbout';
import RecipeFavorite from './pages/RecipeFavorite';
import RecipeFooter from './components/RecipeFooter';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  
const navigate = useNavigate();
navigate('/home-cooking');

  // useEffect(() => {
  //   if (window.location.pathname === '/') {
  //   }
  // }, [history]);
  return (
    <>
    <div>
     <Router>  {/* Router로 감싸줍니다 */}
        <RecipeNavbar />
        <div className="content">
        <Routes>
          {/* <Route path="/Test1" element={<Test1/>} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/RecipeList" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/search" element={<RecipeSearchPage/>} />
          <Route path="/RecipeAbout" element={<RecipeAbout/>} />
          <Route path="/RecipeFavorite" element={<RecipeFavorite/>} />
        </Routes>
        </div>
      <RecipeFooter />   {/* 풋터 추가 */}
      </Router>
        </div>
          
        </>
//     // <>
//     <AppContainer>
//       <Router>
//         <RecipeNavbar />
//         <Content>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/RecipeList" element={<RecipeList />} />
//             <Route path="/recipe/:id" element={<RecipeDetail />} />
//             <Route path="/search" element={<RecipeSearchPage />} />
//             <Route path="/RecipeAbout" element={<RecipeAbout />} />
//             <Route path="/RecipeFavorite" element={<RecipeFavorite />} />
//           </Routes>
//         </Content>
//         <RecipeFooter />
//       </Router>
//     </AppContainer>
//   );
// }
//     // </>
)
}
export default App
