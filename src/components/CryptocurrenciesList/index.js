import React, {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  // Initialize state
  state = {
    currencyList: [],
    isLoading: true,
  }

  // Fetch data when the component mounts
  componentDidMount() {
    this.getdatalist()
  }

  // Fetch cryptocurrency data
  getdatalist = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    this.setState({currencyList: data, isLoading: false}) // Update state with data
  }

  render() {
    const {currencyList, isLoading} = this.state

    return (
      <div className="CryptocurrenciesList_container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency_img"
        />

        {/* Show loader while data is being fetched */}
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <p>Loading...</p>
          </div>
        ) : (
          <ul className="list_container">
            {currencyList.map(currency => (
              <CryptocurrencyItem key={currency.id} details={currency} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
