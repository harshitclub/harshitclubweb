import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    country: {
      type: String,
    },
    company: {
      type: String,
    },
    reason: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
