import styles from './App.module.css'
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Items from './components/Items/Items'

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Items />
      <Footer />
    </div>
  )
}

export default App
