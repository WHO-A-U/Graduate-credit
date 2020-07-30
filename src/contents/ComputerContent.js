import React from 'react';
const ComputerContent = ({ computerContentList }) => {
  return (
    <>
      <ul>
        {computerContentList.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </>
  );
};

export default ComputerContent;
