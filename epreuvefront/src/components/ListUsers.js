import React, { useState, useEffect } from "react";
import User from "./User";


export default function ListUsers() {
        
    const [backend1, setBackend1] = useState([{}])
    
    const [backend2, setBackend2] = useState([{}])

    const page =1;

    function tournerPage(nbPage){
        if (nbPage===1){
            nbpage++;
        }else{
            nbPage--;
        }
    }


    useEffect(() => {
        fetch("/api/users?page=1").then(
        response => response.json()
        ).then(
        data => {
            setBackend1(data)
            
        }
        )
    }, 
    []);

    useEffect(() => {
        fetch("/api/users?page=2").then(
        response => response.json()
        ).then(
        data => {
            setBackend2(data)
            
        }
        )
    }, 
    []);

    console.log(backend);

    return (
        <div>
            {(page === 1) ? (
   
            {(typeof backend1.data === 'undefined') ? (
                <p>Loading ...</p>
            ): (
                <table>
                <tr>
                    <th> id </th>
                    <th> titre </th>
                    <th> description </th>
                    <th> etat </th>
                </tr>
                {backend1.data.map((user, i) => {
                return (
                    <p key={i}>
                        <User id={user.id} email={user.email} first_name={user.first_name} last_name={user.last_name} avatar={user.avatar}/>
                    </p>
                
                )}
                )}
                <button onClick={tournerPage(page)}> Page Suivante</button>
                </table>
                
            )}
            ):(
                {(typeof backend1.data === 'undefined') ? (
                <p>Loading ...</p>
                ): (
                <table>
                <tr>
                    <th> id </th>
                    <th> titre </th>
                    <th> description </th>
                    <th> etat </th>
                </tr>
                {backend1.data.map((user, i) => {
                return (
                    <p key={i}>
                        <User id={user.id} email={user.email} first_name={user.first_name} last_name={user.last_name} avatar={user.avatar}/>
                    </p>
                
                )}
                )}
                <button onClick={tournerPage(page)}> Page Suivante</button>
                </table>
                
            )}
            )
            }
    </div>
    )
}