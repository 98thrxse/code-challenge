import './AmountInput.css';
import React from 'react';
import Form from 'react-bootstrap/Form';

function AmountInput({ amount, onChange }) {
    return (
        <Form.Group className='app-form-input justify-content-start w-100 pe-2'>
            <Form.Label className='fw-bolder'>Amount</Form.Label>
            <Form.Control
                type='number'
                step='0.01'
                min='0'
                value={amount}
                onChange={onChange}
            />
        </Form.Group>
    );
}

export default AmountInput;
