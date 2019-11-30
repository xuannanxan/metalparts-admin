import Link from "next/link";
import {useState} from 'react'
const config = ()=>{
    const [color,setColor] = useState('blue')
    const changeColor = ()=>{
        setColor(color=='blue'?'red':'blue')
    }

    return (
        <div>
            <div>config page</div>
            <div>
                <button onClick={changeColor}>点击改变颜色</button>
            </div>
            <Link href='/'><a>retun index</a></Link>
    
            <style jsx>
                {`
                div{
                    color:${color};
                }
                `}
            </style>
        </div>
    )

}
 
export default config