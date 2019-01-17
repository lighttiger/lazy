"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app/feature/feature.routing
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var feature_component_1 = require("./feature.component");
var test_component_1 = require("./test/test.component");
exports.COMPONENTS = [test_component_1.TestComponent, feature_component_1.FeatureComponent];
exports.routes = [
    // { path: "", component: TestComponent }
    { path: "", redirectTo: "test", pathMatch: "full" },
    { path: "test", component: test_component_1.TestComponent },
];
var FeatureRoutingModule = /** @class */ (function () {
    function FeatureRoutingModule() {
    }
    FeatureRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(exports.routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], FeatureRoutingModule);
    return FeatureRoutingModule;
}());
exports.FeatureRoutingModule = FeatureRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZS5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOEJBQThCO0FBQzlCLHNDQUF5QztBQUV6QyxzREFBdUU7QUFDdkUseURBQXVEO0FBQ3ZELHdEQUFzRDtBQUV6QyxRQUFBLFVBQVUsR0FBRyxDQUFDLDhCQUFhLEVBQUUsb0NBQWdCLENBQUMsQ0FBQztBQUUvQyxRQUFBLE1BQU0sR0FBVztJQUMzQix5Q0FBeUM7SUFDeEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNuRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7Q0FFN0MsQ0FBQztBQU1GO0lBQUE7SUFBb0MsQ0FBQztJQUF4QixvQkFBb0I7UUFKaEMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLGNBQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxvQkFBb0IsQ0FBSTtJQUFELDJCQUFDO0NBQUEsQUFBckMsSUFBcUM7QUFBeEIsb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2ZlYXR1cmUvZmVhdHVyZS5yb3V0aW5nXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdGVzdC90ZXN0LmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVFMgPSBbVGVzdENvbXBvbmVudCwgRmVhdHVyZUNvbXBvbmVudF07XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgIC8vIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBUZXN0Q29tcG9uZW50IH1cclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJ0ZXN0XCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcclxuICAgIHsgcGF0aDogXCJ0ZXN0XCIsIGNvbXBvbmVudDogVGVzdENvbXBvbmVudCB9LFxyXG4vL2ZlYXR1cmVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLCAgLy8gc2V0IHRoZSBsYXp5IGxvYWRlZCByb3V0ZXMgdXNpbmcgZm9yQ2hpbGRcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlUm91dGluZ01vZHVsZSB7IH0iXX0=