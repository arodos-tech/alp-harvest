import axios from "axios";

export const sendMail = (fields, callBack) => {
  const formData = new FormData();
  formData.append("name", fields.name);
  formData.append("email", fields.email);
  formData.append("message", fields.message);

  axios
    .post(
      `https://emails.arodos.com/php-mailer/alp-harvest/index.php`,
      formData
    )
    .then((res) => {
      console.log("res", res);
      if (res.status == 200) {
        callBack(false, "Message is sent successfully.");
      } else {
        callBack(true, "Please try again later!");
      }
    })
    .catch((error) => {
      console.log("error web", error);
      callBack(true, "Please try again later!");
    });
};
