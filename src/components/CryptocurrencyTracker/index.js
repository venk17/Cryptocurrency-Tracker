import React, {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="crypto-tracker-container">
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
