![Recallab](https://github.com/stefan-vatov/recallab-api/raw/master/public/images/recallab-logo.png)

[![Build Status](https://semaphoreci.com/api/v1/thracian/recallab-ui/branches/master/badge.svg)](https://semaphoreci.com/thracian/recallab-ui)
[![David Dependencies](https://david-dm.org/stefan-vatov/recallab-ui.svg)](https://david-dm.org/stefan-vatov/recallab-ui)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3635b53bf5ef4203803eb6d9cd380c35)](https://www.codacy.com/app/thracian/recallab-ui?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=stefan-vatov/recallab-ui&amp;utm_campaign=Badge_Grade)
[![Dependency Status](https://dependencyci.com/github/stefan-vatov/recallab-ui/badge)](https://dependencyci.com/github/stefan-vatov/recallab-ui)
[![bitHound Overall Score](https://www.bithound.io/github/stefan-vatov/recallab-ui/badges/score.svg)](https://www.bithound.io/github/stefan-vatov/recallab-ui)
[![bitHound Dependencies](https://www.bithound.io/github/stefan-vatov/recallab-ui/badges/dependencies.svg)](https://www.bithound.io/github/stefan-vatov/recallab-ui/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/stefan-vatov/recallab-ui/badges/devDependencies.svg)](https://www.bithound.io/github/stefan-vatov/recallab-ui/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/stefan-vatov/recallab-ui/badges/code.svg)](https://www.bithound.io/github/stefan-vatov/recallab-ui)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

# Instructions

The authentication side is handled by [Auth0](https://auth0.com/). To run recallab you will need to register and create an app (there is a free tier). From there the necessary keys can be obtained.

Configuration values a passed from environment variables, you will need to provide the following values as such (to be changed in the future):
* `RECALLAB_AUTH0_CLIENTID`
* `RECALLAB_AUTH0_DOMAIN`
* `RECALLAB_API_URL`


`yarn install`

`yarn run dev` (more commands in `scripts` in package.json)


# Attributions

* Flask by IBIL∆B from the Noun Project

# License

MIT
