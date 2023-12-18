import Navbar from '../components/Navbar/Navbar'
import React from 'react'
import Slider from '../components/HomePage/Slider'
import TrendWeek from '../components/HomePage/TrendWeek'
import Imdb from '../components/HomePage/Imdb'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <TrendWeek />
      <Imdb />
    </div>
  )
}

export default Home
