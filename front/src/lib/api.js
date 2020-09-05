import axios from "axios";

export const getInfo = () =>
  axios.get("http://localhost:3065/api/information/");

export const getHistory = (id, pw) => {
  return axios({
    method: "post",
    // url: "http://localhost:3065/api/initTest",
    url: "http://localhost:3065/api/myHistory",
    headers: {},
    data: {
      classnet: id,
      classnetPass: pw,
    },
  });
};
