import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledEditProfile, {
  GenderAndRegion,
  GroupTitle,
  SelectGroup,
  StyledIconInput,
} from "./style";
import Profile from "components/Profile";
import Avatar from "components/Avatar";
import face from "assets/images/face-male-1.jpg";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";
import Input from "components/Input";
import Radio from "components/Radio";
import LabelContainer from "components/LabelContainer";
import Select from "components/Select";
import Option from "components/Option";
import Icon from "components/Icon";
import {
  faGithub,
  faLinkedin,
  faWeibo,
} from "@fortawesome/free-brands-svg-icons";

function EditProfile({ children, ...rest }) {
  const [showEdit, setShowEdit] = useState(false);
  if (!showEdit) {
    return (
      <Profile
        showEditBtn
        showCloseBtn={false}
        onEdit={() => {
          setShowEdit(true);
        }}
      />
    );
  } else {
    return (
      <StyledEditProfile {...rest}>
        <Avatar
          src={face}
          size="160px"
          css={`
            grid-area: 1/1/2/2;
            justify-self: center;
            margin-bottom: 12px;
          `}
        />
        <Button
          size="52px"
          css={`
            grid-area: 1/1/3/2;
            justify-self: end;
            align-self: end;
            z-index: 10;
          `}
          onClick={() => {
            setShowEdit(false);
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </Button>

        <GroupTitle>基本信息</GroupTitle>
        <Input.Text label={"昵称"}></Input.Text>
        <GenderAndRegion>
          <Radio.Group label={"性别"}>
            <Radio name="gender">男</Radio>
            <Radio name="gender">女</Radio>
          </Radio.Group>
          <LabelContainer label="地区">
            <SelectGroup>
              <Select type="form">
                <Option>省份</Option>
              </Select>
              <Select type="form">
                <Option>城市</Option>
              </Select>
              <Select type="form">
                <Option>区县</Option>
              </Select>
            </SelectGroup>
          </LabelContainer>
        </GenderAndRegion>
        <Input.Text label={"个性签名"}></Input.Text>

        <GroupTitle>联系信息</GroupTitle>
        <Input.Text label={"联系电话"}></Input.Text>
        <Input.Text label={"电子邮箱"}></Input.Text>
        <Input.Text label={"个人网站"}></Input.Text>

        <GroupTitle>社交信息</GroupTitle>
        <IconInput icon={faWeibo} bgColor="#F06767"></IconInput>
        <IconInput icon={faGithub} bgColor="black"></IconInput>
        <IconInput icon={faLinkedin} bgColor="#2483C0"></IconInput>
      </StyledEditProfile>
    );
  }
}

function IconInput({ icon, bgColor, ...rest }) {
  return (
    <StyledIconInput>
      <Icon.Social icon={icon} bgColor={bgColor} />
      <Input.Text {...rest}></Input.Text>
    </StyledIconInput>
  );
}

EditProfile.propTypes = {
  children: PropTypes.any,
};

export default EditProfile;
