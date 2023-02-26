import React from "react"
import { Item } from "../item";
import './Lista.css'




export const List = ({items=[]}) => {
    console.log(items)
    const todos = items.map((item) => {
        return (
          <Item key={item.id} item={item} />
         
        )
    
      });
   
    return (
        <div className="lista">
            <div>
            <h1>Lista de Usuários</h1>
            <ul>        
                 {todos}  
            </ul>
            </div>
            

        </div>
    )



}