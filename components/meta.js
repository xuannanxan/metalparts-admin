/*
 * @Description: 
 * @Author: Xuannan
 * @Date: 2019-11-30 18:41:07
 * @LastEditTime: 2019-11-30 19:09:07
 * @LastEditors: Xuannan
 */
import Head from 'next/head'

const Meta = ({meta})=>{
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <meta name="keywords" content={meta.keywords}/>
            </Head>
        </>
    )
}

export default Meta
