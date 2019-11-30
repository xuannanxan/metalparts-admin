/*
 * @Description: 
 * @Author: Xuannan
 * @Date: 2019-11-30 19:34:47
 * @LastEditTime: 2019-11-30 19:35:06
 * @LastEditors: Xuannan
 */
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})