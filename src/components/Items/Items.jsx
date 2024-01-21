import React from 'react'
import styles from './Items.module.css'
import Item from '../Item/Item'
import { getAll } from '../../utils/products'

const INITIAL_ITEMS = await getAll(5)
const Items = () => {
  return (
    <div className={styles.itemsMain}>
      <div className={styles.itemsNav}>
        <h1>Shop The Latest</h1>
        <button>View All</button>
      </div>
      <div className={styles.items}>
        {INITIAL_ITEMS.map((el, index) => (
          <Item
            key={index}
            id={el.id}
            img={el.image}
            label={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Items
