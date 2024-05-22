import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useShowRoleBox } from "../../../../store/ShowChangRole";

const ChangeUserRole = () => {
  const { setShowRoleBox } = useShowRoleBox();
  const { userID } = useShowRoleBox();
  console.log(JSON.stringify( userID[0]));
  const [role , setRole] = useState("")
  const handleChangeRole = async()=> {
     const res = await fetch("/api/update-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({role ,userId: userID[0] , name: userID[1], email : userID[2]})
     })
     console.log(res);
  }

  return (
    <div
      style={{ backdropFilter: "blur(3px)" }}
      className=" text-slate-800 w-full h-[700px] mt-[-500px] z-[1000000000] flex items-center justify-center"
    >
      <div className="flex flex-col justify-center items-center rounded-[40px] bg-slate-300 w-[24%] h-[200px]">
        <button >
          <IoClose className=" mt-[-14px] size-7" onClick={() => setShowRoleBox(false)} />
        </button>
        <h1>change users role</h1>
        <p>name:{userID[1]}</p>
        <p>email: {userID[2]}</p>
        <p>role:</p>
        <select value={role} onChange={(e)=> setRole(e.target.value)}>
          <option >GENERAL</option>
          <option >ADMIN</option>
        </select>
        <button onClick={handleChangeRole}>change</button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
