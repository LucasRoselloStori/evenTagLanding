#!/bin/bash

# Script para build de producción
echo "🚀 Building production Docker image..."

# Build the production image
docker build -t eventag-landing:latest .

echo "✅ Production image built successfully!"
echo "📦 Image: eventag-landing:latest"
echo ""
echo "To run the production container:"
echo "docker run -p 3000:3000 eventag-landing:latest"
echo ""
echo "Or use docker-compose:"
echo "docker-compose up"
