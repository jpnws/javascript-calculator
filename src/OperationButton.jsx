import PropTypes from 'prop-types';

export default function OperationButton({ opSymbol, opText, onButtonClick }) {
  return (
    <button
      className="op-btn"
      id={opText}
      onClick={onButtonClick}
    >
      {opSymbol}
    </button>
  );
}

OperationButton.propTypes = {
  opSymbol: PropTypes.string,
  opText: PropTypes.string,
  onButtonClick: PropTypes.func,
};
