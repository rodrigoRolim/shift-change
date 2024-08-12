import PropTypes from 'prop-types'
import './RegularButton.scss'

function Button({ text, variant, onClick }) {
  return (
    <button className={`button ${variant}`} onClick={onClick}>{ text }</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'warning', 'success']).isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button
