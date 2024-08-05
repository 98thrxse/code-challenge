import './App.css';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AmountInput from './components/AmountInput/AmountInput';
import CurrencyDropdown from './components/CurrencyDropdown';
import ExchangeRateDisplay from './components/ExchangeRateDisplay';
import useExchangeRate from './hooks/useExchangeRate';

function App() {
  const [data, setJSONData] = useState({});
  const [amount, setAmount] = useState('1.00');
  const [currencyFrom, setCurrencyFrom] = useState('');
  const [currencyTo, setCurrencyTo] = useState('');

  useEffect(() => {
    fetch('https://interview.switcheo.com/prices.json')
      .then(response => response.json())
      .then(arr => {
        const data = {};
        arr.forEach(item => {
          data[item.currency] = { price: item.price, date: item.date };
        });
        setJSONData(data);
        setCurrencyFrom(Object.keys(data)[0]);
        setCurrencyTo(Object.keys(data)[1]);
      });
  }, []);

  const exchangeRate = useExchangeRate(data, currencyFrom, currencyTo);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value > 0) {
      setAmount(parseFloat(value));
    } else {
      setAmount('');
    }
  };

  const handleCurrencyChange = (setter) => (currency) => {
    setter(currency);
  };

  const handleSwitchCurrencies = () => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
  };

  return (
    <div className='position-fixed min-vw-100 min-vh-100 d-flex align-items-center bg-light'>
      <Container>
        <div className='modal d-block position-relative overflow-visible'>
          <Modal.Dialog size='lg'>
            <Modal.Header className='p-4'>
              <Modal.Title>Currency Exchange</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-4'>
              <Form className='app-form d-flex bg-white'>
                <AmountInput amount={amount} onChange={handleAmountChange} />

                <Form.Group className='app-form-buttons d-flex justify-content-end w-100 ps-2'>
                  <CurrencyDropdown
                    label="From"
                    currency={currencyFrom}
                    data={data}
                    onSelect={handleCurrencyChange(setCurrencyFrom)}
                  />

                  <Form.Group className='d-flex align-items-end px-3'>
                    <Button
                      className='rounded-circle'
                      variant='outline-secondary'
                      onClick={handleSwitchCurrencies}
                    >
                      ⇆
                    </Button>
                  </Form.Group>

                  <CurrencyDropdown
                    label="To"
                    currency={currencyTo}
                    data={data}
                    onSelect={handleCurrencyChange(setCurrencyTo)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-start p-4'>
              <ExchangeRateDisplay
                amount={amount}
                currencyFrom={currencyFrom}
                currencyTo={currencyTo}
                exchangeRate={exchangeRate}
              />
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </Container>
    </div>
  );
}

export default App;
