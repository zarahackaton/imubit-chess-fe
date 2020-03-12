This front-end app is running on port 3000 since it was created using create-react-app.

You can choose whether to run it on Docker or not.

Steps to run (without docker)
-----------------------------
1. npm install
2. npm run

Steps to run (with docker)
--------------------------
1. docker build -t <name:tag> .
2. docker run -d -p <available_host_port>:3000 <name:tag>
