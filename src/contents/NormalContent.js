import React from 'react';

const NormalContent = ({ normalContentList }) => {
  //공지가 올 공간
  return (
    <>
      <ul>
        {normalContentList.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </>
  );
};

export default NormalContent;
