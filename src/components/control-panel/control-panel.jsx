import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { config } from '../../config';
import {
  setCurrentIndex,
  setCurrentPeriod,
  setCurrentUnit
} from '../../redux/actions/actions';

export const ControlPanel = ({ target, values }) => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const action =
      target === config.target.index
        ? setCurrentIndex
        : target === config.target.unit
        ? setCurrentUnit
        : target === config.target.period
        ? setCurrentPeriod
        : null;
    if (!action) {
      throw new TypeError('Invalid prop target');
    }
    dispatch(action(values[index]));
  }, [dispatch, values, index, target]);

  const handleClick = (direction) => {
    const newIndex = index + direction;
    const { length } = values;
    setIndex(
      newIndex < 0 ? (length + (newIndex % length)) % length : newIndex % length
    );
  };

  return (
    <div className='control-panel'>
      <button className='control' onClick={() => handleClick(-1)}>
        &#x25C1;
      </button>
      <span>{values[index]}</span>
      <button className='control' onClick={() => handleClick(1)}>
        &#x25B7;
      </button>
    </div>
  );
};
