import {useBearStore} from "../../store/bearStore.tsx";

const Index = () => {
  const {bears,increase,decrease} =  useBearStore()


  return (
    <div>
      {bears}
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
};

export default Index;
