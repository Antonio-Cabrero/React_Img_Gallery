import React from "react"
import GalleryItem from "./GalleryItem.js"
import css from "../styles/gallery.module.css"


let arrOb = {}

    fetch("https://pixabay.com/api/?key=13689151-3e9314f1cf76c7d3c04ffec4e&q=yellow+flowers&image_type=photo")
    .then(res => res.json())
    .then(data => arrOb = data.hits)

const Gallery = () => {

   const galleryItems = 
        arrOb.map(img => 
            (<GalleryItem src={img.largeImageURL} /> )
            )

    return (
        <div className={css.Gallery__container}>
            {galleryItems}
        </div>
    )
}

export default Gallery