import styled from "styled-components";
import { Input } from "./Input";

import { Container } from "./Container";

export const Main = () => {
  return (
    <StyledMain>
      <Input />
      <Container></Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  height: 90vh;
  background: #edf7f6;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
