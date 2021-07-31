import { Layout } from '../layout/layout';
import { List } from '../list/list';
import { Table } from '../table/table';

export const App = () => (
  <Layout listContent={<List />} tableContent={<Table />} />
);
