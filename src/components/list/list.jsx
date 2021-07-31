import './list.css';

export const List = () => {
  return (
    <div className='block list'>
      <div className='control-panel'>
        <button className='control'>&#x25C1;</button>
        <span>Cases</span>
        <button className='control'>&#x25B7;</button>
      </div>
      <ul>
        {Array(100)
          .fill(0)
          .map((_, i) => (
            <li className='list-item' key={i}>
              <div className='country'>
                <img
                  src='https://restcountries.eu/data/afg.svg'
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
