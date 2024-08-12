import { useState } from "react"
import './ScheduleControl.scss'

function ScheduleControl({ start, setStart, setEnd }) {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  const MILISECONDS_IN_ONE_DAY = 86400000
  const PERIOD_IN_DAYS = 6

  const [currentPeriod, setCurrentPeriod] = useState(getCurrentPeriod(start))

  function getCurrentPeriod(start) {
    const end = new Date(start.getTime() + PERIOD_IN_DAYS * MILISECONDS_IN_ONE_DAY)
    const monthStart = months[start.getMonth()]
    const monthEnd = months[end.getMonth()]
    const dayStart = start.getDate()
    const dayEnd = end.getDate()
    const startYear = start.getFullYear()
    const endYear = end.getFullYear()

    return {
      monthStart,
      monthEnd,
      dayStart,
      dayEnd,
      startYear,
      endYear
    }
  }
  function getCurrentStart() {
    return new Date(currentPeriod.startYear, months.indexOf(currentPeriod.monthStart), currentPeriod.dayStart)
  }
  function backward() {
    const currenDate = getCurrentStart()
    const newStartDate = new Date(currenDate.getTime() - PERIOD_IN_DAYS * MILISECONDS_IN_ONE_DAY)

    setCurrentPeriod(getCurrentPeriod(newStartDate))

    setStart(newStartDate)
    setEnd(new Date(newStartDate.getTime() + PERIOD_IN_DAYS * MILISECONDS_IN_ONE_DAY))
  }
  function forward() {
    const currenDate = getCurrentStart()
    const newStartDate = new Date(currenDate.getTime() + PERIOD_IN_DAYS * MILISECONDS_IN_ONE_DAY)

    setCurrentPeriod(getCurrentPeriod(newStartDate))

    setStart(newStartDate)
    setEnd(new Date(newStartDate.getTime() + PERIOD_IN_DAYS * MILISECONDS_IN_ONE_DAY))
  }
  function formatDate({ monthStart, monthEnd, dayStart, dayEnd, startYear, endYear }) {
    return `${monthStart} ${dayStart}, ${startYear} - ${monthEnd} ${dayEnd}, ${endYear}`
  }
  return(
    <div className="schedule-control">
      <div className="slider">
        <button className="prev" onClick={backward}>&#60;</button>
        <div className="period">{formatDate(currentPeriod)}</div>
        <button className="next" onClick={forward}>&#62;</button>
      </div>
      <button className="today">hoje</button>
    </div>
  )
}

export default ScheduleControl
