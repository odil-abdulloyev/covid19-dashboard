import { Layout } from '../layout/layout';
import { List } from '../list/list';
import { Table } from '../table/table';
import { Map } from '../map/map';

export const App = () => (
  <Layout
    listContent={<List />}
    mapContent={<Map />}
    tableContent={<Table />}
  />
);
