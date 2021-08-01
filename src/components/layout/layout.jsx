import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Header } from '../header/header';
import './layout.css';

export const Layout = ({
  listContent = null,
  mapContent = null,
  tableContent = null,
  chartContent = null
}) => {
  return (
    <>
      <Header />
      <Row>
      <Col
        xxl={3}
        xl={3}
        l={3}
        md={3}
        sm={{ order: 1, span: 5 }}
        className='list-container'
      >
        {listContent}
      </Col>
      <Col
        xxl={{ order: 1, span: 5 }}
        xl={{ order: 1, span: 5 }}
        l={{ order: 1, span: 5 }}
        md={{ order: 1, span: 5 }}
        sm={{ order: -1, span: 12 }}
        className='map-container'
      >
        {mapContent}
      </Col>
      <Col
        xxl={4}
        xl={4}
        l={4}
        md={4}
        sm={{ order: 2, span: 7 }}
        className='table-chart-container'
      >
        <Row>
          <Col xxl={12} xl={12} l={12} className='table-container'>
            {tableContent}
          </Col>
        </Row>
        <Row>
          <Col xxl={12} xl={12} l={12} className='chart-container'>
            {chartContent}
          </Col>
        </Row>
      </Col>
    </Row>
    </>
  );
};
