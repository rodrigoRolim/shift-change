import PropTypes from 'prop-types'
import ScheduleCell from './ScheduleCell'
import ScheduleHours from './ScheduleHours'
import ScheduleDays from './ScheduleDays'
import ScheduleControl from './ScheduleControl'
// import ScheduleEvent from './ScheduleEvent'
import ScheduleEventList from './ScheduleEventList'
import './Schedule.scss'

function Schedule({ events, currentStart, currentEnd, setCurrentStart, setCurrentEnd }) {
  return (
    <div className="schedule">
      <ScheduleControl start={currentStart} setStart={setCurrentStart} setEnd={setCurrentEnd}/>
      <section className="calendar">
        <ScheduleDays start={currentStart} end={currentEnd}/>
        <div className="board">
          <ScheduleHours />
          <div className="events">
            <ScheduleCell />
            <ScheduleEventList events={events} currentStart={currentStart} currentEnd={currentEnd} />
          </div>
        </div>
      </section>
    </div>
  )
}

Schedule.propsType = {
  events: PropTypes.array.isRequired
}

export default Schedule
