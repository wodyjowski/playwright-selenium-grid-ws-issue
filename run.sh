#!/bin/bash   
docker-compose -f ./selenium-grid.yml up -d
npm i

export SELENIUM_REMOTE_URL="http://localhost:4444"
npx playwright test --headed
read  -n 1 -p "Press any key to exit..."