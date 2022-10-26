import * as React from 'react';
import { BsPlusCircle as PlusIcon } from 'react-icons/bs';
import { nanoid } from 'nanoid';
import styled from 'styled-components';


const FormStyles = styled.form `
    max-width: 60rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;
const FormInput = styled.input `
      color: inherit;
      padding: 1.4rem;
      border: 1px solid gray;
      border-radius: 8px;
      margin-right: 1rem;
      transition: border 300ms;
      font-size: 1.4rem;
      grid-area: description;
      flex: 1;
`;

const FormInputValue = styled.input `
      color: inherit;
      padding: 1.4rem;
      border: 1px solid gray;
      border-radius: 8px;
      margin-right: 1rem;
      transition: border 300ms;
      font-size: 1.4rem;
      grid-area: type;
      font-weight: bold;
`;

const Select = styled.select `
      color: inherit;
      padding: 1.4rem;
      border: 1px solid gray;
      border-radius: 8px;
      margin-right: 1rem;
      transition: border 300ms;
      font-size: 1.4rem;
      grid-area: type;
      font-weight: bold;
    `;

const Button = styled.button `
      grid-area: submit;
      padding: 0 0.8rem;
      font-size: 3rem;
      border: 1px solid transparent;
  
      svg {
        fill: #019245;
      }
  
      &:focus {
        border: 1px solid #019245;
      }
`
function Form({ onSubmit }) {
    const descriptionRef = React.useRef(null);
    const [type, setType] = React.useState('income');
    const [description, setDescription] = React.useState('');
    const [value, setValue] = React.useState('');
  
    //Complete the handleSumit function
    const handleSubmit = (e) => {
  
      // Submit the form
      //calls the onSubmit function with the form values
      // Reset form values and set focus on description
      //doesn't call onSubmit when ref.current is null
     
    };
  
    
    const isButtonDisabled = description === '' || value === '';
  
    return (
      <FormStyles data-testid="form" onSubmit={handleSubmit}>
        <Select
          aria-label="select type"
          value={type}
          onChange={(e) => setType(e.currentTarget.value)}
        >
          <option aria-label="income" value="income">
            ➕
          </option>
          <option aria-label="expense" value="expense">
            ➖
          </option>
        </Select>
        <FormInput
          type="text"
          placeholder="Add description"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
          ref={descriptionRef}
          required
        />
        <FormInputValue
          type="number"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          required
        />
  
        <Button
          aria-label="submit"
          type="submit"
          disabled={isButtonDisabled}
        >
          <PlusIcon />
        </Button>
      </FormStyles>
    );
  }
  
  export { Form };
  