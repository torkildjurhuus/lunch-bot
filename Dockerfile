# Use the official Node.js image from the Docker Hub
FROM node:18

# Create a directory for the app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json/yarn.lock files to the new directory
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy all files to the container (ignore files specified in .dockerignore)
COPY . .

# Start the app (This should match the "start" script in your package.json)
CMD [ "yarn", "start" ]
