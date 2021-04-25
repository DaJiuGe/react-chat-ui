import styled from "styled-components";

const Slider = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.gray4};
  border-radius: 16px;
  transition: 0.4s;

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.1),
      0px 3px 1px rgba(0, 0, 0, 0.05);
    transition: 0.4s;
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 0;
  height: 0;
  opacity: 0;

  :checked + ${Slider} {
    background-color: ${({ theme }) => theme.primaryColor};

    ::before {
      transform: translateX(20px);
    }
  }
`;

const StyledSwitch = styled.label`
  width: 52px;
  height: 32px;
  position: relative;
  display: inline-block;
`;

export default StyledSwitch;
export { Slider, Checkbox };
