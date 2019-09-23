import React from "react"
import css from "../styles/gallery.module.css"


const GalleryItem = ({src, alt, width, height}) => {

    const imgOrientation = () => {

       if (width/height >= 1.1) {
           return css.Landscape
    } else if (height/width >= 1.1) {   
           return css.Portrait }
        return css.Square
    }
    

    return (
        <div className={imgOrientation()}>
            <img className={css.Gallery__img} src={src} alt={alt}></img>
        </div>
    )
}

export default GalleryItem