"use client"
import { CreateUser } from "@/lib/action";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import axios from "axios";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {
  let r= [2,3,4,5,6,81,2,3]
  let pe=[]
  let p=r[0]
  let j=0
  for(let i =0 ; i<r.length-1 ; i++ ){
for(let j=0 ; j<r.length-i;j++){
if(r[j]< r[j+1]){
r[i] =r[j]
}
}
 }
  console.log(r)
  const [data, setData] =useState<{username :string , email :string}>({
    username :"",
    email:""
  })
   const handleSub = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  await CreateUser(data)
  
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <form onSubmit={handleSub}> 
<input type="text" placeholder="email" onChange={(e) =>{setData({...data , username:e.target.value})}} value={data.username} name="username" />
<input type="text" placeholder="text" onChange={(e) =>{setData({...data , email:e.target.value})}} value={data.email} name="email" />
<button type="submit"> hsd</button>
   </form>
    </main>
  );
}
