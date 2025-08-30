#!/bin/bash

# Script simple para deploy (ideal para hackaton)
echo "🚀 Starting deployment..."

# Stop any running containers
echo "📱 Stopping existing containers..."
docker-compose down

# Build new image
echo "🔨 Building new image..."
docker-compose build

# Start the application
echo "▶️ Starting application..."
docker-compose up -d

echo "✅ Deployment completed!"
echo "🌐 Application is running at http://localhost:3000"

# Show logs
echo "📝 Showing logs (press Ctrl+C to exit)..."
docker-compose logs -f
