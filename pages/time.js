/*
 * @Description: 
 * @Author: Xuannan
 * @Date: 2019-11-30 17:52:52
 * @LastEditTime: 2019-11-30 18:28:12
 * @LastEditors: Xuannan
 */
import React,{useState} from 'react'
import dynamic from 'next/dynamic'
const Btn = dynamic(import('../components/btn'))

const Time = () =>{
    const [nowTime,setTime] = useState(Date.now())
    const changeTime = async () =>{
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }
    return (
        <>
            <div>显示的时间为：{nowTime}</div>
            <Btn>1212</Btn>
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}

export default Time