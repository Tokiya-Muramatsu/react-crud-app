import React, { useEffect, useState } from 'react';
import './update.scss';
import { Button, Checkbox, Form, FormField } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('CheckBox Value'));
    }, [])

    const updateAPIData = () => {
        axios.put(`${apiUrl}/${id}`, {
            firstName,
            lastName,
            checkbox
        })
        .then(response => {
            console.log('更新成功:', response);
            history('/read');
        })
        .catch(error => {
            console.error('更新の際にエラー発生!', error);
        });
    }

    return (
        <div>
            <Form className='update-form'>
                <FormField>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormField>
                <FormField>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormField>
                <FormField>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
                </FormField>
                <Button onClick={updateAPIData} type='submit'>更新</Button>
            </Form>
        </div>

    )
};

export default Update