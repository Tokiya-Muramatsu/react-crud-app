import React, { useState } from 'react';
import './create.scss';
import { Button, Checkbox, Form, FormField } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    let history = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const apiUrl = process.env.REACT_APP_API_URL;

    
    const postData = () => {
        axios.post(apiUrl , {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history('/read');
        })
    }


    return (
        <div>
            <Form className='create-form'>
                <FormField>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </FormField>
                <FormField>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </FormField>
                <FormField>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </FormField>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Create;
