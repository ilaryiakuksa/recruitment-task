import React from "react";
import { FieldContainer, Label } from "./styles";
import { WrappedFieldProps } from "redux-form";
import styled from "styled-components";

const SpicinessContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const SpicinessButton = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#ff9800" : "#e0e0e0")};
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff9800;
  }
`;


const SoupFields: React.FC<WrappedFieldProps> = ({ input }) => {
  const { value, onChange, onBlur } = input;
  return (
    <FieldContainer>
      <Label htmlFor="spiciness_scale">Spiciness Scale (1-10)</Label>
      <SpicinessContainer>
        {[...Array(10)].map((_, index) => (
          <SpicinessButton
            key={index}
            selected={value >= index + 1}
            onClick={(e) => {
              e.stopPropagation()
              onChange(index + 1)
            }}
            onBlur={onBlur}
          />
        ))}
      </SpicinessContainer>
    </FieldContainer>
  );
};

export default SoupFields;
