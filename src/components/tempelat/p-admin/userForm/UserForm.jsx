import React from "react";
import { MdModeEdit } from "react-icons/md";
import swal from "sweetalert";
import { useShowRoleBox } from "../../../../store/ShowChangRole";

const UserForm = ({ name, index, email, role, createdAt , _id }) => {
  const { setShowRoleBox} = useShowRoleBox();
  const { setUserID} = useShowRoleBox();

  const updateUser = ()=> {
    setShowRoleBox(true)
    setUserID([ _id , name , email])
  }

  return (
    <tr className=" gap-20 ">
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td >{role === "GENERAL" ? "USER" : "ADMIN"}</td>
      <td>{new Date(createdAt).toLocaleDateString("ll")}</td>
      <td>
        <button onClick={updateUser} className=" hover:bg-slate-100"><MdModeEdit/></button>
      </td>
    </tr>
  );
};

export default UserForm;
