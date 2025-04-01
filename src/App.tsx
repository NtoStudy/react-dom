import './App.css'
import Card from "./components/Card";
import Card2 from "./components/Card2"
import React, {useState} from "react";

function App() {
  // 插值语句 jsx tsx {} 字符串 数字 数组（普通类型）元素 三元表达式 API调用
  // 插值语句支持对象怎么弄 {{name:1}} {name:1} let obj = {name:1} 需要序列化 JSON.stringify
  // 事件如何添加驼峰 onClick 如果需要传参使用高阶函数 如果不需要就直接丢给他函数体
  // 我想支持泛型函数 因为他把<T> 理解成了是一个元素 <div> 纠正泛型<T,>
  // 如何去绑定属性 id class 等等 {} class比较特殊 className
  // 如何绑定多个class
  // 绑定 style {color:'blue'}
  // 添加html代码片段v-html dangerouslySetInnerHTML
  // 如何去遍历数组 v-for map就可以了
  const text = {name: "123"}
  const fn = () => {
    console.log(123)
  }
  const useful = (a: number, event: Event | undefined) => {
    console.log(a, event)
  }
  const state = `<span>12345</span>`
  const date = [1, 2, 3, 4, 5, 6]
  const [value, setValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const testValue = 'dadada'
  const inputRef = React.createRef<HTMLInputElement>()
  const handleInputChange = () => {
    console.log(inputRef.current?.value)
  }

  return (
    <>
      <div className={'logo'}>{JSON.stringify(text)}</div>
      <div onClick={fn}>点击我</div>
      <div onClick={() => useful(123, event)}>传参点击</div>
      <div dangerouslySetInnerHTML={{__html: state}}></div>
      <div>{
        date.map(v => {
          return <div key={v}>{v}</div>
        })
      }</div>
      <Card2/>
      <Card title={'我是大海'}/>
      <button onClick={() => window.onShow()}>调用Message</button>
      {/*通过useState进行获取*/}
      <input value={value} onChange={handleChange} type='text'/>
      <div>{value}</div>
      {/* 通过原生dom进行获取*/}
      <input type="text" defaultValue={testValue} ref={inputRef} onChange={handleInputChange} />

    </>
  )
}

export default App
