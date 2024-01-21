import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import inputIMg from '../../logos/Input.svg'
import instagram from '../../logos/instagram.svg'
import facebook from '../../logos/facebook.svg'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.links}>
          <Link to="/contact">contact</Link>
          <Link to="/terms">Terms of services</Link>
          <Link to="/shiping-and-returns">Shiping and returns</Link>
        </div>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Give an email, get the newsletter." />
          <button className={styles.inputBtn}>
            <img src={inputIMg} alt="inputimg" />
          </button>
        </div>
      </div>
      <div className={styles.social}>
        <span>&copy; MOAH</span>

        <div className={styles.socialLogos}>
          <Link to="https://facebook/" target="_blank">
            <img src={facebook} alt="facebook" />
          </Link>
          <Link to="https://www.instagram.com/moah_jewel/" target="_blank">
            <img src={instagram} alt="instagram" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
