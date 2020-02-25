import React from "react";
// import AddForm from "../AddForm";
// import DropdownButton from "../DropdownButton";
import SetCustomFields from "./SetCustomFields";
import InputField from "../InputField";

function CustomCollection(props) {
  return (
    <div>
      <div className="form-inline">
        <SetCustomFields
          collectionFields={props.customCollectionFields}
          dropdownFunction={props.selectCustomField}
          typeName="text"
          array={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        />
        <SetCustomFields
          collectionFields={props.customCollectionFields}
          dropdownFunction={props.selectCustomField}
          typeName="number"
          array={[0, 1, 2, 3, 4, 5, 6]}
        />
        <SetCustomFields
          collectionFields={props.customCollectionFields}
          dropdownFunction={props.selectCustomField}
          typeName="date"
          array={[0, 1, 2]}
        />
      </div>
      <form className="form-inline">
        {[...Array(props.customCollectionFields.text || 0)].map((e, i) => (
          // <span key={i}>♦{e}</span>
          // <input name={`text${i}`} placeholder="♦"></input>
          <InputField
            key={i}
            value={props.customFields.item}
            onChange={props.updateCustomFields}
            name={`text${i + 1}`}
            placeholder={`text field #${i + 1}`}
            className="form-control input"
          />
        ))}
        {[...Array(props.customCollectionFields.number || 0)].map((e, i) => (
          <InputField
            key={i}
            value={props.customFields.item}
            onChange={props.updateCustomFields}
            name={`number${i + 1}`}
            placeholder={`number field #${i + 1}`}
            className="form-control input"
          />
        ))}
        {[...Array(props.customCollectionFields.date || 0)].map((e, i) => (
          <InputField
            key={i}
            value={props.customFields.item}
            onChange={props.updateCustomFields}
            name={`date${i + 1}`}
            placeholder={`date field #${i + 1}`}
            className="form-control input"
          />
        ))}
        {/* <button onClick={e => props.tempCreateCustom(e)}>Test!</button> */}
      </form>
    </div>
  );
}
export default CustomCollection;
