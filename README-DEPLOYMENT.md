# TRIZEN Website Deployment Guide

This guide will help you deploy the TRIZEN website to CapRover.

## Prerequisites

1. **CapRover Server**: Have a CapRover instance running
2. **Domain**: A domain pointing to your CapRover server
3. **CapRover CLI**: Install globally with `npm install -g caprover`
4. **Docker**: Make sure Docker is installed and running

## Files Overview

- `Dockerfile` - Multi-stage Docker build for production
- `captain-definition` - CapRover deployment configuration
- `nginx.conf` - Nginx configuration for serving the React app
- `.dockerignore` - Files to exclude from Docker build
- `docker-compose.yml` - Local testing with Docker Compose
- `deploy.sh` - Automated deployment script

## Deployment Steps

### 1. Prepare CapRover

1. Create a new app in your CapRover dashboard
2. Name it `trizen-website` (or update the name in deploy.sh)
3. Note your CapRover URL and app name

### 2. Configure Deployment Script

Edit `deploy.sh` and update:
```bash
CAPROVER_URL="https://captain.your-domain.com"  # Your CapRover URL
APP_NAME="trizen-website"                        # Your app name
```

### 3. Deploy Using Script

```bash
# Make script executable (Linux/Mac)
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### 4. Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Login to CapRover
caprover login

# Deploy the app
caprover deploy
```

### 5. Post-Deployment Configuration

1. **Domain Setup**: Configure your domain in CapRover dashboard
2. **HTTPS**: Enable SSL certificate (Let's Encrypt recommended)
3. **Environment Variables**: Set any required environment variables
4. **Monitoring**: Set up monitoring and health checks

## Local Testing

Test the Docker build locally before deploying:

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build and run manually
docker build -t trizen-website .
docker run -p 8080:80 trizen-website
```

Visit `http://localhost:8080` to test locally.

## Build Configuration

The Dockerfile uses a multi-stage build:

1. **Builder Stage**: Installs dependencies and builds the React app
2. **Production Stage**: Serves the built app with Nginx

## Nginx Configuration

The nginx.conf includes:
- Client-side routing support (React Router)
- Static asset caching
- Security headers
- Gzip compression
- Health check endpoint

## Environment Variables

Currently no environment variables are required, but you can add them in CapRover if needed for:
- API endpoints
- Analytics tracking IDs
- Feature flags

## Troubleshooting

### Build Issues
- Check that all dependencies are in package.json
- Ensure the build command works locally: `npm run build`

### Deployment Issues
- Verify CapRover CLI is installed: `caprover --help`
- Check Docker is running: `docker info`
- Ensure you're in the project root directory

### Runtime Issues
- Check CapRover logs in the dashboard
- Verify the health check endpoint: `http://your-domain/health`
- Test locally with Docker first

## Security Considerations

1. **HTTPS**: Always enable HTTPS in production
2. **Headers**: Security headers are configured in nginx.conf
3. **Updates**: Keep base images and dependencies updated
4. **Secrets**: Never commit sensitive data to the repository

## Performance Optimization

The deployment includes:
- Gzip compression
- Static asset caching (1 year)
- HTML caching (1 hour)
- Optimized Docker layers

## Support

For deployment issues:
1. Check CapRover documentation: https://caprover.com/docs/
2. Review Docker build logs
3. Test locally with Docker Compose
4. Check CapRover dashboard logs

## Updates

To update the deployed application:
1. Push changes to your repository
2. Run the deployment script again
3. CapRover will rebuild and redeploy automatically
