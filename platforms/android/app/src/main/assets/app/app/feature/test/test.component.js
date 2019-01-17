"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var address_1 = require("../../shared/data-services/address");
var TestComponent = /** @class */ (function () {
    function TestComponent(route) {
        this.route = route;
    }
    TestComponent.prototype.ngOnInit = function () {
        this._userAddress = new address_1.UserAddress();
    };
    Object.defineProperty(TestComponent.prototype, "userAddress", {
        get: function () {
            return this._userAddress;
        },
        enumerable: true,
        configurable: true
    });
    TestComponent = __decorate([
        core_1.Component({
            selector: "test",
            moduleId: module.id,
            templateUrl: "./test.component.html",
            styleUrls: ["./test.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQsOERBQWlFO0FBUWpFO0lBSUksdUJBQ1ksS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO0lBRTFDLENBQUM7SUFHRCxzQkFBSSxzQ0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBaEJRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBQyxDQUFDLHNCQUFzQixDQUFDO1NBQ3JDLENBQUM7eUNBTXFCLHVCQUFjO09BTHhCLGFBQWEsQ0FrQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7IFxyXG5pbXBvcnQgeyBVc2VyQWRkcmVzcyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGF0YS1zZXJ2aWNlcy9hZGRyZXNzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInRlc3RcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Rlc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbXCIuL3Rlc3QuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF91c2VyQWRkcmVzczogVXNlckFkZHJlc3M7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3VzZXJBZGRyZXNzID0gbmV3IFVzZXJBZGRyZXNzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICBcclxuICAgIGdldCB1c2VyQWRkcmVzcygpOiBVc2VyQWRkcmVzcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJBZGRyZXNzO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=