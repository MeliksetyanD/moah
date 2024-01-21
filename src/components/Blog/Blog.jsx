import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Blog.module.css'
import { getCategories } from '../../utils/products'
import { Link, NavLink } from 'react-router-dom'
import BlogProducts from './BlogProducts/BlogProducts'

const Blog = () => {
  const [categories, setCategories] = useState(null)
  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
        const responseCategories = await getCategories()
        setCategories(responseCategories)
      } catch (e) {
        console.log(`Erro with ${e}`)
      }
    }
    fetchSliderImages()
  }, [])
  return (
    <div className={styles.blogMain}>
      <Header />
      <div className={styles.blog}>
        <div className={styles.blogNav}>
          <h3 className={styles.blogHeading}>Blog</h3>
          <h3 className={styles.categoriesHeading}>Categories</h3>
          <ul className={styles.categories}>
            {categories &&
              categories.map((el, index) => (
                <NavLink
                  to={`categories/${el['id']}/products`}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                  key={el['id']}
                >
                  {el['name']}
                </NavLink>
              ))}
          </ul>
        </div>
        <BlogProducts />
      </div>
      <Footer />
    </div>
  )
}

export default Blog
