### useful commands:

client-side
- `npm run fullBuild`: run tests, build client code, then android app
- `npm run fullRun`: same as above, then run android app
- `npm run clientTest`: run client-side tests
- `npm run devEnv`: start a development environment (local server on port 5000 and automatic-build files in src)

server-side
- `npm run serverTest`: run server-side tests
- `deployServer`: deploy latest commit to heroku

### code review process:
- in the terminal:
```
// create a new branch
git checkout -b myNewFeature

// commit and push the changes
git add .
git ci -m "this is a new feature"
git push origin myNewFeature
```
- Then go to github website, and create a new pull request:
![alt](https://idratherbewriting.com/learnapidoc/images/github_new_pull_request.png)

Select your branch (myNewFeature) and click "create pull request"