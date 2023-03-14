import './index.css'

const CountryItem = props => {
  const {country, visitClick} = props
  const {name, imageUrl, isVisited, id} = country

  const onVisit = () => {
    visitClick(id)
  }
  const element = isVisited ? (
    <button type="button" onClick={onVisit}>
      <p>Visited</p>
    </button>
  ) : (
    <button type="button" className="visit-button" onClick={onVisit}>
      Visit
    </button>
  )

  return (
    <li className="item-container">
      <p>{name}</p>
      {element}
    </li>
  )
}
export default CountryItem
