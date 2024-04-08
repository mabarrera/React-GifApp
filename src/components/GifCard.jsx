import PropTypes from "prop-types"

const GifCard = ({ title, url }) => {
  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

export default GifCard

GifCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
}