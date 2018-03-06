import { Component } from "@angular/core";
import   template    from "./CustomerInfoComponent.html";

var CustomerInfoComponent = Component({
  selector: "shine-customer-info",
  template: template,
  inputs: [
    "customer"
  ]
}).Class({
  constructor: [
    function() {
      this.customer = null;
    }
  ]
});

export { CustomerInfoComponent };
