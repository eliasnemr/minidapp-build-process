const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/mds/command",
    createProxyMiddleware({
      target: "http://localhost:8090/",
      changeOrigin: true,
    })
  );
};

// fetch("http://localhost:1234/mds/command", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
//     "content-type": "application/json",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
//     "sec-ch-ua-mobile": "?1",
//     "sec-ch-ua-platform": "\"Android\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin"
//   },
//   "referrer": "http://localhost:1234/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"name\":\"balance\",\"args\":{}}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// });
// fetch("http://127.0.0.1:8086/mds/command", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
//     "content-type": "application/json",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
//     "sec-ch-ua-mobile": "?1",
//     "sec-ch-ua-platform": "\"Android\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin"
//   },
//   "referrer": "http://127.0.0.1:8086/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"name\":\"getaddress\",\"args\":{}}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });
