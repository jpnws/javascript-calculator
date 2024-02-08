import PropTypes from 'prop-types';

export default function EqualButton({ onButtonClick }) {
  return (
    <button
      className="eval-btn"
      id="equals"
      onClick={onButtonClick}
    >
      =
    </button>
  );
}

EqualButton.propTypes = {
  onButtonClick: PropTypes.func,
};
