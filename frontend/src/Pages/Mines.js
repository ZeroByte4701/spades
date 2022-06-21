import React, { useState } from "react";
import MinesBet from "../Sections/MinesBet";
import MinesPlay from "../Sections/MinesPlay";

const Mines = () => {
  const [betting, setBetting] = useState(false);

  return (
    <div className='flex w-full py-10 px-5 gap-1'>
      <div className='bg-slate-700 rounded-l-xl' style={{ width: "30%" }}>
        <MinesBet betting={betting} setBetting={setBetting} />
      </div>
      <div
        className='bg-slate-600 rounded-r-xl flex justify-center items-center'
        style={{ width: "70%" }}
      >
        <MinesPlay betting={betting} setBetting={setBetting} />
      </div>
    </div>
  );
};

export default Mines;
