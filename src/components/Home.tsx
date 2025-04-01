import React from 'react'
import Header from './web/layout/Header'
import Main from './web/layout/Main'
import About from './web/layout/About'
import CardList from './web/layout/CardsList'
import Iframe from './web/iframe/Iframe'
import Messege from './web/layout/Messege'
import RodapeFister from './web/layout/RodapeFirst'
import Experiencia from './web/layout/Experiencia'



const Home: React.FC = () => {
   return (
      <div >
         <Header />
         <Main />
         <About />
         <Experiencia />
         <CardList />
         <Messege />
         <Iframe />
         <RodapeFister />
      </div>



   )
}

export default Home