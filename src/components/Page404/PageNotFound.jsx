import React from 'react'
import styles from './PageNotFound.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className={styles.nopage}>
        <h1>404 ERROR</h1>
        <p>This page not found back to home and start again</p>
        <Link className={styles.homepagelink} to="/">
          Go to homepage
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default PageNotFound
