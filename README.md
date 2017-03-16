The compiled frontend is located in /build/app directory.
The application requires the server to serve static files from the build/app directory to /app url and return the contents of app/index.html for non-api calls.
A sample minimally configured flask server is provided in build/web. It can be run and checked at 127.0.0.1:5000 if you have python and flask installed.
