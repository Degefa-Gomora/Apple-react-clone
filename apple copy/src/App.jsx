import { Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/Home.jsx";
import Mac from "./Pages/Mac/Mac.jsx";
import Iphone from "./Pages/Iphone/Iphone.jsx";
import Ipad from "./Pages/Ipad/Ipad.jsx";
import Watch from "./Pages/Watch/Watch.jsx";
import TV from "./Pages/TV/TV.jsx";
import Music from "./Pages/Music/Music.jsx";
import Support from "./Pages/Support/Support.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Search from "./Pages/Search/Search.jsx";
import Four04 from "./Pages/Four04/Four04.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import ProductPage from "./Pages/ProductPage/ProductPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:pid" element={<ProductPage />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<TV />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
