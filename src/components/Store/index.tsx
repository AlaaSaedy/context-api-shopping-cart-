import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreData from '../../data/items.json';
import StoreItem from './StoreItem';

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className='g-3'>
        {StoreData.map((item, index) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;
