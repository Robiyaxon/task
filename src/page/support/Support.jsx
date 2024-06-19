import React from 'react'
import style from "./Support.module.css"
import img from "../../assest/support.png"
const Support = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.text}>
                <p >Alwalys online</p>
                <h1 >Real-time support with cloud</h1>
                <h2>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</h2>
                <a href="">Learn more →</a>
            </div>
            <div className={style.img}>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Support