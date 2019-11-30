import Link from "next/link";
import {withRouter} from "next/router"
import axios from "axios"

const admin = ({router,list}) =>{
    return (
        <div>
            <div>admin page</div>
            <p>{router.query.id}</p>
            <p>{list}</p>
            <Link href='/'><a>retun index</a></Link>
        </div>
    )
}

admin.getInitialProps = async () =>{
    const promise = new Promise((resolve)=>{
        axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(
            (res)=>{
                console.log('远程数据结果：',res)
                resolve(res.data.data)
            }
        )
    })
    return await promise
}
export default withRouter(admin)