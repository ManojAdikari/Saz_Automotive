import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {

  
  return (
    <tr>
      <td key={contact.Job}>{contact.Job}</td>
      <td key={contact.Note}>{contact.Note}</td>
      <td key={contact.Quantity}>{contact.Quantity}</td>
      <td key={contact.Amount}>{contact.Amount}</td>
      <td>
      
        <button type="button" className="btn btn-danger" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
