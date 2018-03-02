import "hello_angular/polyfills";

import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Http,HttpModule } from "@angular/http";

var CustomerSearchComponent = Component({
  selector: "shine-customer-search",
  template: ' \
    <header> \
      <h1 class="h2">Customer Search</h1> \
    </header> \
    <section class="search-form"> \
      <form> \
        <div class="input-group input-group-lg"> \
          <label class="sr-only" for="keywords">Keywords</label> \
          <input type="text" name="keywords" id="keywords" placeholder="First Name, Last Name, or Email Address" class="form-control input-lg" \
            bindon-ngModel="keywords"> \
          <span class="input-group-btn"> \
            <input type="submit" name="commit" value="Find Customers" class="btn btn-primary btn-lg" \
              on-click="search()" > \
          </span> \
        </div> \
      </form> \
    </section> \
    <section class="search-results"> \
      <header> \
        <h1 class="h3">Results</h1> \
      </header> \
      <ol class="list-group"> \
        <li class="list-group-item clearfix" *ngFor="let customer of customers"> \
          <h3 class="pull-right"><small class="text-uppercase">Joined</small> {{customer.created_at}}</h3> \
          <h2> \
            {{customer.first_name}} {{customer.last_name}} \
            <small>{{customer.username}}</small> \
          </h2> \
          <h4>{{customer.email}}</h4> \
        </li> \
      </ol> \
    </section> \
  '
}).Class({
  constructor: [
    Http,
    function(http){
      this.keywords = null;
      this.customers = null;
      this.http = http;
    }
  ],
  search: function() {
    var self = this;
    self.http.get("/customers.json?keywords=" + self.keywords).subscribe(function(response) {
      self.customers = response.json().customers;
    }, function(response) {
      console.log(response);
    });
  }
});

var CustomerAppModule = NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ CustomerSearchComponent ],
  bootstrap:    [ CustomerSearchComponent ]
}).Class({
  constructor: function() {}
});

platformBrowserDynamic().bootstrapModule(CustomerAppModule);
