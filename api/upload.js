// api/upload.js - Vercel serverless function

const { upload } = require('vercel-file-upload');

module.exports = async (req, res) => {
  const files = await upload(req);

  // Upload files to S3 etc
  // ...

  return res.status(200).json({
    message: 'Upload successful!',
    urls: files.map(file => file.url) 
  });
}
