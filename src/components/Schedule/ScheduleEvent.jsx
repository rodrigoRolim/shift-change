import PropTypes from 'prop-types'
import './ScheduleEvent.scss'

function Event({ description }) {
  return (
    <div className="event">
      <p>{description}</p>
    </div>
  )
}

Event.propTypes = {
  description: PropTypes.string.isRequired
}

export default Event
