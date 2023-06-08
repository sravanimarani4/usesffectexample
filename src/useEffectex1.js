import React,{useState,useEffect} from "react";

function UseEffectEx1() {
  const [count,setCount] = useState(0);
  const [pageWidth,setPageWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   console.log("i am coming from useEffect function",count);
  //   setPageWidth(window.innerWidth);
  //   // setPageWidth(pageWidth);
  // });

  useEffect(() => {

    // window.addEventListner("resize",() => {
    //   setPageWidth(window.innerWidth);
    // })
    // aboveone and resize handler is different aboveone is rendering the windowsize evrytime so we need to remove that conflict to crate the
    // bellow function.
    const resizeHandler = () =>{
      setPageWidth(window.innerWidth);
      // setPageWidth(pageWidth);
    } 
    window.addEventListener("resize",resizeHandler);
    console.log("i am adding the windowsize",count);

    return () => {
      console.log("i am removing");
      window.removeEventListener("resize",resizeHandler);
    }
  })

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{pageWidth}</h1>
      <button onClick={() => {
        setCount(count+1);
      }}>+</button>
    </div>
  );
}

export default UseEffectEx1;
