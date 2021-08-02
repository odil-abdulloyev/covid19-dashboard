import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Layout } from '../layout/layout';
import { List } from '../list/list';
import { Table } from '../table/table';
import { Map } from '../map/map';
import { Chart } from '../chart/chart';
import { setCovidData } from '../../redux/actions/actions';
import { config } from '../../config';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(config.apiUrl);
      return await response.data;
    };
    fetchData().then((data) => dispatch(setCovidData(data)));
  }, [dispatch]);
  return (
    <Layout
      listContent={<List />}
      mapContent={<Map />}
      tableContent={<Table />}
      chartContent={<Chart />}
    />
  );
};
