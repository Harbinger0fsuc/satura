const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    imageBig: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    characteristics: [
      {
        title: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
    imageDemo: {
      type: String,
      required: true,
    },
    videoDemo: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
