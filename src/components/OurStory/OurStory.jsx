import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './OurStory.module.css'
import pic from './maisn.jpg'
const OurStory = () => {
  return (
    <>
      <Header />
      <div className={styles.ourStory}>
        <h1>About</h1>
        <h3>Who we are and why we do what we do!</h3>
        <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.{' '}
        </p>
        <h2>Top trends</h2>
        <div className={styles.imgBox}></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.{' '}
        </p>
        <ul>
          <li> consectetur adipiscing elit. Aliquam placerat</li>
          <li> Lorem ipsum dolor sit amet consectetur </li>
        </ul>
        <h2>Produced with care</h2>
        <div className={styles.imgBox}></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie diam bibendu.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default OurStory
