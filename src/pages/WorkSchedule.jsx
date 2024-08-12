import Schedule from "../components/Schedule/Schedule"
import { useState } from 'react'
// import Event from "../components/Schedule/Event"
import './WorkSchedule.scss'

function WorkSchedule() {
  const MILISECONDS_IN_ONE_DAY = 86400000
  const [start, setStart] = useState(new Date())
  const [end, setEnd] = useState(new Date(start.getTime() + 6 * MILISECONDS_IN_ONE_DAY))
  const events = [{ period: { start, end }, description: 'blablablabla', position: { x, y }, currentPeriodOnBoard }]
  return (
    <div className="work-schedule">
      <Schedule events={events} start={start} setStart={setStart} end={end} setEnd={setEnd}/>
    </div>
  )
}

export default WorkSchedule
