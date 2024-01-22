import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import styles from './Slider.module.css'

import { Link } from 'react-router-dom'
import { getAll } from '../../utils/products'
import img from '../../images/maisn.jpg'
import img1 from '../../images/maisn.jpg'
import img2 from '../../images/main3.jpg'
const initial = [
  {
    id: 1,
    image: img,
    title: 'ZZarda Saaa',
    price: 100000,
  },
  {
    id: 2,
    image: img1,
    title: 'ZZarda Saaa',
    price: 100000,
  },
  {
    id: 3,
    image: img2,
    title: 'ZZarda Saaa',
    price: 100000,
  },
]
const Slider = () => {
  const [sliderImages, setSliderImages] = useState(initial)
  // useEffect(() => {
  //   const fetchSliderImages = async () => {
  //     try {
  //       const response = await getAll(3)
  //       console.log(response)
  //       setSliderImages(response)
  //     } catch (e) {
  //       console.log(`Erro with ${e}`)
  //     }
  //   }
  //   fetchSliderImages()
  // }, [])
  console.log(sliderImages)
  return (
    <Swiper modules={[Navigation, Pagination]} spaceBetween={10} slidesPerView={1} navigation>
      {sliderImages &&
        sliderImages.map((el, index) => (
          <SwiperSlide key={index}>
            <div className={styles.mainDiv} style={{ backgroundImage: `url(${el['image']})` }}>
              <h1>{el['title']}</h1>
              <div className={styles.price}>{`${el['price']} $`}</div>
              <Link to={`/shop/${el['id']}`} className={styles.btn}>
                View Product
              </Link>
            </div>
          </SwiperSlide>
        ))}
      .
    </Swiper>
  )
}

export default Slider
