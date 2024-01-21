import React, { useEffect, useState } from 'react'
import { getSingleCategoriesProducts } from '../../../utils/products'
import { useParams } from 'react-router-dom'
import BlogOneProduct from '../BlogOneProduct/BlogOneProduct'
import styles from './BlogProducts.module.css'
const BlogProducts = () => {
  const params = useParams()
  const [categoryProducts, setcategoryProducts] = useState(null)
  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await getSingleCategoriesProducts(params.id)

        setcategoryProducts(Object.values(response))
      } catch (e) {
        console.log(`Erro with ${e}`)
      }
    }

    fetchCategoryProducts()
  }, [params.id])

  return (
    <div className={styles.blogProducts}>
      {categoryProducts &&
        categoryProducts.slice(0, 4).map((el, index, array) => {
          return (
            <BlogOneProduct
              size={array.length}
              images={el['images']}
              title={el['title']}
              description={el['description']}
              date={el['updatedAt']}
              key={index}
            />
          )
        })}
    </div>
  )
}

export default BlogProducts
