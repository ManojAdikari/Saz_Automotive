import React from "react";

const EmployyReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {

  
  return (
    <tr>
        <td key={contact.ID}>{contact.ID}</td>
      <td key={contact.First_Name}>{contact.First_Name}</td>
      <td key={contact.Last_Name}>{contact.Last_Name}</td>
      <td key={contact.DOB}>{contact.DOB}</td>
      <td key={contact.Address}>{contact.Address}</td>
      <td key={contact.Phone}>{contact.Phone}</td>
      <td key={contact.Email}>{contact.Email}</td>
      <td key={contact.Job_Title}>{contact.Job_Title}</td>
      <td>

      
        <button type="button" className="btn btn-danger" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EmployyReadOnlyRow;
