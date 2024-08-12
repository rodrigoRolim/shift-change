import PropTypes from 'prop-types'
import './ScheduleEvent.scss'

function Event({ description, position, eventPeriod, currentPeriodOnBoard }) {
  const positionEl = {
    top: position.y,
    left: position.x
  }
  const isVisible = () => 
    eventPeriod.start >= currentPeriodOnBoard.start && eventPeriod.end <= currentPeriodOnBoard.end

  if (isVisible()) {
    return (
      <div className="event" style={positionEl}>
        <p>{description}</p>
      </div>
    )
  }
  return ({})
}

Event.propTypes = {
  description: PropTypes.string.isRequired,
  position: PropTypes.object.isRequired,
  eventPeriod: PropTypes.object.isRequired,
  currentPeriodOnBoard: PropTypes.object.isRequired
}

export default Event
