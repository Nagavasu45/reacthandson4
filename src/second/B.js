 import { useContext } from "react";
 import { Store } from "./A";

 function B(){
    const data1=useContext(Store)
    console.log(data1)
    return(  
    <>
    <h1>{data1.data.name + data1.data.id}

    </h1>
    </>
    )
    
 }
  export default B;