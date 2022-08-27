import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/users";
import { TailSpin } from  'react-loader-spinner'
import UserItem from "./innerComponents/UserItem";
import Table from 'react-bootstrap/Table';
import Header from './innerComponents/Header'
import Button from "./innerComponents/Button";

export default function HomePage() {
    const { users, isLoading, totalPages } = useSelector((state) => state.users);
    const [ page, setPage ] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers(page));
    },[page, dispatch]);

    return (
        <>
            <Header />
            <div className="container-lg">
                {isLoading ? <TailSpin color = 'green'/> : 
                (
                !users?.length ? <TailSpin color = 'green'/> : (
                    <div>
                        <div className="d-flex justify-content-between">
                            <h2 className="mb-4">Users</h2>
                            <div className="d-flex gap-2">
                                <Button 
                                    page = {page}
                                    setPage = {setPage}
                                    totalPages = {totalPages}
                                    text = "Prev"
                                    incr = {-1}
                                />
                                <Button 
                                    page = {page}
                                    setPage = {setPage}
                                    totalPages = {totalPages}
                                    text = "Next"
                                    incr = {1}
                                />
                            </div>
                        </div>
                        <Table>
                            <tbody>
                                {users.map((user) => (
                                    <UserItem 
                                        key = {user.id} 
                                        user = {user}
                                    />
                                ))}
                            </tbody>
                        </Table>
                    </div>
                )
                )}
            </div>
        </>
    )
}
