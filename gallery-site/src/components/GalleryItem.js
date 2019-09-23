import React from "react"
import css from "../styles/gallery.module.css"


const GalleryItem = ({src, alt, width, height}) => {

    const imgOrientation = () => {

       if (width > height) {
           if (width < height) {
               return css.Portriat
           }
           return css.Landscape
       } 
       return css.Square
    }
    

    return (
        <div className={imgOrientation()}>
            <img className={css.Gallery__img} src={src} alt={alt}></img>
        </div>
    )
}

export default GalleryItem