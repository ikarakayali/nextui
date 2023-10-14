import React, { useState, useEffect } from 'react';
export default function Page() {
  const [category, setCategory] = useState({ id: 0, name: "" });
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("use effect runs");
    setCategory({ id: 1, name: "food" });
    setInterval(()=>setCounter(prev=>prev+1),1000);
    return ()=>{
    console.log("use effect deconstructs");
      setCategory({ id: 2, name: "wood" })
    }
  }, []);
  return (
    <main>
      <div>
        Test Product Create
        {category.id}
        {category.name}
      </div>
      <div>
        Counter :{counter}
      </div>
    </main>
  )
}
