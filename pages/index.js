/*
 * @Description: 
 * @Author: Xuannan
 * @Date: 2019-11-30 11:23:57
 * @LastEditTime: 2019-11-30 19:41:19
 * @LastEditors: Xuannan
 */
/*
 * @Description: 
 * @Author: Xuannan
 * @Date: 2019-11-30 11:23:57
 * @LastEditTime: 2019-11-30 13:23:26
 * @LastEditors: Xuannan
 */
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import {Button} from 'antd'


const home = () =>{
  const handleRouteChange = url => {
    console.log('App is changing to: ', url)
  }
   
  Router.events.on('routeChangeStart', handleRouteChange)
  
  function goto(page){
    Router.push({
      pathname:page,
      query:{
        id:'asdasdasd11'
      }
    })
  }
  return (
    <div>
      <div>首页</div>
      <Link href='/admin?id="abdss"'><a>管理页面</a></Link>
      <br/><Link href='/config'><a>配置页面</a></Link>
      <br/><Link href='/time'><a>改变时间格式</a></Link>
      <div>
        <Button onClick={()=>{goto('/admin')}}>管理页面</Button>
      </div>
    </div>
  )
}

export default home