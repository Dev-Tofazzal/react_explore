export default function Todo({learn,isDo}){
  
    if(isDo){
        return(
             <li>Finished: {learn}</li>
        )
    }
    return <li>Have to learn: {learn}</li>
}

