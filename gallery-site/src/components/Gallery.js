import React from "react"
import GalleryItem from "./GalleryItem"
import css from "../styles/gallery.module.css"


const Gallery = () => {

    return (
        <div ckassName={css.Gallery_container}>
            {GalleryItem}
        </div>
    )
}

export default Gallery