import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { getOne } from '../../utils/products'
import { useParams } from 'react-router-dom'

const Shop = () => {
  // let { id } = useParams()

  // const [data, setData] = useState(null)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getOne(id)

  //       setData(result)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   fetchData()
  // }, [id])
  return (
    <>
      <Header />
    </>
  )
}

export default Shop
