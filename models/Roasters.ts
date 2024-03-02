import mongoose from 'mongoose';

const RoasterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    address: {
      type: String,
      required: true,
    },
    geo: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  },
  contactInfo: {
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false, // Assuming phone number is optional
    },
  },
  website: {
    type: String,
    required: true,
  },
  socialMedia: {
    instagram: {
      url: {
        type: String,
        required: true,
      },
      handle: {
        type: String,
        required: true,
      },
    },
  },
  beans: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bean", // Make sure you have a Bean model defined somewhere
  }],
});

export default mongoose.models.Roaster || mongoose.model('Roaster', RoasterSchema);

