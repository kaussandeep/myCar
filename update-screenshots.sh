#!/bin/bash -x

set -e

# Get the version of the installed @playwright/test
playwrightVersion=$(npm list @playwright/test | awk '{print $2}' | cut -d "@" -f3 | sed -n 2p)

# creating an interactive bash shell in the container
docker run -d --name mycar1 --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v$playwrightVersion-focal

# The actual generate/update the reference screenshots is running from the machine running this shell script
docker exec mycar1 /bin/sh -c "npm run test:all --update-snapshots"

docker stop mycar1
