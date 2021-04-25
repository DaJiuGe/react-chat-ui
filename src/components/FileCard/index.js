import React from "react";
import PropTypes from "prop-types";
import StyledFileCard, { FileIcon, FileName, FileSize, Options } from "./style";
import { ReactComponent as OptionsIcon } from "assets/icons/options.svg";
import { Time } from "components/MessageCard/style";
import Icon from "components/Icon";
import { ReactComponent as FileZip } from "assets/icons/fileZip.svg";
import { ReactComponent as FileExcel } from "assets/icons/fileExcel.svg";
import { ReactComponent as FileWord } from "assets/icons/fileWord.svg";
import { ReactComponent as FilePpt } from "assets/icons/filePpt.svg";
import { ReactComponent as FileImage } from "assets/icons/fileImage.svg";
import { ReactComponent as FilePdf } from "assets/icons/filePdf.svg";

const fileIcons = {
  zip: FileZip,
  Excel: FileExcel,
  Word: FileWord,
  Ppt: FilePpt,
  Image: FileImage,
  Pdf: FilePdf,
};

function FileCard({
  children,
  fileIcon = "zip",
  fileName,
  fileSize,
  time,
  ...rest
}) {
  return (
    <StyledFileCard {...rest}>
      <FileIcon icon={fileIcons[fileIcon]} />
      <FileName>{fileName}</FileName>
      <FileSize>{fileSize}</FileSize>
      <Options>
        <Icon icon={OptionsIcon} opacity={0.3} />
      </Options>
      <Time>{time}</Time>
    </StyledFileCard>
  );
}

FileCard.propTypes = {
  children: PropTypes.any,
  fileIcon: PropTypes.oneOf(["zip", "excel", "word", "ppt", "image", "pdf"]),
  fileName: PropTypes.string,
  fileSize: PropTypes.string,
  time: PropTypes.string,
};

export default FileCard;
