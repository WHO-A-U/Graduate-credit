import React from 'react';

const StudentContent = ({ studentContentList }) => {
  //공지가 올 공간
  return (
    <>
      <ul>
        {studentContentList.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </>
  );
};

export default StudentContent;
