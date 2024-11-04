import React, { useState, useEffect } from 'react';



interface UpperInfoProps {
}

const UpperInfo: React.FC<UpperInfoProps> = () => {

  return (
    <div className="w-screen relative h-40">
      <div className='grid grid-rows-1 grid-flow-col bg-sky-400 h-full font-black'>
        <div className='place-self-center w-1/4 whitespace-nowrap'>
            <h1>Logo & pics</h1>
        </div>
        <div className='place-self-center w-1/4 text-sm whitespace-nowrap'>
            <img src=''/>
            <div className='text-base'>服務範圍:</div>
            <div>台灣全省(離島除外)</div>
        </div>
        <div className='place-self-center w-1/4 text-sm whitespace-nowrap'>
            <div className='text-base'>服務時間:</div>
            <div>星期一~星期六: 8:00 ~ 20:00</div>
            <div>星期天、國定假日公休:</div>
        </div>
        <div className='place-self-center w-1/4 text-sm whitespace-nowrap'>
            <div className='text-base'>聯絡資訊:</div>
            <div>0938-099-062</div>
        </div>
      </div>
    </div>

  );
};

export default UpperInfo;