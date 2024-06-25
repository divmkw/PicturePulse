const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  actors: [{ type: String, required: true, default: [
    "Adams Hills",
    "Baker Olsen",
    "Clark Krasinski"
  ] }],
  releaseDate: {
    type: Date,
    required: true,
  },
  posterUrl: {
    type: String,
    required: true,
    default: "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
  },
  backdrop_path: {
    type: String,
    required: true,
    default: "https://image.tmdb.org/t/p/original/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg"
  },
  genres: {
    type: String,
    required: true,
    default: "Action & Adventure"
  },
  runtime: {
    type: String,
    required: true,
    default: "190M"
  },
  rating: {
    type: String,
    required: true,
    default: "PG"
  },
  IMDb_rating: {
    type: String,
    required: true,
    default: "5"
  },
  trailer: {
    type: String,
    required: true,
    default: "https://www.youtube.com"
  },
  featured: {
    type: Boolean,
  },
  bookings: [{ type: mongoose.Types.ObjectId, ref: "Booking" }],
  admin: {
    type: mongoose.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
});

// Define User collection  
const Movie = new mongoose.model('Movie', movieSchema)

/* -------------------------------------------------------------------------- */

module.exports = Movie
