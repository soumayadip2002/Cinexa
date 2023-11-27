import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import TvSlider from '../components/TV/TvSlider'
import TrendingShows from '../components/TV/TrendingShows'
const TvShows = () => {
  return (
    <div>
      <Navbar />
      <TvSlider />
      <TrendingShows />
    </div>
  )
}

export default TvShows
