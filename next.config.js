module.exports = {
  trailingSlash: true,
  output: 'export',
  publicRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL || 'https://youtube-transcript-backend-t9pw.onrender.com',
  },
}
