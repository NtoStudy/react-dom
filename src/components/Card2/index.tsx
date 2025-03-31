import './index.css'
import React from "react";

interface Props {
  title?: string,
  children?: React.ReactNode,
  callback?: (val:string) => void

}

const defaultProps: Partial<Props> = {
  title: '默认标题',
  children: <div>我是默认内容</div>
}

const e = new Event('on-card-to')

const clickTab = ()=>{
  window.dispatchEvent(e)
}

const Card: React.FC<Props> = (props) => {
  const {title, children} = {...defaultProps, ...props}
  console.log(props.children)
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
        <button onClick={clickTab}>确认</button>
        <button>取消</button>
      </footer>
    </div>
  )
}
export default Card
