# EvenTag Landing

Landing page para EvenTag - Aplicación Next.js dockerizada para producción.

## 🚀 Desarrollo Local

### Prerrequisitos
- Docker y Docker Compose
- Node.js 20+ y pnpm (opcional, para desarrollo sin Docker)

### Desarrollo con Docker
```bash
# Desarrollo con hot reload
docker-compose --profile dev up

# O manualmente
docker build -f Dockerfile.dev -t eventag-dev .
docker run -p 3000:3000 -v $(pwd):/app eventag-dev
```

### Desarrollo tradicional
```bash
pnpm install
pnpm dev
```

## 📦 Producción

### Build rápido para hackaton
```bash
# Script automático de build
./scripts/build-prod.sh

# O manualmente
docker build -t eventag-landing:latest .
```

### Deploy simple
```bash
# Deploy completo (stop, build, start)
./scripts/deploy.sh

# O usando docker-compose
docker-compose up -d
```

### Comandos útiles
```bash
# Ver logs en tiempo real
docker-compose logs -f

# Parar la aplicación
docker-compose down

# Rebuild sin cache
docker-compose build --no-cache

# Acceder al contenedor
docker-compose exec app sh
```

## 🌐 Acceso

- **Desarrollo**: http://localhost:3000
- **Producción**: http://localhost:3000

## 🔧 Estructura Docker

- `Dockerfile`: Build optimizado multi-stage para producción
- `Dockerfile.dev`: Build simple para desarrollo
- `docker-compose.yml`: Orquestación de servicios
- `.dockerignore`: Archivos excluidos del build
- `scripts/`: Scripts de automatización para deploy

## 📝 Notas para Hackaton

Esta configuración está optimizada para simplicidad y velocidad de deploy, perfecta para hackaton:

- Build rápido con caché de dependencias
- Scripts automáticos de deploy
- Configuración mínima requerida
- Hot reload en desarrollo
- Imagen optimizada para producción

## 🚀 Deploy en Servidor

Para deploy en servidor remoto:

```bash
# Copiar archivos al servidor
scp -r . user@server:/path/to/app

# En el servidor
./scripts/deploy.sh
```

O usar el Dockerfile directamente en plataformas como Railway, Render, etc.