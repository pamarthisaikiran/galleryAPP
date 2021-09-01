// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumnailDetails, clickImg, active} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumnailDetails
  const activeClassName = active ? `thumbnail active` : `thumbnail`

  const imgChange = () => {
    clickImg(id)
  }

  return (
    <li className="li">
      <button className="button" type="button">
        <img
          alt={thumbnailAltText}
          className={activeClassName}
          src={thumbnailUrl}
          onClick={imgChange}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
