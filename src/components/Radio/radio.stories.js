import React from "react";
import Radio from ".";

export default {
  title: "UI组件/Input/Radio",
  component: Radio,
};

export const Default = () => <Radio>默认</Radio>;

export const RadioGroup = () => (
  <Radio.Group label="请选择">
    <Radio name="radio">选项1</Radio>
    <Radio name="radio">选项2</Radio>
    <Radio name="radio">选项3</Radio>
  </Radio.Group>
);
