import { Component } from "@angular/core";
import   template    from "./AddressComponent.html";

var AddressComponent = Component({
  selector: "shine-address",
  template: template,
  inputs: [
    "address",
    "addressType"
  ]
}).Class({
  constructor: [
    function() {
      this.address = null;
      this.addressType = null;
    }
  ]
});

export { AddressComponent };
