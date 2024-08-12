import Schedule from "../components/Schedule/Schedule"
// import Event from "../components/Schedule/Event"
import './WorkSchedule.scss'

function WorkSchedule() {
  const events = [{ start: new Date(2024, 5, 1), end: new Date(2024, 5, 8), description: 'blablablabla' }]
  return (
    <div className="work-schedule">
      <Schedule events={events}/>
    </div>
  )
}

export default WorkSchedule
