// export default function Todo({learn,isDo}){
  
//     if(isDo){
//         return(
//              <li>Finished: {learn}</li>
//         )
//     }
//     return <li>Have to learn: {learn}</li>
// }


//option: ternary condition 
// export default function Todo({learn,isDo}){
//     return(
//         <li>{isDo?"finished" : "work on"} : {learn}</li>
//     )
// }


//condition && operator use
// export default function Todo({learn,isDo}){
//     return(
//         <li>{learn} : {isDo && "Already Done"}</li>
//     )
// }

//condition || operator use
// export default function Todo({learn,isDo}){
//     return(
//         <li>{learn} : {isDo || "Have to learn"}</li>
//     )
// }

// variable set rendering 

export default function Todo({learn,isDo}){
    let listItem;
   
    if(isDo){
       listItem =  <li>finished : {learn}</li>
    }
    else{
       listItem =  <li>Have to learn: {learn}</li>
    }

    return listItem;
       
    
}



