import { useState, useEffect } from 'react';

function useExchangeRate(data, currencyFrom, currencyTo) {
    const [exchangeRate, setExchangeRate] = useState(1);

    useEffect(() => {
        if (data[currencyFrom] && data[currencyTo]) {
            setExchangeRate(data[currencyFrom].price / data[currencyTo].price);
        }
    }, [data, currencyFrom, currencyTo]);

    return exchangeRate;
}

export default useExchangeRate;
