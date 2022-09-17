import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../../utilities/formatCurrency';
import { useShoppingCart } from '../../context/ShoppingCartContext';

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem: React.FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const itemQuantity = getItemQuantity(id);

  return (
    <Card className='h-100'>
      <Card.Img
        variant='top'
        height={'200px'}
        style={{ objectFit: 'cover' }}
        src={imgUrl}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-2'> {name}</span>
          <span className='text-muted'> {formatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto'>
          {itemQuantity === 0 ? (
            <Button className='w-100' onClick={() => increaseItemQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className='d-flex align-items-center flex-column'
              style={{ gap: '0.5rem' }}
            >
              <div
                className='d-flex justify-content-center'
                style={{ gap: '0.5rem' }}
              >
                <Button
                  style={{
                    height: '35px',
                    width: '35px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => increaseItemQuantity(id)}
                >
                  +
                </Button>
                <div>
                  <span className='fs-4'>{itemQuantity}</span> In Cart
                </div>
                <Button
                  style={{
                    height: '35px',
                    width: '35px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => decreaseItemQuantity(id)}
                >
                  -
                </Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant='danger'
                size='sm'
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
