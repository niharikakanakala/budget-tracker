import * as React from 'react';
import { TransactionItem } from './transaction-item/transaction-item';
import styled from 'styled-components';

const List  = styled.ul `
    list-style: none;
`


const TransactionList = ({ list, onDeleteClick }) => {
    return (
      <List>
        {list.map(({ id, description, value, type }) => (
          <TransactionItem
            key={id}
            id={id}
            type={type}
            value={value}
            description={description}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </List>
    );
  }
  
  export { TransactionList };