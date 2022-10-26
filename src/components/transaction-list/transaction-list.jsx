import * as React from 'react';
import { TransactionItem } from './transaction-item/transaction-item';
import styled from 'styled-components';

const List  = styled.ul `
    list-style: none;
`


const TransactionList = ({ list, onDeleteClick }) => {
  //Map the "list" such that it returns the TransactionItem component with onDeleteClick with id.
    return (
      <List>
        
      </List>
    );
  }
  
  export { TransactionList };