import styled, { css } from "styled-components";
import StyledText from "components/Text/style";

// 注意此处不能css用缩进
const StyledParagraph = styled(StyledText)`
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}
`;

export default StyledParagraph;
