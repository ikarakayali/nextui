"use client"
import React, { useState } from 'react';
import Create from './create';
import List from'./list';
import { Button } from 'primereact/button'; 
export default function Page() {
  const [showCreate, setShowCreate] = useState(false);
  return (
    <main>
      <div>
        Test Cat
      </div>
      <div>
        Product List {String(showCreate)}
        <List></List>
      </div>
      <div className="card flex justify-content-center">
            <Button label="Check" icon="pi pi-check" />
        </div>

      {showCreate && <Create/>}
      <button onClick={()=>setShowCreate(!showCreate)}>Create</button>
    </main>
  )
}
