import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserItem({ user }) {
    const navigate = useNavigate();

    const openUserItem = () => {
        navigate(`/users/${user.id}`)
    }

    return (
        <tr onClick = {openUserItem}>
            <td className='d-none d-sm-table-cell'>{user.id}</td>
            <td><img src={user.avatar} alt={user.first_name} /></td>
            <td className='d-none d-sm-table-cell'>{user.first_name + " " + user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    )
}
