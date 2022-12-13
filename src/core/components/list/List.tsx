import React, { useEffect, useState } from 'react';
import './list.css';

const BalanceList = ({ listItems }: any) => {
  const [list] = useState(listItems);

  useEffect(() => {
    console.log(list);
  });

  return (
    <ul className='list'>
      {list?.listItems?.map((item: any, index: number) => {
        return (
          <>
            <li className='list-item' key={index.toString()}>
              <div>
                <p> {item?.name}</p>
                <p>{item?.balance}</p>
              </div>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default BalanceList;
