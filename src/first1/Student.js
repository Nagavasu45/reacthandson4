import React, {useState} from "react"
import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"
function Student(){
    const [data]=useState([ {name : "John", age : 26, course : "MERN", batch : "October"},
    {name : "Doe", age : 25, course : "MERN", batch : "November"},
    {name : "Biden", age : 26, course : "MERN", batch : "September"},
    {name : "Barar", age : 22, course : "MERN", batch : "September"},
    {name : "Christ", age : 23, course : "MERN", batch : "October"},
    {name : "Elent", age : 24, course : "MERN", batch : "November"},
    {name : "Harshita Sharma", age : 24, course : "MERN", batch : "October"}])
    return(
        <>
        <div className="four"><h1>Welcome to student page</h1>
        <button className="five">Add New Student</button></div>
        
            <table  className="three" >
            <thead>
                
                <tr>
                
                    <td>
                        Name:
                    </td>
                    <td>
                        Age:
                    </td>
                    <td>
                        Course:
                    </td>
                    <td>
                        Bacth:
                    </td>
                    <td>Change:</td>
                    
                
                </tr>
                </thead>
            {
            data.map((item,index)=>{
                return(
                    // <div key={index}>
                    //     <Link to={'/User/'+item.id}><h4>{item.name}</h4></Link>

                    // </div>
                    <tr>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.age}
                        </td>
                        <td>
                            {item.course}
                        </td>
                        <td>
                            {item.batch}
                        </td>
                        <td><Link>Edit</Link></td>
                    </tr>
                )
            })
        }
            </table>

        
        
        </>
    )
}
export default Student