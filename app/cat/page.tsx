"use client"
import React, { useState } from 'react';
import Create from './create';
import { Button } from 'primereact/button'; 
export default function Page() {
  const [showCreate, setShowCreate] = useState(false);
  return (
    <main>
      <div>
        Test Cat
      </div>
      <div>
        Category List {String(showCreate)}
      </div>
      <div className="card flex justify-content-center">
            <Button label="Check" icon="pi pi-check" />
        </div>

      {showCreate && <Create/>}
      <button onClick={()=>setShowCreate(!showCreate)}>Create</button>
    </main>
  )
}
