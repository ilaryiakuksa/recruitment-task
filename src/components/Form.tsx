import React, { useEffect, useState } from "react";
import { Field, reduxForm, InjectedFormProps, reset } from "redux-form";
import { connect } from "react-redux";
import { submitForm } from "../store/actions";
import { FormContainer, FieldContainer, Label, SubmitButton } from "./styles";
import PizzaFields from "./PizzaFields";
import SandwichFields from "./SandwichFields";
import { TextInput } from "./TextInput";
import { Select } from "./Select";
import SoupFields from "./SoupFields";

import { MaskedInput } from "./MaskedInput";
import { duration, required } from "../utils/utils";


interface DishFormProps {
  onSubmit: (values: any) => void;
  submitForm: (values: any) => void;
  resetForm: () => void;
}

const DishForm: React.FC<DishFormProps & InjectedFormProps<Record<string, never>, DishFormProps>> = ({
  handleSubmit,
  submitForm,
  resetForm,
  invalid,
  submitting,
  change
}) => {
  const [selectedDishType, setSelectedDishType] = useState('');

  useEffect(() => {
    change('type', selectedDishType);
  }, [selectedDishType, change]);

  const onSubmit = (values: any) => {
    if(submitting || invalid) return
    submitForm(values);
    resetForm()
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FieldContainer>
        <Label htmlFor="name">Dish Name</Label>
        <Field name="name" component={TextInput} type="text" validate={[required]}/>
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="preparation_time">Preparation Time (HH:mm:ss)</Label>
        <Field name="preparation_time" component={MaskedInput} type="text" mask="99:99:99" validate={[required, duration]} />
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="type" >Dish Type</Label>
        <Field
          name="type"
          component={Select}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedDishType(e.target.value)}
          validate={[required]}
        >
          <option value="">Select dish type</option>
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </Field>
      </FieldContainer>
      {selectedDishType === "pizza" && <PizzaFields />}
      {selectedDishType === "soup" && <Field name="spiciness_scale" component={SoupFields} validate={[required]} />}
      {selectedDishType === "sandwich" && <SandwichFields />}
      <SubmitButton type="submit" disabled={submitting || invalid}>Submit</SubmitButton>
    </FormContainer>
  );
};

export default connect(null, { submitForm, resetForm: () => reset("dishForm") })(
  reduxForm<Record<string, never>, DishFormProps>({
    form: "dishForm",
  })(DishForm)
);


