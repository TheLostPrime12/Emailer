import axios from "axios";

export const SendMail = async (name, email, mobile, message) => {
  axios
    .post("https://mailerapi.onrender.com/mail", {
      name,
      email,
      mobile,
      message,
    })
    .then((response) => {
      console.log(response);
    });
};
