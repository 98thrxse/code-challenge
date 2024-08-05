import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

function CurrencyDropdown({ label, currency, data, onSelect }) {
    return (
        <Form.Group>
            <Form.Label className='fw-bolder'>{label}</Form.Label>
            <Dropdown drop='down-centered' onSelect={onSelect}>
                <Dropdown.Toggle style={{ width: '150px' }} variant='outline-secondary'>
                    <Image
                        className='me-3'
                        src={`https://raw.githubusercontent.com/Switcheo/token-icons/20e1a09cdeb28696105a16d9e95b1a5a69532061/tokens/${currency}.svg`}
                    />
                    {currency}
                </Dropdown.Toggle>

                <Dropdown.Menu className='overflow-auto' style={{ height: '200px' }}>
                    {Object.keys(data).map((currency) => (
                        <Dropdown.Item
                            className='d-flex align-items-center'
                            style={{ height: '50px' }}
                            key={currency}
                            eventKey={currency}
                        >
                            <Image
                                className='me-3'
                                src={`https://raw.githubusercontent.com/Switcheo/token-icons/20e1a09cdeb28696105a16d9e95b1a5a69532061/tokens/${currency}.svg`}
                            />
                            {currency}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </Form.Group>
    );
}

export default CurrencyDropdown;
