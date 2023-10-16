"use client"
const Page=()=>{
  function myFun(){
    console.log("hello")
  }
  return(
    <>
      <h1>Test</h1>
      <button onClick={myFun}>click me</button>
      <div onClick={myFun}>
        Temp
      </div>
    </>
  );
};
export default Page