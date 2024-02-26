import { useState } from "react"

const question =[
    {
        id :1,
        questions :"pourquoi j'a arrive pas a maigraire",
        correct:true
    },
    {
        id:2,
        questions :"pourquoi je suis fatigue ",
        correct:false    
    },
    {
         id:3,
        questions :"pourquoi je suis fatigue ",
        correct:false
    },
    {
        id:4,
       questions :"pourquoi",
       correct:false
    }
]

export  const QuizApp =()=>{
    const [id ,setId] =useState(0)
    const [correct , setCorrect]=useState(true) 
    return(
  <div className=" flex flex-col">
<p>

{
    question[id].questions
}
</p>

<button onClick={()=>question[id].correct === true ? setId(pre=> pre+1) : "notCorrect"}>add</button>

  </div>
    )
}
