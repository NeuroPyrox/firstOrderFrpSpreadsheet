// This is a serverless function that Vercel will run.
// It receives a request (req) and returns a response (res).
module.exports = (req, res) => {
  res.status(200).json({
    message: "Hello World from Node.js on Vercel!",
    timestamp: new Date().toISOString()
  });
};
