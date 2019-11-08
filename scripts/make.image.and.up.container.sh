# This file should be used only via Makefile
# Read ./Notes/docker/ReadmeDocker for explanation

# Example of usage of ENV variables from makefile(start via commandline) -> docker -> node in container
ENV_VARIABLE="$1"

# Build docker image
docker image build -t tests:1.0 .

# Start docker container
docker run --env ENV=$ENV_VARIABLE --rm -it tests:1.0 bash

# If bash is needed - just add "bash" (should be listed in Dockerfile also)
#docker run --env ENV=$ENV_VARIABLE --rm -it tests:1.0 bash