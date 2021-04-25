import React from "react";
import FileCard from ".";

export default {
  title: "UI组件/FileCard",
  component: FileCard,
};

export const Default = () => (
  <FileCard fileName="Source Code.zip" fileSize="1.5M" time="2019年02月03日" />
);
