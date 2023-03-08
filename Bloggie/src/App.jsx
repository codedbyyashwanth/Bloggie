import Home from "./pages/Home";
import 
      {
            Routes,
            Route
      }
      from 'react-router-dom';
import Posts from "./pages/Post";
import Category from "./pages/Category";
import CategoryPost from "./components/home/CategoryPost";
import Authors from "./pages/Authors";
import Author from "./pages/Author";
import Post from "./pages/PostPage";

const App = () => {
      return (
      <div className="App">
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/posts/:id" element={<Post />} />
                  <Route path="/categories" element={<Category />} />
                  <Route path="/categories/:id" element={<CategoryPost />} />
                  <Route path="/authors" element={<Authors />} />
                  <Route path="/authors/:author" element={<Author />} />
            </Routes>
      </div>
      )
}

export default App;
