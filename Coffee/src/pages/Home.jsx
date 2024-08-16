import React from 'react'
import Header from '../assets/Components/Header'
import Banner from '../assets/Components/Banner'
import TopPicks from '../assets/Components/TopPicks'
import Menu from '../assets/Components/Menu'


const Home = () => {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <TopPicks></TopPicks>
        <Menu></Menu>
    </div>
  )
}

export default Home