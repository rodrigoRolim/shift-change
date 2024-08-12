import PropTypes from 'prop-types'
import './ScheduleDays.scss'

function ScheduleDays({ start, end }) {
  const days = ['', 'dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']
  
  function getDaysInMonth(month, year) {
    const daysByMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (month === 1 && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) {
      return 29
    }

    return daysByMonth[month]
  }
  const createDayList = ({ start, end }) => {
    const periodInDays = new Date(end.getTime() - start.getTime()).getDate() + 1
    const lastDayOfTheStartDate = Number(getDaysInMonth(start.getMonth(), start.getFullYear()))
    const dayLabels = []
    for (let day = 0, aux = 0; day <= periodInDays; day++) {
      if (!day) {
        dayLabels.push('')
        continue
      }
      console.log(lastDayOfTheStartDate <= start.getDate())
      if (start.getDate() + day - 1 <= lastDayOfTheStartDate) {
        dayLabels.push(`${days[day]} ${start.getDate() + day - 1}`)
        continue
      } else {
        aux++
        dayLabels.push(`${days[day]} ${aux}`)
      }


    }
    // const dates = Array(periodInDays).fill(0).map((_, day) => day === 0 ? '' : `${days[day]} ${start.getDate() + day - 1}`)
    
    return dayLabels
  }

  return (
    <div className="schedule-days">
      {
        createDayList({ start, end })
          .map((day, index) => <span className="day" key={index}>{day}</span>)
      }
    </div>
  )
}

ScheduleDays.protoTypes = {
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date)
}

export default ScheduleDays
