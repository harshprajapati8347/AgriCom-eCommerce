const contactUsModel = require("../models/contactus");

const postContactUs = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contactUs = new contactUsModel({
      name,
      email,
      message,
    });
    await contactUs.save();
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  postContactUs,
};
