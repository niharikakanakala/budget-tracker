import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { sum } from './src/utils';
import { TransactionItem } from './src/components/transaction-list/transaction-item/transaction-item';

describe('sum', () => {
  it('correctly sums elements of array', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([])).toBe(0);
    expect(sum([-2, 3])).toBe(1);
  });
});

describe('<TransactionItem>', () => {

  test('calls onDeleteClick with transaction id', () => {
    const onDeleteClick = jest.fn();
    render(
      <TransactionItem
        id="test-id"
        description="Apple"
        value={10}
        type="expense"
        onDeleteClick={onDeleteClick}
      />
    );

    userEvent.click(screen.getByRole('button'));

    expect(onDeleteClick).toBeCalledWith('test-id');
  });
});