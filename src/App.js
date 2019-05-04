import React from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import Footer from './Footer'
import './main.css'
function App(){
return(<div className='container'>
    <Header/>
    <MemeGenerator/>
    <Footer/>
</div>)
}

export default App