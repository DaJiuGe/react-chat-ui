import React from "react";
import PropTypes from "prop-types";
import StyledContactList, { Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";
import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";

function ContactList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(8);
  return (
    <StyledContactList {...rest}>
      <FilterList
        options={["最新消息优先显示", "在线好友优先显示"]}
        actionLabel="创建会话"
      >
        <Contacts>
          {new Array(8).fill(0).map((_, index) => (
            <animated.div key={index} style={trailAnimes[index]}>
              <ContactCard key={index} />
            </animated.div>
          ))}
        </Contacts>
      </FilterList>
    </StyledContactList>
  );
}

ContactList.propTypes = {
  children: PropTypes.any,
};

export default ContactList;
