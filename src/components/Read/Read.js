import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Table,
    Button,
} from 'semantic-ui-react'

function Read() {

    const [APIData, setAPIData] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                setAPIData(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the data!', error);
            })
    }, [apiUrl])

    const setData = (data) => {
        // console.log(data);
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('CheckBox Value', checkbox);
    }

    const getData = () => {
        axios.get(apiUrl)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }

    const onDelete = (id) => {
        axios.delete(`${apiUrl}/${id}`)
        .then(() => {
            getData();
        })
    }


    return (
        <div>
            <Table singleLine>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>First Name</TableHeaderCell>
                        <TableHeaderCell>Last Name</TableHeaderCell>
                        <TableHeaderCell>Checked</TableHeaderCell>
                        <TableHeaderCell>更新</TableHeaderCell>
                        <TableHeaderCell>削除</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {APIData.map((data) => {
                        return (
                            <TableRow>
                                <TableCell>{data.firstName}</TableCell>
                                <TableCell>{data.lastName}</TableCell>
                                <TableCell>{data.checkbox ? 'Checked' : 'Unchecked'}</TableCell>
                                <Link to='/update'>
                                    <TableCell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </TableCell>
                                </Link>
                                    <TableCell>
                                        <Button onClick={() => onDelete(data.id)}>削除</Button>
                                    </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Read