import Navbar from '../components/Navbar/Navbar'
import React from 'react'
import Slider from '../components/HomePage/Slider'
import TrendWeek from '../components/HomePage/TrendWeek'
import Rating from '../components/shared/Rating'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <TrendWeek />
      {/* <Rating value={4.5*10} /> */}
    </div>
  )
}

export default Home
