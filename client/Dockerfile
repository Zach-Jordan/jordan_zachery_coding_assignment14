# Use the official Node.js image as base
FROM node:latest AS builder

# Set working directory
WORKDIR /jordan_zachery_final_site

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the React app
RUN npm run build

# Use Nginx image for serving static files
FROM nginx:alpine

# Copy built files from the previous stage into Nginx directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 5575
EXPOSE 5575


