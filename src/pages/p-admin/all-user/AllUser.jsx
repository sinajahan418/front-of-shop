import React, { useEffect, useState } from "react";
import UserForm from "../../../components/tempelat/p-admin/userForm/UserForm";
import ChangeUserRole from "../../../components/tempelat/p-admin/changeuserRole/ChangeUserRole";
import { useShowRoleBox } from "../../../store/ShowChangRole";
const AllUser = () => {
  const { showRoleBox } = useShowRoleBox();

  const [allUser, setAllUser] = useState([]);
  const getAllUser = async () => {
    const res = await fetch("/api/all-user");
    const data = await res.json();
    setAllUser(data.data);
    console.log(allUser);
    console.log("llllllllllllllllllll",data.data);
  };
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <>
      <table className=" rounded-3xl overflow-hidden  border-collapse font-thin shadow-[0 0 20px #0000001a] w-[50%]  ml-[40rem] mt-[-23rem]">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
            <th>role</th>
            <th>created At</th>
            <th>edite</th>
          </tr>
        </thead>
        <tbody>
          {allUser?.map((item, index) => (
            <UserForm key={item._id} index={index} {...item} />
          ))}
        </tbody>
      </table>
      {showRoleBox && <ChangeUserRole userDeteales={allUser}/>}
    </>
  );
};

export default AllUser;
