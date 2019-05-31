import styled from 'styled-components';

const Col = styled.div`
  flex: ${({ flex }) => flex};

  @media screen and (max-width: 768px) {
    flex: 100%;
  }
`;
export default Col;
