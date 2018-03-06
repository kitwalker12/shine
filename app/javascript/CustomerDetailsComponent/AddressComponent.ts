import { EventEmitter, Component } from "@angular/core";
import   template    from "./AddressComponent.html";

var AddressComponent = Component({
  selector: "shine-address",
  template: template,
  inputs: [
    "address",
    "addressType"
  ],
  outputs: [
    "addressChanged"
  ]
}).Class({
  constructor: [
    function() {
      this.address = null;
      this.addressType = null;
      this.addressChanged = new EventEmitter();
    }
  ],
  save: function(update) {
    this.addressChanged.emit(update);
  }
});

export { AddressComponent };
