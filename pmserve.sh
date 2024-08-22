#!/bin/bash

export PATH=$PATH:/Users/astro/.nvm/versions/node/v20.15.1/bin

/Users/astro/.nvm/versions/node/v20.15.1/bin/pm2 stop server-test-01
/Users/astro/.nvm/versions/node/v20.15.1/bin/pm2 delete server-test-01
/Users/astro/.nvm/versions/node/v20.15.1/bin/pm2 start /Users/astro/Documents/GitHub/20240722hostingPracticeLocalhost/app.js  --name server-test-01
# /Users/astro/.nvm/versions/node/v20.15.1/bin/pm2 monit
date
