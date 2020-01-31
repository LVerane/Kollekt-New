import React from "react";
// import AddForm from "../AddForm";
// import DropdownButton from "../DropdownButton";
import SetCustomFields from "./SetCustomFields";
import InputField from "../InputField";

function CustomCollection(props) {
  // itemFields = [
  //   { name: "image", type: "text", displayName: "Image" },
  //   { name: "text1", type: "text", displayName: "Name" },
  //   { name: "text2", type: "text", displayName: "Description" },
  //   { name: "date1", type: "date", displayName: "Date" },
  //   { name: "number1", type: "number", displayName: "Quantity" }
  // ];
  // const typeOptions = ["Music", "Comics", "Currency", "Cards", "Other"];
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
            name={`text${i}`}
            placeholder={`text field #${i}`}
            className="form-control input"
          />
        ))}
        {[...Array(props.customCollectionFields.number || 0)].map((e, i) => (
          <InputField
            key={i}
            value={props.customFields.item}
            onChange={props.updateCustomFields}
            name={`number${i}`}
            placeholder={`number field #${i}`}
            className="form-control input"
            type="number"
          />
        ))}
        {[...Array(props.customCollectionFields.date || 0)].map((e, i) => (
          <InputField
            key={i}
            value={props.customFields.item}
            onChange={props.updateCustomFields}
            name={`date${i}`}
            placeholder={`date field #${i}`}
            className="form-control input"
            type="date"
          />
        ))}
        <button onClick={e => props.tempCreateCustom(e)}>Test!</button>
      </form>
      {/* <form className="form-inline">
        {props.newItemFields.text.map((e, i) => (
          // <span key={i}>♦{e}</span>
          // <input name={`text${i}`} placeholder="♦"></input>
          <InputField
            key={i}
            value={e.displayName}
            onChange={props.updateNewFields}
            name={i}
            placeholder={`text field #${i}`}
            className="form-control input"
          />
        ))}
        <button onClick={e => props.tempCreateCustom(e)}>Test!</button>
      </form> */}
    </div>
  );
}
export default CustomCollection;
