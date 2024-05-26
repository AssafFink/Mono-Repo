# Inherit current image from an alpine image containing node (for latest versions use node:alpine):
FROM node:18-alpine3.19

# Install nodemon:
RUN npm i -g pnpm

# Create an empty directory for project files and set it as the Current Directory:
WORKDIR /app

# Copy local package.json & package-lock.json into /app:
COPY package.json /app

# Install npm dependencies & devDependencies:
RUN pnpm i

# Copy project local files (first dot) into /app:
COPY . /app

# Execute "npm start" inside /app (WORKDIR) when container starts:
ENTRYPOINT pnpm start
