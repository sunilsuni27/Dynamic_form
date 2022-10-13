import React from "react";
import RadioComponent from "./RadioComponent";
import SelectComponent from "./SelectComponent";
import TextBoxComponent from "./TextBoxComponent";

const CopmonentSelector = (props) => {
  switch (props?.type) {
    case "text":
      return (
        <TextBoxComponent
          label={props.label}
          type="text"
          helperText={props?.error}
          error={Boolean(props?.error)}
          value={props?.value}
          id={props?.id}
          onChange={props?.onChange}
        />
      );
    case "number":
      return (
        <TextBoxComponent
          label={props.label}
          type="number"
          helperText={props?.error}
          error={Boolean(props?.error)}
          value={props?.value}
          id={props?.id}
          onChange={props?.onChange}
        />
      );
    case "radio":
      return (
        <RadioComponent
          label={props.label}
          helperText={props?.error}
          error={Boolean(props?.error)}
          value={props?.value}
          id={props?.id}
          options={props?.options}
          onChange={props?.onChange}
        />
      );
    case "textArea":
      return (
        <TextBoxComponent
          label={props.label}
          type="text"
          multiLine
          rows={3}
          helperText={props?.error}
          error={Boolean(props?.error)}
          value={props?.value}
          id={props?.id}
          onChange={props?.onChange}
        />
      );
    case "select":
      return (
        <SelectComponent
          label={props.label}
          type="text"
          multiLine
          rows={3}
          helperText={props?.error}
          error={Boolean(props?.error)}
          value={props?.value}
          id={props?.id}
          onChange={props?.onChange}
          options={props?.options}
        />
      );
    default:
      return <></>;
  }
  return <div>CopmonentSelector</div>;
};

export default CopmonentSelector;
