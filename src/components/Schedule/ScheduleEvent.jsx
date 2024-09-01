import PropTypes from 'prop-types'
import './ScheduleEvent.scss'

function Event({ description, eventPeriod }) {
  const FRAME_HORIZONTAL_PER_SEVEN_DAYS = 100 / 7
  const FRAME_VERTICAL_PER_TWENTY_FOUR_HOURS = 100 / 24
  const CELL_PER_SEXTY_MINUTES = FRAME_VERTICAL_PER_TWENTY_FOUR_HOURS / 60

  const calculateXPosition = (startDay) => {
    startDay = startDay === 7 ? 0 : startDay
    return `${FRAME_HORIZONTAL_PER_SEVEN_DAYS * startDay}%`
  }
  const calculateYPosition = (startHour, startMinute) => {
    return `${startHour * FRAME_VERTICAL_PER_TWENTY_FOUR_HOURS + CELL_PER_SEXTY_MINUTES * startMinute}%`
  }
  const calculateEventHeight = (start, end) => {
    const minutesDiff = (end - start) / (1000 * 60)

   /*  const seconds = Math.floor((millisecondsDiff / 1000) % 60)
    const minutes = Math.floor((millisecondsDiff / (1000 * 60)) % 60)
    const hours = Math.floor((millisecondsDiff / (1000 * 60 * 60)) % 24) */

    return `${minutesDiff * CELL_PER_SEXTY_MINUTES}%`
  }
  const calculateEventWitdth = (days) => {
    console.log(days)
    return `${days * FRAME_HORIZONTAL_PER_SEVEN_DAYS}%`
  }
  function buildEventStyle() {
    return {
      top: calculateYPosition(eventPeriod.start.getHours(), eventPeriod.start.getMinutes()),
      left: calculateXPosition(eventPeriod.start.getDay() + 1),
      width: calculateEventWitdth(eventPeriod.end.getDay()),
      height: calculateEventHeight(eventPeriod.start, eventPeriod.end)
    }
  }

  return (
    <div className="event" style={buildEventStyle()}>
      <p>{description}</p>
    </div>
  )
}

Event.propTypes = {
  description: PropTypes.string.isRequired,
  // position: PropTypes.object.isRequired,
  eventPeriod: PropTypes.object.isRequired,
  // currentPeriodOnBoard: PropTypes.object.isRequired
}

export default Event
