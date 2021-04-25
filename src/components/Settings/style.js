import styled from "styled-components";
import { animated } from "react-spring";

const StyledSettingsItem = styled.div``;

const SettingsItemControl = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSettingsGroup = styled.div``;

const StyledSettings = styled(animated.div)`
  padding: 72px;
`;

export default StyledSettings;
export { StyledSettingsItem, SettingsItemControl, StyledSettingsGroup };
