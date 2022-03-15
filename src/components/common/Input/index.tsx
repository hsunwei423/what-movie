import { ChangeEvent } from 'react';
import Images from 'next/image';
import styled from 'styled-components';

interface InputProps {
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Container = styled.div`
  padding: 13.5px;

  border: 1px solid #686B72;
  border-radius: 8px;

  display: flex;
  align-items: center;
  column-gap: 4px;
`;

const InputWrapper = styled.input`
  background: none;
  outline: none;
  border: none;
`;

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <Container>
      <Images src="/images/question-mark.svg" alt="question" height={17} width={17} />
      <InputWrapper type="text" placeholder={placeholder} onChange={onChange} value={value} />
    </Container>
  )
};

export default Input;
