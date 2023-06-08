import Restaurants from "./Restaurants/Restaurants";
function App() {
  // const arr= [40, 100, 1, 5, 25, 10];
  // const sort=arr.sort((a,b)=>{
  //   debugger
  //   return a-b
  //   console.log("arr:::",arr)
  // })
  // console.log("sort:=------",arr.sort((a,b)=>a-b))
  return (
    <div>
      <header>
        <Restaurants/>
      </header>
    </div>
  );
}

export default App;
