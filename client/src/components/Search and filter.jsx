import { useState,useContext } from "react";
import { SafeVoyageContext } from "../context/state";

function Agencysearch(){
    const { searchKeyword, setSearchKeyword } = useContext(SafeVoyageContext);

    return(
<div>
<input
            className=" w-[100%] text-blue-400 text-[1.2em] rounded-full my-5 py-3 px-[1em] outline-none "
            type="text"
            placeholder="Search Agency by keyword "
            onChange={(e) =>
              setSearchKeyword((prev) => ({ ...prev, keyword: e.target.value }))
            }
          />

</div>
    )
}
export default Agencysearch