import React from 'react'
import img1 from '../../assest/Wrapper__cards__block_1.png'

import style from "./Plan.module.css"

const Plan = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Wrapper__title}>
                <h1>The Product we work with.</h1>
                <p>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.</p>
            </div>
            <div className={style.Wrapper__cards}>
                <div className={style.Wrapper__cards__block}>
                    <img src={img1} alt="" />
                    <h1>Cross platform</h1>
                    <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                    <b>➡️</b>
                </div>
                <div className={style.Wrapper__cards__block}>
                    <img src={img1} alt="" />
                    <h1>Cross platform</h1>
                    <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                    <b>➡️</b>

                </div>
                <div className={style.Wrapper__cards__block}>
                    <img src={img1} alt="" />
                    <h1>Cross platform</h1>
                    <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                    <b>➡️</b>

                </div>
            </div>
        </div>
    )
}

export default Plan