"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var feature_service_1 = require("./feature.service"); // Import all services that will be used in the lazy loaded module
var feature_routing_1 = require("./feature.routing"); // import the routing module
// for dataform !IMPORTANT or things won't work correctly 
var angular_1 = require("nativescript-ui-dataform/angular");
var FeatureModule = /** @class */ (function () {
    function FeatureModule() {
    }
    FeatureModule = __decorate([
        core_1.NgModule({
            schemas: [core_1.NO_ERRORS_SCHEMA],
            imports: [
                //  NativeScriptModule,
                feature_routing_1.FeatureRoutingModule,
                angular_1.NativeScriptUIDataFormModule
            ],
            declarations: feature_routing_1.COMPONENTS.slice(),
            providers: [feature_service_1.FeatureService] // provide all services that will be used within the module
        })
    ], FeatureModule);
    return FeatureModule;
}());
exports.FeatureModule = FeatureModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUEyRDtBQUMzRCxxREFBbUQsQ0FBQyxrRUFBa0U7QUFDdEgscURBQXFFLENBQUMsNEJBQTRCO0FBR2xHLDBEQUEwRDtBQUMxRCw0REFBZ0Y7QUFjaEY7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFaekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsT0FBTyxFQUFFO2dCQUNOLHVCQUF1QjtnQkFDdEIsc0NBQW9CO2dCQUNwQixzQ0FBNEI7YUFDL0I7WUFDRCxZQUFZLEVBQ0wsNEJBQVUsUUFDaEI7WUFDRCxTQUFTLEVBQUUsQ0FBRSxnQ0FBYyxDQUFFLENBQUMsMkRBQTJEO1NBQzVGLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2ZlYXR1cmUvZmVhdHVyZS5tb2R1bGUudHNcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTZXJ2aWNlIH0gZnJvbSBcIi4vZmVhdHVyZS5zZXJ2aWNlXCI7IC8vIEltcG9ydCBhbGwgc2VydmljZXMgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIGxhenkgbG9hZGVkIG1vZHVsZVxyXG5pbXBvcnQgeyBGZWF0dXJlUm91dGluZ01vZHVsZSwgQ09NUE9ORU5UUyB9IGZyb20gXCIuL2ZlYXR1cmUucm91dGluZ1wiOyAvLyBpbXBvcnQgdGhlIHJvdXRpbmcgbW9kdWxlXHJcblxyXG5cclxuLy8gZm9yIGRhdGFmb3JtICFJTVBPUlRBTlQgb3IgdGhpbmdzIHdvbid0IHdvcmsgY29ycmVjdGx5IFxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgLy8gIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBGZWF0dXJlUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgLi4uQ09NUE9ORU5UU1xyXG4gICAgXSwgLy8gZGVjbGFyZSBhbGwgY29tcG9uZW50cyB0aGF0IHdpbGwgYmUgdXNlZCB3aXRoaW4gdGhlIG1vZHVsZVxyXG4gICAgcHJvdmlkZXJzOiBbIEZlYXR1cmVTZXJ2aWNlIF0gLy8gcHJvdmlkZSBhbGwgc2VydmljZXMgdGhhdCB3aWxsIGJlIHVzZWQgd2l0aGluIHRoZSBtb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNb2R1bGUgeyB9Il19