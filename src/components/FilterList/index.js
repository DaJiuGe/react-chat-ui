import React from "react";
import PropTypes from "prop-types";
import StyledFilterList from "./style";
import Input from "components/Input";
import Filter from "components/Filter";
import Select from "components/Select";
import Option from "components/Option";
import Icon from "components/Icon";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import Button from "components/Button";

function FilterList({
  children,
  filterLabel = "列表选项",
  options,
  actionLabel,
  ...rest
}) {
  return (
    <StyledFilterList {...rest}>
      <Input.Search />
      <Filter>
        <Filter.Filters style={{ padding: "20px 0" }} label={filterLabel}>
          <Select>
            {options &&
              options.map((option, index) => (
                <Option key={index}>{option}</Option>
              ))}
          </Select>
        </Filter.Filters>
        {actionLabel && (
          <Filter.Action label={actionLabel}>
            <Button>
              <Icon shape="circle" icon={Plus} width={12} height={12} />
            </Button>
          </Filter.Action>
        )}
      </Filter>
      {children}
    </StyledFilterList>
  );
}

FilterList.propTypes = {
  children: PropTypes.any,
  filterLabel: PropTypes.string,
  actionLabel: PropTypes.string,
  options: PropTypes.array,
};

export default FilterList;
