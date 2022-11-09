import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Navbar, Spinner } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

import {
    setFiles,
    setLoading,
    selectFiles
} from '../../src/app/reducers/filesSlice';

const NavBar = () => {

    const { loading } = useSelector(selectFiles);
    const dispatch = useDispatch();

    const getData = async () => {
        try {
            dispatch(setLoading(true))
            let res = await fetch('http://localhost:8080/files/data', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let response = await res.json()

            console.log("RESPONSE: ", response)
            dispatch(setFiles(response.filesList))
            dispatch(setLoading(false))
            return response.filesList
        } catch (err) {
            dispatch(setLoading(false))
            alert(err)
        }
    }

    return (
        <div data-testid="navbar-1">
            <Navbar className="fixed-top mb-3" bg="light" variant="light">
                <Container className='font-weight-bold'>
                    <Navbar.Brand href="#home">Data visualizer</Navbar.Brand>
                    <Nav className="me-auto d-flex align-items-center justify-content-center">
                        <Button variant="success" onClick={getData}>Get Data</Button>
                        {loading ? <Spinner className="mx-3" animation="grow" variant="danger" /> : <></>}
                    </Nav>
                </Container>
            </Navbar>


        </div>
    )
}

export default NavBar