import React, {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currencyList: [],
    isLoading: true,
    error: null,
  }

  componentDidMount() {
    this.fetchCryptocurrencyData()
  }

  fetchCryptocurrencyData = async () => {
    try {
      const response = await fetch(
        'https://apis.ccbp.in/crypto-currency-converter',
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`)
      }

      const data = await response.json()

      this.setState({
        currencyList: data,
        isLoading: false,
        error: null,
      })
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false,
      })
    }
  }

  render() {
    const {currencyList, isLoading, error} = this.state

    return (
      <div className="crypto-list-container">
        <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-banner"
        />

        {isLoading ? (
          <div className="loader" data-testid="loader">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p>Error: {error}</p>
            <button
              className="retry-btn"
              onClick={this.fetchCryptocurrencyData}
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="crypto-table">
            <div className="table-header">
              <p className="header-cell">Coin</p>
              <p className="header-cell">USD</p>
              <p className="header-cell">EURO</p>
            </div>
            <ul className="currency-list">
              {currencyList.map(currency => (
                <CryptocurrencyItem key={currency.id} currency={currency} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
