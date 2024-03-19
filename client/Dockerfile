# Use the official Node.js image as base
FROM node:latest

# Set working directory
WORKDIR /jordan_zachery_final_site

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Expose port 5575
EXPOSE 5575

# Run Storybook when the container starts
CMD ["npm", "start"]

