import './table.css';
import { ControlPanel } from '../control-panel/control-panel';

export const Table = () => {
  return (
    <div className='block table'>
      <ControlPanel />
      <table>
        <tbody>
          <tr>
            <td>Cases</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Deaths</td>
            <td className='deaths'>2</td>
          </tr>
          <tr>
            <td>Recovered</td>
            <td className='recovered'>2</td>
          </tr>
        </tbody>
      </table>
      <ControlPanel />
    </div>
  );
};
