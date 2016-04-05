# Sync Screen Test

Just a simple proof in concept. Slides rotate each second.

## Getting Started

1. [Install Meteor JS](https://www.meteor.com/install)
2. `git clone https://github.com/geekydatamonkey/sync-screen-test.git`
3. `cd sync-screen-test`
4. `npm install`
5. `meteor`

Meteor will install and compile and necessary packages. Once it's complete, you can view the homepage on `http://localhost:3000`.

## Routes

`/`
Homepage. See which slide is currently active on the server.

`/slides/:slideNumber`
Slide Page. Displays a slide ONLY when active (as determined by the server).
