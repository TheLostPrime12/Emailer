const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "Server Working !!" });
});

app.post("/mail", (req, res) => {
  let queryObj = req.body;
  console.log(queryObj);
  const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
      user: "thelostprime12@gmail.com",
      pass: "jvomprspphukrweh",
    },
    secure: true,
  });

  const mailData = {
    from: "thelostprime12@gmail.com", // sender address
    to: "tanishgarg97027@gmail.com", // list of receivers
    subject: "Message from Contact Form",
    html: `<span><b>Name :</b> ${queryObj.name}</span><br>
           <span><b>Email :</b> ${queryObj.email}</span><br>
           <span><b>Mobile Number :</b> ${queryObj.mobile}</span><br>
           <p><b>Message :</b> <br>${queryObj.message}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.json({ message: "Mail Sent" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
