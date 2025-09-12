#!/bin/bash

# TRIZEN Website Deployment Script for CapRover
# Make sure to replace YOUR_CAPROVER_URL and YOUR_APP_NAME with actual values

set -e

echo "🚀 Starting TRIZEN website deployment to CapRover..."

# Configuration
CAPROVER_URL="https://captain.your-domain.com"  # Replace with your CapRover URL
APP_NAME="trizen-website"                        # Replace with your app name
CAPROVER_PASSWORD=""                             # Will be prompted for security

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if caprover CLI is installed
if ! command -v caprover &> /dev/null; then
    print_error "CapRover CLI is not installed. Installing now..."
    npm install -g caprover
fi

# Check if we're in the right directory
if [[ ! -f "captain-definition" ]]; then
    print_error "captain-definition file not found. Are you in the project root directory?"
    exit 1
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker and try again."
    exit 1
fi

print_status "Building and deploying TRIZEN website..."

# Login to CapRover (will prompt for password)
print_status "Logging in to CapRover..."
caprover login

# Deploy the application
print_status "Deploying application to CapRover..."
caprover deploy

print_status "✅ Deployment completed successfully!"
print_warning "Don't forget to:"
print_warning "1. Configure your domain in CapRover dashboard"
print_warning "2. Enable HTTPS/SSL certificate"
print_warning "3. Set up any environment variables if needed"
print_warning "4. Configure monitoring and backups"

echo ""
print_status "Your TRIZEN website should now be available at your configured domain!"
print_status "Visit your CapRover dashboard to manage the application: $CAPROVER_URL"
