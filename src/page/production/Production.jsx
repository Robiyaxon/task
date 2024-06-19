import React from 'react'
import product from "../../assest/product.png"
import style from "./Product.module.css"
import img1 from "../../assest/facebook.png"
import img2 from "../../assest/google.png"
import img3 from "../../assest/image 3.png"
import img4 from "../../assest/Image 5.png"
import img5 from "../../assest/image 4.png"
const Production = () => {
  return (
    <div className={style.Wrapper}>
      <img className={style.product_image} src={product} alt="" />
      <div className={style.popular_logo}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>
    </div>
  )
}

export default Production