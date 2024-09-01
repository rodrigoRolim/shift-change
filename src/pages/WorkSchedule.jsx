import Schedule from "../components/Schedule/Schedule"
import { useState } from 'react'
// import Event from "../components/Schedule/Event"
import './WorkSchedule.scss'

function WorkSchedule() {
  const MILISECONDS_IN_ONE_DAY = 86400000
  const [start, setStart] = useState(new Date())
  const [end, setEnd] = useState(new Date(start.getTime() + 6 * MILISECONDS_IN_ONE_DAY))
  const events = [{ id: 0, period: { start: new Date(2024, 8, 3, 10, 35, 29, 0), end: new Date(2024, 8, 3, 12, 15, 12, 0) }, description: 'blablablabla' }]
  return (
    <div className="work-schedule">
      <Schedule events={events}  currentStart={start} setCurrentStart={setStart} currentEnd={end} setCurrentEnd={setEnd} />
    </div>
  )
}

export default WorkSchedule
