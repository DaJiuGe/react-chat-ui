import React from "react";
import PropTypes from "prop-types";
import StyledNoteCard, {
  NoteImage,
  NoteTitle,
  NoteExcerpt,
  NoteTime,
} from "./style";
import noteImage from "assets/images/note-1.jpg";

function NoteCard({ children, ...rest }) {
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={noteImage} alt=""></NoteImage>
      <NoteTitle>学习英语笔记</NoteTitle>
      <NoteExcerpt>Hello everyone! This is my first note!</NoteExcerpt>
      <NoteTime>3小时以前</NoteTime>
    </StyledNoteCard>
  );
}

NoteCard.propTypes = {
  children: PropTypes.any,
};

export default NoteCard;
