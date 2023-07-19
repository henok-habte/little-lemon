import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './underconstruction.css';

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <FontAwesomeIcon icon={faPersonDigging} size="4x" />
      <h2>Page under construction</h2>
    </div>
  );
};

export default UnderConstruction;
