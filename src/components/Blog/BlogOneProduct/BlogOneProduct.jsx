import React from 'react'
import styles from './BlogOneProduct.module.css'
import { Link } from 'react-router-dom'
const BlogOneProduct = ({ images, description, title, date }) => {
  return (
    <Link className={styles.blogItem}>
      <img className={styles.image} src={images[0]} alt={title} />
      <span className={styles.date}>{date}</span>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.description}>{description}</span>
    </Link>
  )
}

export default BlogOneProduct
