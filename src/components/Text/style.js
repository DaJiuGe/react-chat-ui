import styled, { css } from "styled-components";

const typeVariants = {
  primary: css`
    color: ${({ theme }) => theme.grayDark};
  `,
  secondary: css`
    color: ${({ theme }) => theme.grayDark};
    opacity: 0.3;
  `,
  danger: css`
    color: ${({ theme }) => theme.red};
  `,
};

const sizeVariants = {
  xxlarge: css`
    ${({ theme }) => theme.xxlarge};
  `,
  xlarge: css`
    ${({ theme }) => theme.xlarge};
  `,
  large: css`
    ${({ theme }) => theme.large};
  `,
  normal: css`
    ${({ theme }) => theme.normal};
  `,
  medium: css`
    ${({ theme }) => theme.medium};
  `,
  small: css`
    ${({ theme }) => theme.small};
  `,
  xsmall: css`
    ${({ theme }) => theme.xsmall};
  `,
  xxsmall: css`
    ${({ theme }) => theme.xxsmall};
  `,
};

const StyledText = styled.span`
  font-size: ${({ size }) => sizeVariants[size] || sizeVariants.normal};
  ${({ type }) => typeVariants[type]};
  ${({ bold }) => bold && `font-weight: 500`};
`;

export default StyledText;
