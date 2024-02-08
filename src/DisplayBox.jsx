import PropTypes from 'prop-types';

export default function DisplayBox({ displayState }) {
  return (
    <div
      className="display-box"
      id="display"
    >
      {displayState}
    </div>
  );
}

DisplayBox.propTypes = {
  displayState: PropTypes.string,
};
