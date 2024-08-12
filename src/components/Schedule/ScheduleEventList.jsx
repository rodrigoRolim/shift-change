import PropTypes from 'prop-types'
import ScheduleEvent from './ScheduleEvent'

function ScheduleEventList({ events, currentPeriodOnBoard }) {
  const eventList = events.map(event => {
    return (
      <ScheduleEvent
        key={event.id}
        description={event.description} 
        position={event.position} 
        eventPeriod={event.period} 
        currentPeriodOnBoard={currentPeriodOnBoard}
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
  currentPeriodOnBoard: PropTypes.object.isRequired
}

export default ScheduleEventList
