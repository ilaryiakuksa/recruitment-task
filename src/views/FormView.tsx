import React from "react";
import { connect } from "react-redux";
import { submitForm } from "../store/actions";
import { reset } from "redux-form";
import DishForm from "../components/Form";

interface DishFormContainerProps {
  submitForm: (values: any) => void;
  resetForm: () => void;
}


const DishFormContainer: React.FC<DishFormContainerProps> = ({ submitForm, resetForm }) => {
  const handleSubmit = (values: any) => {
    submitForm(values)
    resetForm()
  };

  return <DishForm onSubmit={handleSubmit} />;
};

export default connect(null, { submitForm, resetForm: () => reset("dishForm")  })(DishFormContainer);

