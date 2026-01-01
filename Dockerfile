# Build stage: install dependencies and produce static assets
FROM node:24-alpine AS build
WORKDIR /app

# Install dependencies using clean reproducible install
COPY package.json package-lock.json ./
RUN npm ci

# Copy project sources and build production bundle
COPY . .
RUN npm run build

# Runtime stage: serve build output with nginx
FROM nginx:1.27-alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Use the default nginx start command
CMD ["nginx", "-g", "daemon off;"]
