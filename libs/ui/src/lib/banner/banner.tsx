import styled from 'styled-components';

export interface BannerProps {
  text: string
}

const StyledBanner = styled.div`
  color: pink;
`;

export function Banner({ text = '' }: BannerProps) {
  return (
    <StyledBanner>
      <h1>{text}</h1>
    </StyledBanner>
  );
}

export default Banner;
