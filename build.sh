#!/bin/bash

# Build the project
npm run build

# Copy redirects file to the build folder if it doesn't exist there already
if [ ! -f "dist/_redirects" ]; then
  cp public/_redirects dist/
fi

# Create a 200.html file for SPA routing
cp dist/index.html dist/200.html
