const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const { v4: uuidv4 } = require('uuid');
const { User } = require('../../models/user')
const { createError, sendMail } = require('../../helpers')

const register = async (req, res) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });
   if (user) {
      throw createError(409, 'Email in use')
   }
   const hashPassword = await bcrypt.hash(password, 10);
   const avatarURL = gravatar.url(email)
   const verificationToken = uuidv4();
   const result = await User.create({
      ...req.body, password: hashPassword,
      avatarURL,
      verificationToken
   });
   const mail = {
      to: email,
      subject: "Site registration confirmation",
      html: `<a target="_blank" href="http://localhost:3000/auth/verify/${verificationToken}">Click to confirm registration</a>`
   }
   await sendMail(mail);
   res.status(201).json({
      user: {
         email: result.email
      }
   });
}

module.exports = register;