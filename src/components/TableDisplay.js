import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';
import {
    selectFiles,
    setFiles,
    setLoading
} from '../../src/app/reducers/filesSlice';

const TableDisplay = () => {

    const dispatch = useDispatch()
    const { files } = useSelector(selectFiles);

    const getData = async (name) => {
        try {
            dispatch(setLoading(true))
            let res = await fetch(`http://localhost:8080/files/data?name=${name}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let response = await res.json()

            dispatch(setFiles(response.filesList))
            dispatch(setLoading(false))
            return response.filesList
        } catch (err) {
            dispatch(setLoading(false))
            alert(err)
        }
    }

    return (
        <div data-testid="table-display" >
            <div style={{ height: "70px" }}></div>
            {
                files.map(file => (
                    <Table striped bordered hover>
                        <thead>
                            <Button variant="primary" onClick={() => getData(file.file)}>File name: {file.file}</Button>
                            <tr>
                                <th>Line #</th>
                                <th>text</th>
                                <th>number</th>
                                <th>hex</th>
                            </tr>
                        </thead>
                        {file.lines.map((line, index) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{line.text}</td>
                                    <td>{line.number}</td>
                                    <td>{line.hex}</td>
                                </tr>
                            </tbody>
                        ))}
                        <br />
                    </Table>
                ))
            }

        </div>
    )
}

export default TableDisplay