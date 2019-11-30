<!--
 * @Description: 
 * @Author: Xuannan
 * @Date: 2019-11-30 09:26:54
 * @LastEditTime: 2019-11-30 19:36:38
 * @LastEditors: Xuannan
 -->
# metalparts-admin
a react admin
# 安装
$ npx create-next-app metalparts-admin
# 启动
$ yarn dev

# Link
import Link from "next/link";
<Link href='/'><a>必须包含a标签</a></Link> 

# 传参数
url + ? +id=''

# 接受参数
import {withRouter} from "next/router"

# 路由事件 钩子函数
routeChangeStart(url) - 路由开始切换时触发
routeChangeComplete(url) - 完成路由切换时触发
routeChangeError(err, url) - 路由切换报错时触发
beforeHistoryChange(url) - 浏览器 history 模式开始切换时触发
hashChangeStart(url) - 开始切换 hash 值但是没有切换页面路由时触发
hashChangeComplete(url) - 完成切换 hash 值但是没有切换页面路由时触发

# axios
yarn add axios
# moment
npm install --save moment

# 懒加载 外部库
const changeTime = async () =>{
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }

# 懒加载 自定义组件
import dynamic from 'next/dynamic'
const Btn = dynamic(import('../components/btn'))


# Next.js支持CSS文件
yarn add @zeit/next-css
建立一个next.config.js
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})


# 安装Ant Design库
yarn add antd


# 按需加载antd 安装和配置babel-plugin-import 插件
yarn add babel-plugin-import

建立.babelrc文件

{
    "presets":["next/babel"],  //Next.js的总配置文件，相当于继承了它本身的所有配置
    "plugins":[     //增加新的插件，这个插件就是让antd可以按需引入，包括CSS
        [
            "import",
            {
                "libraryName":"antd",
                "style":"css"
            }
        ]
    ]
}