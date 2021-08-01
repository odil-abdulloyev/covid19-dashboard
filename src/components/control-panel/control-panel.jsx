import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIndex, setCurrentUnit } from "../../redux/actions/actions";

export const ControlPanel = ({target, values}) => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const selector = useSelector(state => target === 'index' ? state.currentIndex : state.currentUnit);

  useEffect(() => {
    dispatch(target === 'index' ? setCurrentIndex(values[index]) : setCurrentUnit(values[index]));
  }, [dispatch, values, index, target]);

  const handleClick = (direction) => {
    const newIndex = index + direction;
    const { length } = values;
    setIndex(newIndex < 0 ? (length + (newIndex % length)) % length : newIndex % length);
  }

  return (
    <div className='control-panel'>
      <button className='control' onClick={() => handleClick(-1)}>&#x25C1;</button>
      {/* <span>{values[index]}</span> */}
      <span>{selector}</span>
      <button className='control' onClick={() => handleClick(1)}>&#x25B7;</button>
    </div>
  );
};
