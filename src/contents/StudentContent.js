import React from 'react';

const StudentContent = ({ studentContentList }) => {
  //공지가 올 공간
  return (
    <>
      <ul>
        {studentContentList.map((x, i) => (
          <li key={i}>
            <div>
              <p>title: {x.title}</p>
              <p>
                <a href={`http://${x.url}`} target="_blank">
                  공지 바로가기
                </a>
              </p>
              <p>date : {x.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StudentContent;
