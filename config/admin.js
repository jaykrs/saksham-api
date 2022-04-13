module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b0d3aa724f8f74f9a29369b15c9f4a55'),
  },
});
