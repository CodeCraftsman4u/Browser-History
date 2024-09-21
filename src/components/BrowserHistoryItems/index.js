import './index.css'

const BrowserHistoryItems = props => {
  const {browsingList, deleteHistory} = props
  const {id, domainUrl, title, logoUrl, timeAccessed} = browsingList
  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="each-cart-item">
      <p className="browsing-times">{timeAccessed}</p>
      <div className="browsed-item">
        <div className="domain-details">
          <img src={logoUrl} className="domain-logo" alt="domain logo" />
          <p className="domain-name">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItems
