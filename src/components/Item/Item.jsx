import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ price, label, img, id }) => {
  return (
    <Link to={`shop/${id}`} className={styles.item}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      {/* <img src={img} alt={label} /> */}
      <div className={styles.label}>{label}</div>
      <div className={styles.price}>{`$ ${price}`}</div>
    </Link>
  )
}

export default Item
