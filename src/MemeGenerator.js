import React,{Component} from 'react'
import './main.css'
class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:'',
            bottomText:'',
            initialImg:'http://i.imgflip.com/1bij.jpg',
            randomImg:[]
        }
this.HandleChange=this.HandleChange.bind(this)
this.HandleSubmit=this.HandleSubmit.bind(this)

}


componentDidMount(){
    fetch('https://api.imgflip.com/get_memes')
    .then(response=>response.json())
    .then(response=>{
        const {memes}=response.data
        this.setState({
            randomImg:memes
        })
    })
}

HandleChange(event){
    const {name,value}=event.target
    this.setState({
        [name]:value
    })
}


HandleSubmit(event){
event.preventDefault()
    const randNum=Math.floor(Math.random()*this.state.randomImg.length)
    const randmeme=this.state.randomImg[randNum].url
    this.setState({
        initialImg:randmeme
    })

}


    render(){
       
        return(<div className='meme'>
         <div className='meme-style'>
           <img src={this.state.initialImg} alt='meme'/>
            <h2 className='meme-top'>{this.state.topText}</h2>
            <h2 className='meme-bottom'>{this.state.bottomText}</h2>
           </div>
        <form onSubmit={this.HandleSubmit} className='form-style'>
<input type='text' name='topText' value={this.state.topText} placeholder='Top Text' onChange={this.HandleChange}/>
<input type='text' name='bottomText' value={this.state.bottomText} placeholder='Bottom Text' onChange={this.HandleChange}/>
<button>Generate</button>
        </form>
        </div>)
    }
}

export default MemeGenerator