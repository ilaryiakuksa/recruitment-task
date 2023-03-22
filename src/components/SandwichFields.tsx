import React from "react";
import { Field } from "redux-form";
import { required } from "../utils/utils";
import { FieldContainer, Label } from "./styles";
import { TextInput } from "./TextInput";

const SandwichFields: React.FC = () => {
  return (
    <FieldContainer>
      <Label htmlFor="slices_of_bread">Number of slices of bread</Label>
      <Field name="slices_of_bread" component={TextInput} type="number" validate={[required]}/>
    </FieldContainer>
  );
};

export default SandwichFields;
