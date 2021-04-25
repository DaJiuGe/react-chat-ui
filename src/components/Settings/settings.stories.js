import React from "react";
import Settings, { SettingsItem } from ".";

export default {
  title: "页面组件/Settings",
  component: Settings,
};

export const Default = () => <Settings />;

export const WithoutDesciption = () => (
  <SettingsItem label="这是一个没有描述的设置项" />
);

export const WithDesciption = () => (
  <SettingsItem label="这是一个没有描述的设置项" description="这是设置项描述" />
);

export const WithMenu = () => (
  <SettingsItem
    type="menu"
    label="这是一个没有描述的设置项"
    description="这是设置项描述"
  />
);
