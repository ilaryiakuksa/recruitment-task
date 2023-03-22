import React from "react";
import { Field } from "redux-form";
import { required } from "../utils/utils";
import { FieldContainer, Label } from "./styles";
import { TextInput } from "./TextInput";

const PizzaFields: React.FC = () => {
  return (
    <>
      <FieldContainer>
        <Label htmlFor="no_of_slices">Number of slices</Label>
        <Field name="no_of_slices" component={TextInput} type="number" validate={[required]} />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="diameter">Diameter</Label>
        <Field name="diameter" component={TextInput} type="number" step="0.01" validate={[required]}/>
      </FieldContainer>
    </>
  );
};

export default PizzaFields;
