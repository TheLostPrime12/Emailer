import axios from "axios";

export const SendMail = async (name, email, mobile, message) => {
  axios
    .post("http://192.168.0.100:5000/mail", { name, email, mobile, message })
    .then((response) => {
      console.log(response);
    });
};
