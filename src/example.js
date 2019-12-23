// @flow

import React, { Component } from "react";
import Select, { components } from "react-select";
import { colourOptions } from "./docs/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCaretDown, faCaretUp);
const IndicatorsContainer = (props, self) => {
  return (
    <div onClick={() => self.setState({ open: !self.state.open })}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};
const CaretDownIcon = () => {
  return <FontAwesomeIcon icon="caret-down" />;
};
const CaretUpIcon = () => {
  return <FontAwesomeIcon icon="caret-up" />;
};
const DropdownIndicator = (props, self) => {
  return self.state.open ? (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  ) : (
    <components.DropdownIndicator {...props}>
      <CaretUpIcon />
    </components.DropdownIndicator>
  );
};
class Test extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <Select
        components={{
          IndicatorsContainer: props => IndicatorsContainer(props, this),
          DropdownIndicator: props => DropdownIndicator(props, this)
        }}
        styles={{
          indicatorSeparator: () => {} // removes the "stick"
        }}
        defaultValue={[colourOptions[4]]}
        options={colourOptions}
        menuIsOpen={this.state.open}
      />
    );
  }
}

export default Test;
