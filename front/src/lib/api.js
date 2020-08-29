import axios from 'axios';

export const getInfo = () =>
  axios.get('http://localhost:3065/api/information/');

// export const getHistory = (id, pw) => {
//   return axios.get('http://localhost:3065/api/myHistory');
// };
export const getHistory = (id, pw) => {
  console.log('여기는 깊숙한 곳~~~~');
  console.log(id);
  console.log(pw);
  console.log('여기는 깊숙한 곳~~~~');
  return axios({
    method: 'post',
    url: 'http://localhost:3065/api/myHistory',
    headers: {},
    data: {
      classnet: id,
      classnetPass: pw,
    },
  });
};
