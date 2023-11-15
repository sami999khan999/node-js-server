// // http module in node.js

// // In Node.js, the http module is a core module that provides functionality for creating HTTP servers and making HTTP requests. It is part of the standard library, so you can use it without installing any additional packages. //

//============================================================================================================================================//

// // Port

// // In computer networking, a port is a logical endpoint for communication. It is used to uniquely identify a specific process to which network data is directed on a device. Ports allow multiple applications on a single device to communicate over a network. When a device communicates over a network, it specifies both an IP address and a port number. This combination is known as a "socket". //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Device: Imagine a computer or server as a building with multiple rooms. Each room represents a different application or service running on that device. //

// // Port: Think of a port as a door or entrance to each room. Each door (port) is associated with a specific service or application. //

// // Communication: When data travels over a network to reach the device, it arrives at the building. The port number is like the label on the door, indicating which room (application or service) the data should go to. //

// // Multiple Doors: Just as a building can have multiple rooms with different doors, a device can run multiple applications or services, each associated with its unique port number. //

//============================================================================================================================================//

// // Localhost

// // "Localhost" refers to the current device or machine that you are working on. It is often associated with the loopback IP address, which is 127.0.0.1 in IPv4 or ::1 in IPv6. When you use "localhost" as a hostname, it resolves to the loopback address, allowing a device to communicate with itself. //

//============================================================================================================================================//

// // Status code

// // HTTP status codes are three-digit numbers returned by a server in response to a client's request made to the server. These codes indicate the status of the requested resource and provide information about the outcome of the request. The first digit of the status code defines the class of response, and the last two digits do not have any categorization role.

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   // set header
//   res.setHeader("Content-Type", "text/html");
//   // write response
//   res.write("<p>Hello World!</>");
//   // response end
//   res.end();
// });

// server.listen(8000, () => {
//   console.log("Listening fot request on port 8000");
// });

//============================================================================================================================================//

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   // set header
//   res.setHeader("Content-Type", "text/html");

//   // send html file to chient
//   fs.readFile("./comp/index.html", (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
// });

// server.listen(8000, () => {
//   console.log("Server is running successfully!");
// });

//============================================================================================================================================//

const http = require("http");
const fs = require("fs");
require("dotenv").config();

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);

  let path = "./comp";

  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      break;
    default:
      path += "/not-found.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

// port
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server is runneing successfully t ${PORT}!`);
});
