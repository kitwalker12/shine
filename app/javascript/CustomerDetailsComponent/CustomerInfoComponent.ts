import { EventEmitter, Component } from "@angular/core";
import   template    from "./CustomerInfoComponent.html";

var CustomerInfoComponent = Component({
  selector: "shine-customer-info",
  template: template,
  inputs: [
    "customer"
  ],
  outputs: [
    "customerInfoChanged"
  ]
}).Class({
  constructor: [
    function() {
      this.customer = null;
      this.customerInfoChanged = new EventEmitter();
    }
  ],
  save: function(update) {
    this.customerInfoChanged.emit(update);
  }
});

export { CustomerInfoComponent };
