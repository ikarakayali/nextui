import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
export default function Page() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData= async()=>{
      let response = await ProductService.getProductsMini();
      console.log(response);
      setProducts(response);
    }
    fetchData()
    
    //ProductService.getProductsMini().then(data => console.log(data));
    return () => {
      console.log("use effect deconstructs");
    }
  }, []);
  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  )
}
