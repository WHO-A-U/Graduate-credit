import React from 'react';

const NormalContent = () => {
  //공지가 올 공간
  const list = ['NormalContent공지1', '공지2', '공지3'];
  const Lists = list.map((x, i) => <li key={i}>{x}</li>);
  return (
    <>
      <ul>{Lists}</ul>
    </>
  );
};

export default NormalContent;
