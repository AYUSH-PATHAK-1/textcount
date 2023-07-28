import React, { useState } from 'react'

function App() {
  const [textdata,setTextdata]=useState("");
  const [predata,setPredata]=useState("");
  const cleardata=()=>{
    setTextdata("");
  }
  const handleData=(e)=>{
    setTextdata(e.target.value);
  }
  const previewdata=()=>{
    setPredata(textdata);
  }
  return (
    <>
    <div className="container my-5">
      <textarea cols="30" rows="10" className="w-100" onChange={handleData} value={textdata}>{textdata}</textarea>
      <button className="btn btn-dark my-3" onClick={cleardata}>Clear Data</button>
      <p>{predata}</p>
      <button className="btn btn-success" onClick={previewdata}>Preview Data</button>
      <p className="text-center text-danger">{textdata.length} characters are present inside</p>
      <p className="text-center text-success">{textdata.split(" ").length} words are present inside</p>
    </div>
    
    </>
  )
}

export default App