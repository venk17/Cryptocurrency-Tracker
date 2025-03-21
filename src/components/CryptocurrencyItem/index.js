import React from 'react'
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = details

  return (
    <li className="currency_item">
      <div className="currency_details">
        <img src={currencyLogo} alt={currencyName} className="currency_logo" />
        <p className="currency_name">{currencyName}</p>
        <p className="currency_value">{usdValue}</p>
        <p className="currency_value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
