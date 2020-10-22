/** @format */

const url = process.env.ENV_URL;

module.exports = {
  baseUrl: url,
  feedbackUrl: `${url}feedback/`,
  voyagerUrl: `${url}voyager/`,
};
