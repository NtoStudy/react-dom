import ReactDom, {createRoot} from 'react-dom/client'
import './index.css'
const Message = () => {
  return (
    <div >
      提示组件
    </div>
  )
}
interface Items {
  messageContainer: HTMLDivElement
  root: ReactDom.Root
}

//声明扩充
declare global {
  interface Window {
    onShow: () => void
  }
}
const queue: Items[] = []
window.onShow = () => {
  const messageContainer = document.createElement('div')
  messageContainer.className = 'message'
  messageContainer.style.top = `${queue.length * 50}px`
  //挂载到body上面
  document.body.appendChild(messageContainer)
  // 容器关联message组件
  const root = createRoot(messageContainer)
  root.render(<Message />) //渲染组件
  queue.push({
    messageContainer,
    root
  })
  //2秒后移除
  setTimeout(() => {
    const item = queue.find(item => item.messageContainer === messageContainer)!
    item.root.unmount() //卸载
    document.body.removeChild(item.messageContainer)
    queue.splice(queue.indexOf(item), 1)
  }, 2000)
}



export default Message
