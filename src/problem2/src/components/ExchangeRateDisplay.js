import React from 'react';

function ExchangeRateDisplay({ amount, currencyFrom, currencyTo, exchangeRate }) {
    return (
        <div>
            {amount && currencyFrom && currencyTo ? (
                <>
                    <h5>
                        {amount} {currencyFrom} =
                    </h5>
                    <h3>
                        {(amount * exchangeRate).toFixed(8)} {currencyTo}
                    </h3>
                    <p className='mb-0' style={{ color: '#6c757d' }}>
                        1 {currencyFrom} = {exchangeRate.toFixed(8)} {currencyTo}
                    </p>
                    <p className='mb-0' style={{ color: '#6c757d' }}>
                        1 {currencyTo} = {(1 / exchangeRate).toFixed(8)} {currencyFrom}
                    </p>
                </>
            ) : (
                <h4>No data</h4>
            )}
        </div>
    );
}

export default ExchangeRateDisplay;
