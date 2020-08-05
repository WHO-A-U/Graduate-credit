import React from 'react';
const ComputerContent = ({ computerContentList }) => {
  return (
    <>
      <ul>
        {computerContentList.map((x, i) => (
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

export default ComputerContent;
