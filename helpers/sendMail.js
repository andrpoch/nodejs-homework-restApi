const sgMail = require('@sendgrid/mail')
require('dotenv').config();

const { API_KEY_SENDGRID } = process.env;

sgMail.setApiKey(API_KEY_SENDGRID);

const sendMail = async (data) => {
   try {
      const mail = { ...data, from: "andrpochwork@gmail.com" };
      await sgMail.send(mail);
      return true;
   } catch (error) {
      console.err(error)
      throw error;
   }
}

module.exports = sendMail;
