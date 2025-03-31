import {useState} from "react";

const UseStateTest = () => {
  const [str, setStr] = useState('test') // 基本数据类型
  const [arr, setArr] = useState(['小','中','大']) // 数组等复杂
  const [obj, setObj] = useState(()=>{
    const date = new Date().getFullYear()+'-'+new Date().getMonth()+'-'+new Date().getDate()
    return {
      name:'笑嘻嘻',
      age:18,
      date:date
    }
  })

  const handleClick = () => {
    setStr('test2')
  }
  const handleArr = ()=>{
    setArr([...arr,'老'])
  }
  const handleObj = ()=>{
    // setObj({
    //   ...obj,
    //   name:'dadada'
    // })
    setObj(Object.assign({},obj,{name:'dadada',age:'10'}))
  }
  return (
    <div>
      <div>
        <span>{str}</span>
        <button onClick={handleClick}>更改值</button>
      </div>
      <div>
        <span>{arr}</span>
        <button onClick={handleArr}>修改数组</button>
      </div>
      <div>
        <p>{obj.name}</p>
        <p>{obj.age}</p>
        <p>{obj.date}</p>
        <button onClick={handleObj}>修改数组</button>
      </div>

    </div>
  );
};

export default UseStateTest;
