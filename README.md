# Selenium Grid > 4.5.0 issue replication

Issue with ws communication via selenium-hub: https://github.com/microsoft/playwright/issues/18892  

## Requirements
- Node.js
- Docker

## How to use
Execute `run.sh`.  
Changing selenium-hub version to 4.5.0 in `selenium-grid.yml` file fixes the issue.
