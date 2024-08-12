import PropTypes from 'prop-types'
import ScheduleCell from './ScheduleCell'
import ScheduleHours from './ScheduleHours'
import ScheduleDays from './ScheduleDays'
import ScheduleControl from './ScheduleControl'
// import ScheduleEvent from './ScheduleEvent'
import ScheduleEventList from './ScheduleEventList'
import './Schedule.scss'
import { useState } from 'react'

function Schedule({ events }) {
  const MILISECONDS_IN_ONE_DAY = 86400000
  const [start, setStart] = useState(new Date())
  const [end, setEnd] = useState(new Date(start.getTime() + 6 * MILISECONDS_IN_ONE_DAY))

  return (
    <div className="schedule">
      <ScheduleControl start={start} setStart={setStart} setEnd={setEnd}/>
      <section className="calendar">
        <ScheduleDays start={start} end={end}/>
        <div className="board">
          <ScheduleHours />
          <div className="events">
            <ScheduleCell />
            <ScheduleEventList events={events} />
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
