import React from 'react'
import style from "../support/Support.module.css"
import img from "../../assest/anytime.png"
const Anytime = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.text}>
                <p >Use anytime</p>
                <h1 >Use anytime when you need</h1>
                <h2>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</h2>
                <a href=".#">Learn more →</a>
            </div>
            <div className={style.img}>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Anytime