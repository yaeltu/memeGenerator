import React from 'react'
import './MemeGenerator.css'

class MemeGenerator extends React.Component{
    constructor(){
        super();
        this.state = {
            topText : "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [] 
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response =>{ 
            this.setState(
                {
                    allMemeImgs: response.data.memes}
                )
             }
            )
         }

         handlerChange = (event) =>{
             const {name, value} = event.target
             this.setState({
                 [name] : value
             })

         }

         handleSubmit = (event) =>{
             event.preventDefault();
            const item = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)];
            this.setState({
                    randomImage: item.url
                })
                
                
         }


        
    render(){
        return (
            <div>
                <form className = "meme-form" onSubmit = {this.handleSubmit}>
                    <input
                            type = "text"
                            placeholder = "Top Text"
                            name = "topText"
                            value = {this.state.topText}
                            onChange = {this.handlerChange} />

                    <input
                            type = "text"
                            placeholder = "Bottom Text"
                            name = "bottomText"
                            value = {this.state.bottomText}
                            onChange = {this.handlerChange} />


                    <button> Generate </button> 
                </form>
                <div className = "meme">
                    <img src = {this.state.randomImage} alt = "error" />
                    <h2 className= "top">{this.state.topText}</h2>
                    <h2 className = "bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}

export default MemeGenerator