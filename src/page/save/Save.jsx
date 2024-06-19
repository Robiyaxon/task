import React from 'react'
import style from "../support/Support.module.css"
import img from "../../assest/save.png"
const Save = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.img}>
                <img src={img} alt="" />
            </div>
            <div className={style.text}>
                <p >Alwalys online</p>
                <h1 >Save cost for you and family</h1>
                <h2>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</h2>
                <a href="">Learn more →</a>
            </div>
        </div>
    )
}

export default Save