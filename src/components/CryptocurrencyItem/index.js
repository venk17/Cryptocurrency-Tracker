import React from 'react'
import './index.css'

const CryptocurrencyItem = ({currency}) => {
  const {currency_name, usd_value, euro_value, currency_logo} = currency

  return (
    <li className="currency-item">
      <div className="currency-info">
        <img
          src={currency_logo}
          alt={currency_name}
          className="currency-logo"
        />
        <p className="currency-name">{currency_name}</p>
      </div>
      <div className="currency-values">
        <p className="currency-value">${parseFloat(usd_value).toFixed(2)}</p>
        <p className="currency-value">€{parseFloat(euro_value).toFixed(2)}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
