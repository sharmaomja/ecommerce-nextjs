module.exports = {
  // Other Next.js configurations...
  // Add the following line:
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Define additional routes here if needed
    };
  },
  // Add this line for static HTML export
  target: 'experimental-serverless-trace',
};
