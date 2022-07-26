import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  dataFetch,
  dataFetchTommorow,
  addInputValue,
  inputValue,
} from "../features/Test/TestSlice";

export const Input = () => {
  const dispatch = useDispatch();
  const value = useSelector(inputValue);
  const onClickListener = () => {
    dispatch(dataFetch(value));
    dispatch(dataFetchTommorow(value));
  };
  return (
    <div>
      <StyledInput
        placeholder="Enter a city to search"
        onChange={(e) => dispatch(addInputValue(e.target.value))}
      />
      <StyledButton onClick={onClickListener}>Search</StyledButton>
    </div>
  );
};

const StyledInput = styled.input`
  margin-top: 10vh;
  border: none;
  outline: none;
  font-size: 2rem;
  background: transparent;
  border-bottom: 1px solid #1c3144;
  color: #1c3144;
  font-family: Okta;
`;

const StyledButton = styled.button`
  background: #1c3144;
  color: white;
  padding: 4px;
  font-size: 1.3rem;
  font-family: Okta;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1vh;
  .faCZyq {
    color: olive;
  }

  :hover {
    cursor: pointer;
    background: #1c3155;
  }
`;
