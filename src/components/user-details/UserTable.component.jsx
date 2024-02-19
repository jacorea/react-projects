import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './UserTable.styles.css'

const UserTable= () => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resp => {
                setUsers(resp.data);
            })
            .catch(err => {
                console.error('Error fetching user data: ', err)
            });
    }, []);

    return (
        <div style={{textAlign: 'center'}}>
            <h1>User Details Table</h1>
            <table style={{ borderCollapse: 'collapse', margin: 'auto', width: '60%', border: '1px solid #ddd'}}>
                <thead>
                    <tr style={{border: '1px solid #ddd', backgroundColor: 'black', color: 'white' }}>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length && users.map((item)=> (
                        <tr key= {item.id} style={{ border: '1px solid #ddd', backgroundColor: 'gray', color: 'white' }}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;