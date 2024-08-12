import './ScheduleHours.scss'

function ScheduleHours() {
  const hours = Array(24).fill(0).map((_, index) => index < 10 ? `0${index}:00` : `${index}:00`)

  return (
    <div className="schedule-hours">
      {hours.map((hour, index) => <div className="hour" key={index}>{hour}</div>)}
    </div>
  )
}

export default ScheduleHours
