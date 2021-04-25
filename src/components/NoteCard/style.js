import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import styled from "styled-components";
import { card } from "utils/mixins";

const NoteImage = styled.img`
  grid-area: image;
  justify-self: start;
  align-self: center;
  display: inline-block;
  width: 62px;
  height: 62px;
  object-fit: cover;
`;

const NoteTitle = styled(Heading).attrs({ level: 2 })`
  grid-area: title;
  justify-self: start;
`;

const NoteExcerpt = styled(Paragraph).attrs({
  type: "primary",
  size: "small",
})`
  grid-area: excerpt;
  justify-self: start;
`;

const NoteTime = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: time;
  justify-self: end;
`;

const StyledNoteCard = styled.div`
  ${card()}
  display: grid;
  grid-template-areas: "image title time" "image excerpt excerpt";
  grid-template-columns: 72px 2fr 1fr;
`;

export default StyledNoteCard;
export { NoteImage, NoteTitle, NoteExcerpt, NoteTime };
