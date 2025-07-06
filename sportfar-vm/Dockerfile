FROM ubuntu:24.04

# Prevent interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Set pnpm version (change as needed)
ENV PNPM_VERSION=10.10.0

# Update system and install dependencies
RUN apt update && apt install -y \
	curl \
	gnupg \
	ca-certificates \
	lsb-release \
	software-properties-common \
	build-essential \
	mysql-server \
	nano

# Install Node.js (LTS 18)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
	apt install -y nodejs

# Install pnpm
RUN npm install -g pnpm@${PNPM_VERSION}

# Configure pnpm (optional: set global store and some sensible defaults)
RUN pnpm config set store-dir /root/.pnpm-store && \
	pnpm config set auto-install-peers true && \
	pnpm config set shared-workspace-lockfile true

# Make sure MySQL runs in foreground for container use (optional: secure installation and create DB in compose)
EXPOSE 3306
EXPOSE 3000

# Start MySQL and keep container alive
CMD service mysql start && tail -f /dev/null
