import React from 'react'
import style from "./Header.module.css"
import { Col, Row } from 'antd';
import { Button } from 'antd';
import img from "../../assest/peopleheader.png"
const Header = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.title} >
                <h1>Track your Expenses & Save Money
                </h1>
                <p>  Helps you to organize your income and expenses</p>
                <div className={style.button}>
                    <div>
                        <Button type="primary" danger> Try free demo
                        </Button></div>
                    <div>
                        <h2>— Web, iOS and Android</h2>
                    </div>
                </div>
            </div>
            <div className={style.img}>
            <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Header