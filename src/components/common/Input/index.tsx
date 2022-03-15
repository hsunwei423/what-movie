import styled from 'styled-components';

interface InputProps {
  placeholder?: string
}

const Container = styled.input`
  padding: 13.5px;

  border: 1px solid #686B72;
  border-radius: 8px;
  background: none;
  outline: none;
`;


const Input = ({ placeholder}: InputProps) => {
  return (
    <Container placeholder={placeholder}>

    </Container>
  )
};

export default Input;
