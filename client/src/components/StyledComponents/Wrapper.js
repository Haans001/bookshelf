import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 350px;
  }
`;

export default Wrapper;
