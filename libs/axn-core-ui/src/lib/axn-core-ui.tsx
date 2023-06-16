import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AxnCoreUiProps {}

const StyledAxnCoreUi = styled.div`
  color: pink;
`;

export function AxnCoreUi(props: AxnCoreUiProps) {
  return (
    <StyledAxnCoreUi>
      <h1>Welcome to AxnCoreUi!</h1>
    </StyledAxnCoreUi>
  );
}

export default AxnCoreUi;
