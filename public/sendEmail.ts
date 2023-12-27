import queryString from "query-string";

export const sendEmail = () => {
  const companyEmail = "sme@gmail.com";

  const queryParams = queryString.stringify({
    to: companyEmail,
    subject: "",
    body: "",
  });

  // Construct the Gmail compose link
  const gmailComposeLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${companyEmail}`;

  // Open the link in a new tab or window
  window.open(gmailComposeLink, "_blank");
};
