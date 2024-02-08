import PropTypes from 'prop-types';

export default function DotButton({ onButtonClick }) {
  return (
    <button
      className="dot-btn"
      id="decimal"
      onClick={onButtonClick}
    >
      .
    </button>
  );
}

DotButton.propTypes = {
  onButtonClick: PropTypes.func,
};
