import nodemailer from "nodemailer";
import verifyTemplate from "./views/verifyTemplate";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dexterteam40@gmail.com",
    pass: "gixxzpuviprlzilx",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendVerificationMail = async (
  email: String,
  redirectURL: String
) => {
  let mailOptions = {
    from: "dexterteam40@gmail.com",
    to: String(email),
    subject: "SME email verify",
    html: verifyTemplate(redirectURL),
  };

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent : " + info.response);
    }
  });
};
