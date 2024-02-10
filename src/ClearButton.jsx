import PropTypes from 'prop-types';

export default function ClearButton({ onButtonClick }) {
  return (
    <button
      className="clr-btn"
      id="clear"
      onClick={onButtonClick}
    >
      C
    </button>
  );
}

ClearButton.propTypes = {
  onButtonClick: PropTypes.func,
};
