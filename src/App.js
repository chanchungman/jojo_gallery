import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './page/home';
import Home_Sample from './page/home-sample';
import About from './page/about';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => (
    <BrowserRouter>
    
        <Header />


                <Home/>
                {/* <Route path ="/hs" exact element ={<Home_Sample />} />
                <Route path ="/about" exact element ={<About />} /> */}
                {/* <Route path ="video/:id" element ={<VideoDetail />} />
                <Route path ="channel/:id" element ={<ChannelDetail />} />
                <Route path ="search/:searchTerm" element ={<SearchlDetail />} /> */}

        <Footer />
        
    </BrowserRouter>
)

export default App