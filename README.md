# Shine

Customer Service app from the book **Rails, Angular, Postgres, and Bootstrap** by _David Bryant Copeland_


### Notes:

* The `webpack-dev-server` installed by latest webpacker gives a `TypeError: Cannot read property 'compile' of undefined when running ./bin/webpack-dev-server` on `foreman start`. To fix, downgrade by running `yarn upgrade webpack-dev-server@^2.11.1`
* The `webpack-dev-server` installed when webpacker adds angular gives a `TypeError: Cannot read property 'afterCompile' of undefined` on `foreman start`. To fix, downgrade by running `yarn upgrade ts-loader@^3.5.0`
* Downgrade angular `yarn upgrade @angular/common@^4.1.3 @angular/compiler@^4.1.3 @angular/common@^4.1.3 @angular/compiler@^4.1.3  @angular/core@^4.1.3  @angular/forms@^4.1.3  @angular/http@^4.1.3  @angular/platform-browser@^4.1.3  @angular/platform-browser-dynamic@^4.1.3`
* Use `import "babel-polyfill";` in `customers.js` to make the capybara feature tests pass
* Don't use `config/webpack/shared.js`. Use `config/webpack/karma.js` in `spec/javascript/karma.conf.js`
* For 'html-loader', add loader to `config/webpack/environment.js`
    ```
    const html =  require('./loaders/html')
    environment.loaders.append('html', html)
    ```
