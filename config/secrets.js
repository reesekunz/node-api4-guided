module.exports = {
  googleApiKey: process.env.GOOGLE_API_KEY || "fake google api key",
  environment: process.env.NODE_ENV || "development"
};

// a single place where you make a decision of how to read it. could use .env 