import React from "react";
import VoiceMessage from ".";

export default {
  title: "UI组件/VoiceMessage",
  component: VoiceMessage,
};

export const FromOthers = () => <VoiceMessage time="01:35" />;

export const FromMe = () => <VoiceMessage type="mine" time="01:35" />;
