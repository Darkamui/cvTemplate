# Comprehensive Guide for Setting Up and Running a Next.js Application on a VPS with Docker

## Prerequisites

1. **VPS Access**: Ensure you have access to a VPS.
2. **Domain Name**: A registered domain name pointing to your VPS IP address.
3. **GitHub Repository**: Your Next.js application source code hosted on GitHub.

## Steps Overview

- [Comprehensive Guide for Setting Up and Running a Next.js Application on a VPS with Docker](#comprehensive-guide-for-setting-up-and-running-a-nextjs-application-on-a-vps-with-docker)
  - [Prerequisites](#prerequisites)
  - [Steps Overview](#steps-overview)
  - [Install Docker on VPS](#install-docker-on-vps)
  - [Create Dockerfile for Next.js App](#create-dockerfile-for-nextjs-app)
  - [Build and Run Docker Image](#build-and-run-docker-image)
  - [Update Nginx Configuration](#update-nginx-configuration)
  - [Setup CI/CD Pipeline with GitHub Actions](#setup-cicd-pipeline-with-github-actions)
  - [Diagnose and Fix Container Issues](#diagnose-and-fix-container-issues)
  - [Force Docker Image Rebuild](#force-docker-image-rebuild)

## Install Docker on VPS

1. **Update package database**:

   ```sh
   sudo apt-get update
   ```

2. **Install required packages**:

   ```sh
   sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
   ```

3. **Add Docker’s official GPG key**:

   ```sh
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```

4. **Add Docker’s APT repository**:

   ```sh
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```

5. **Update the package database with Docker packages**:

   ```sh
   sudo apt-get update
   ```

6. **Install Docker**:

   ```sh
   sudo apt-get install docker-ce
   ```

7. **Verify Docker installation**:

   ```sh
   sudo systemctl status docker
   ```

## Create Dockerfile for Next.js App

Create a file named `Dockerfile` in the root of your Next.js project with the following content:

```Dockerfile
# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]
```

## Build and Run Docker Image

1. **Navigate to the Project Directory**:

   ```sh
   cd /path/to/your/project
   ```

2. **Build the Docker Image**:

   ```sh
   docker build -t cv-template-app .
   ```

3. **Run the Docker Container**:

   ```sh
   docker run -d -p 3000:3000 --name cv-template-run cv-template-app
   ```

## Update Nginx Configuration

1. **Edit Nginx Configuration**:

   ```sh
   sudo nano /etc/nginx/sites-available/default
   ```

2. **Add or Update Server Blocks**:

```nginx
server {
    listen 80;
    server_name j-web.ca www.j-web.ca;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 443 ssl;
    server_name j-web.ca www.j-web.ca;

    ssl_certificate /etc/letsencrypt/live/j-web.ca/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/j-web.ca/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";
    ssl_ecdh_curve secp384r1;
    ssl_session_cache shared:SSL:10m;
    ssl_session_tickets off;
    ssl_stapling on;
    ssl_stapling_verify on;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

3. **Restart Nginx**:

   ```sh
   sudo systemctl restart nginx
   ```

## Setup CI/CD Pipeline with GitHub Actions

Create a file named `deploy.yml` in the `.github/workflows/` directory of your repository:

```yaml
name: Deploy to VPS

on:
  push:
    branches:
      - master # Change this to your main branch

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Docker Buildx
        uses: docker/setup-buildx-action@v1

      - name: Login to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build and Push Docker Image
        uses: docker/build-push-action@v2
        with:
          context: .
          push: true
          tags: ${{ secrets.DOCKER_USERNAME }}/my-nextjs-app:latest

      - name: SSH into VPS and Deploy
        env:
          SSH_PRIVATE_KEY: ${{ secrets.VPS_SSH_KEY }}
          VPS_HOST: ${{ secrets.VPS_HOST }}
          VPS_USER: ${{ secrets.VPS_USER }}
        run: |
          echo "$SSH_PRIVATE_KEY" > private_key
          chmod 600 private_key
          scp -i private_key docker-compose.yml ${VPS_USER}@${VPS_HOST}:/root/docker-compose.yml
          ssh -i private_key ${VPS_USER}@${VPS_HOST} << 'EOF'
            docker pull ${{ secrets.DOCKER_USERNAME }}/my-nextjs-app:latest
            docker stop nextjs-app || true
            docker rm nextjs-app || true
            docker run -d -p 3000:3000 --name nextjs-app ${{ secrets.DOCKER_USERNAME }}/my-nextjs-app:latest
          EOF
```

## Diagnose and Fix Container Issues

1. **Check Logs**:

   ```sh
   docker logs <container_id>
   ```

2. **Inspect Container**:

   ```sh
   docker inspect <container_id>
   ```

3. **Remove Exited Container**:

   ```sh
   docker rm <container_id>
   ```

## Force Docker Image Rebuild

1. **Navigate to the Project Directory**:

   ```sh
   cd /path/to/your/project
   ```

2. **Build the Docker Image with `--no-cache`**:

   ```sh
   docker build --no-cache -t cv-template-app .
   ```
