import PropTypes from 'prop-types';

export default function NumberButton({ number, numberText, onButtonClick }) {
  return (
    <button
      className="num-btn"
      id={numberText}
      onClick={onButtonClick}
    >
      {number}
    </button>
  );
}

NumberButton.propTypes = {
  number: PropTypes.number,
  numberText: PropTypes.string,
  onButtonClick: PropTypes.func,
};
