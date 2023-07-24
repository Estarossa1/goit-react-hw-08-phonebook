import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.form`
  margin-bottom: 20px;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & > *:first-child {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 16px;
`;

export const Input = styled.input`
  display: block;
  width: 97%;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #4caf50;
  }

  &:invalid {
    border-color: #f44336;
  }

  &::-webkit-input-placeholder {
    color: #4caf50;
  }

  &::-moz-placeholder {
    color: #4caf50;
  }

  &:-ms-input-placeholder {
    color: #4caf50;
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #4caf50;
    color: #fff;
  }

  &:focus {
    border-color: #4caf50;
  }

  &:disabled {
    background-color: #ccc;
    color: #000;
    cursor: not-allowed;
  }

  &:not(:disabled):active {
    transform: scale(1.05);
  }

  &:not(:disabled):active:focus {
    transform: scale(1.05);
    border-color: #4caf50;
  }

  &:not(:disabled):active:hover {
    transform: scale(1.05);
    background-color: #4caf50;
    color: #fff;
  }
`;