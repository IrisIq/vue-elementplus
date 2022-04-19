import axios,{AxiosRequestConfig,AxiosResponse} from 'axios'
import {ElLoading} from 'element-plus';

let loading:any;

const starLoading=()=>{
  const options = {lock:true,text:'加载中',bacground:'rgba(0,0,0,0.7'}
  loading=ElLoading.service(options)
}

const endLoading = ()=>{
  loading.close()
}

//请求拦截
axios.interceptors.request.use((config :AxiosRequestConfig)=> {
  //加载
  starLoading()
  return config
})

//响应拦截
axios.interceptors.response.use((response: AxiosResponse) => {
  endLoading()
  return response
},error => {
  endLoading()
  return Promise.reject(error)
})

export default axios
