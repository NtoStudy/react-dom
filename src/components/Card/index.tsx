import './index.css'
import React from "react";

interface Props {
  title?: string,
  children?: React.ReactNode,
  callback?: (val:string) => void

}

// 接受值方法1
// export default function  Card(props:Props){
//   return (
//     <div className='card'>
//       <header>
//         <div>{props.title}</div>
//         <div>副标题</div>
//       </header>
//       <main>
//         内容区域
//       </main>
//       <footer>
//         <button>确认</button>
//         <button>取消</button>
//       </footer>
//     </div>
//   )
// }
// 接受方法值2

// 传值默认值的方法：方法一 直接在括号结构 {title='默认标题'}
//方法2：通过defaultProps通过...展开重新结构
const defaultProps: Partial<Props> = {
  title: '默认标题',
  children: <div>我是默认内容</div>
}


const Card: React.FC<Props> = (props) => {

  window.addEventListener('on-card-to',()=>{
    console.log("收到了收到了")
  })

  const {title, children} = {...defaultProps, ...props}

  return (

    <div className='card'>
      <header>
        <div>{title}</div>
        <div>副标题</div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <button onClick={()=>props.callback && props.callback('我是子组件的参数')}>确认</button>
        <button>取消</button>
      </footer>
    </div>
  )
}
export default Card
