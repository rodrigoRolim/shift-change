import PropTypes from 'prop-types';
import './PrimaryLayout.scss';

function Primary({ children }) {

  return (
    <main className="primary-layout">{ children }</main>
  )
}

Primary.propTypes = {
  children: PropTypes.node
}

export default Primary