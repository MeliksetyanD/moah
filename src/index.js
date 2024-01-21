import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import Blog from './components/Blog/Blog'
import OurStory from './components/OurStory/OurStory'
import PageNotFound from './components/Page404/PageNotFound'
import BlogProducts from './components/Blog/BlogProducts/BlogProducts'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />}>
        <Route
          path="/blog/categories/:id/products"
          element={<BlogProducts />}
        />
      </Route>
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/shop/:id" element={<Shop />} />
    </Routes>
  </BrowserRouter>
)
