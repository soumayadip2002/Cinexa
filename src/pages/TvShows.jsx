import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import TvSlider from '../components/TV/TvSlider'
import TrendingShows from '../components/TV/TrendingShows'
import PopularTv from '../components/TV/PopularTv'
import Footer from '../components/shared/Footer'
import OnAir from '../components/TV/OnAir'
const TvShows = () => {
  return (
    <div>
      <Navbar />
      <TvSlider />
      <TrendingShows />
      <PopularTv />
      <OnAir />
      <Footer />
    </div>
  )
}

export default TvShows
