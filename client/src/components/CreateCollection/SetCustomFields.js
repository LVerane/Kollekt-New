import React from "react";
import AddForm from "../AddForm";
import DropdownButton from "../DropdownButton";

function SetCustomFields(props) {
  // const formText = `How many ${props.typeName} fields?`
  // "How many " + props.typeName + " fields?"
  return (
    <AddForm
      text={
        props.typeName in props.collectionFields
          ? `${props.collectionFields[props.typeName]} ${props.typeName} fields`
          : `How many ${props.typeName} fields?`
      }
    >
      {props.array.map((number, index) => (
        <DropdownButton
          key={index}
          onClick={() => props.dropdownFunction(number, props.typeName)}
        >
          {number}
        </DropdownButton>
      ))}
    </AddForm>
  );
}
export default SetCustomFields;
// value={
//   "image" in props.collectionChanges
//     ? props.collectionChanges.image
//     : props.collection.image
// }
