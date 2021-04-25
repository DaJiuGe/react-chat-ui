import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import StyledBlockedList, {
  BlockedAvatar,
  BlockedName,
  ClosableAvatar,
  CloseIcon,
  FriendList,
  SettingsMenu,
} from "./style";
import { ReactComponent as ArrowMenuLeft } from "assets/icons/arrowMenuLeft.svg";
import Icon from "components/Icon";
import "styled-components/macro";
import Text from "components/Text";
import face from "assets/images/face-male-3.jpg";
import { ReactComponent as CloseCircleIcon } from "assets/icons/closeCircle.svg";

function BlockedList({ children, ...rest }) {
  const history = useHistory();
  return (
    <StyledBlockedList {...rest}>
      <SettingsMenu>
        <Icon
          icon={ArrowMenuLeft}
          css={`
            cursor: pointer;
          `}
          onClick={() => {
            history.goBack();
          }}
        />
        <Text size="xxlarge">已屏蔽好友</Text>
      </SettingsMenu>
      <FriendList>
        {new Array(8).fill(0).map((_, i) => {
          return (
            <ClosableAvatar key={i}>
              <BlockedAvatar size="105px" src={face}></BlockedAvatar>
              <CloseIcon
                width={46}
                height={51}
                icon={CloseCircleIcon}
              ></CloseIcon>
              <BlockedName>李荣浩</BlockedName>
            </ClosableAvatar>
          );
        })}
      </FriendList>
    </StyledBlockedList>
  );
}

BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
