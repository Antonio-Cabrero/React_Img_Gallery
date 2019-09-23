import React, {Component} from "react"
import GalleryItem from "./GalleryItem.js"
import css from "../styles/gallery.module.css"

class Gallery extends Component {

   constructor() {
       super()
       this.state = {
           pictures: [],
       }
   }
   componentDidMount() {
    fetch("https://pixabay.com/api/?key=13689151-3e9314f1cf76c7d3c04ffec4e&q=people&image_type=photo&per_page=50")
    .then(res => {
        return res.json()
    }).then(data => {
        let pictures = data.hits.map((img) => {
            return (
                <GalleryItem src={img.largeImageURL} width={img.imageWidth} height={img.imageHeight}/>
            )
        })
        this.setState({pictures: pictures})
    })
}


   render() {
    return (
        <div className={css.Gallery__container}> 
            {this.state.pictures}
        </div>
    )}
}

export default Gallery