import React from "react"
import css from "../styles/gallery.module.css"

const GalleryItem = ({src, alt}) => {
    

    return (
        <div>
            <img className={css.Gallery_img} src={src} alt={alt}></img>
        </div>
    )
}

export default GalleryItem