import PropTypes from 'prop-types'
import './ScheduleCell.scss'

function EscheduleCell({ getCellPosition }) {
  const cells =  Array(7*24).fill(0).map((_, index) => 
    <span className="cell" key={index} id={index} onClick={getCellPosition} />
  )
  return (
   <>
    {cells}
   </>
  )
}

EscheduleCell.propTypes = {
  getCellPosition: PropTypes.func
}

export default EscheduleCell;
