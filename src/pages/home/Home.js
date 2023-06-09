import React from "react";
import Widget from "../../components/widget/Widget";
import { useStateContext } from "../../context";



export default function Home() {
  const { login } = useStateContext();

 


  return (
    <div className="widgets block md:flex me-10 pt-4">      
      {login === 2 && <>     
      <Widget type='users' url='/users/' text='משתמשים'/>
      <Widget type='projects' url='/projects/' text='פרוייקטים'/>
      <Widget type='comments' url='/comments/' text='תגובות'/>  
      </>} 
      {login === 3 && 
     

      <div className="text-black border-2"><h1>הפרויקט שלי </h1></div>  
      
      }    
    </div>
  )
}