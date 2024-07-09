# Billing/Dockerfile
FROM node:18 AS builder

WORKDIR /app

# Log start of copying package files
RUN echo "Copying package.json and package-lock.json..."
COPY package*.json ./

# Log start of npm install
RUN echo "Installing dependencies..."
RUN npm install

# Log copying source files
RUN echo "Copying source files..."
COPY . .

# Log building the application
RUN echo "Building the Angular application..."
RUN npm run build --prod

FROM nginx:alpine
# Log copying built files to nginx directory
RUN echo "Copying built files to NGINX html directory..."
COPY --from=builder /app/dist/billing /usr/share/nginx/html

# Log setting up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
