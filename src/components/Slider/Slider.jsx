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

const Slider = () => {
  const [sliderImages, setSliderImages] = useState(null)
  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
        const response = await getAll(3)

        setSliderImages(response)
      } catch (e) {
        console.log(`Erro with ${e}`)
      }
    }
    fetchSliderImages()
  }, [])

  return (
    <Swiper modules={[Navigation, Pagination]} spaceBetween={10} slidesPerView={1} navigation>
      {sliderImages &&
        sliderImages.map((el, index) => (
          <SwiperSlide key={index}>
            <div className={styles.mainDiv} style={{ backgroundImage: `url(${el['image']})` }}>
              <h1>Gold big hoops</h1>
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
