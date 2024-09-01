import PropTypes from 'prop-types'
import ScheduleEvent from './ScheduleEvent'

function ScheduleEventList({ events, currentStart, currentEnd }) {
  console.log(currentEnd.getTime())
  const eventList = events.map(event => {
    return event.period.start.getTime() >= currentStart.getTime() && event.period.end.getTime() <= currentEnd.getTime() && (
      <ScheduleEvent
        key={event.id}
        description={event.description} 
        eventPeriod={event.period} 
        // currentPeriodOnBoard={currentPeriodOnBoard}
      />
    )
  })

  return (
    <>
      {eventList}
    </>
  )
}

ScheduleEventList.propTypes = {
  events: PropTypes.array.isRequired,
  // currentPeriodOnBoard: PropTypes.object.isRequired
}

export default ScheduleEventList
