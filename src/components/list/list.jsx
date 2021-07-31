import { ControlPanel } from '../control-panel/control-panel';
import './list.css';

export const List = () => {
  return (
    <div className='block list'>
      <ControlPanel />
      <ul>
        {Array(100)
          .fill(0)
          .map((_, i) => (
            <li className='list-item' key={i}>
              <div className='country'>
                <img
                  src='https://www.countryflags.io/AF/shiny/64.png'
                  alt='flag'
                  className='country-flag'
                />
                <span className='country-name'>Afghanistan</span>
              </div>
              <div className='amount'>27657145</div>
            </li>
          ))}
      </ul>
    </div>
  );
};
