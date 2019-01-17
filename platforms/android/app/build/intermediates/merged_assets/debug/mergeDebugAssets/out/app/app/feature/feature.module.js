"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var feature_service_1 = require("./feature.service"); // Import all services that will be used in the lazy loaded module
var feature_routing_1 = require("./feature.routing"); // import the routing module
var FeatureModule = /** @class */ (function () {
    function FeatureModule() {
    }
    FeatureModule = __decorate([
        core_1.NgModule({
            schemas: [core_1.NO_ERRORS_SCHEMA],
            imports: [
                //  NativeScriptModule,
                feature_routing_1.FeatureRoutingModule
            ],
            declarations: feature_routing_1.COMPONENTS.slice(),
            providers: [feature_service_1.FeatureService] // provide all services that will be used within the module
        })
    ], FeatureModule);
    return FeatureModule;
}());
exports.FeatureModule = FeatureModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUEyRDtBQUMzRCxxREFBbUQsQ0FBQyxrRUFBa0U7QUFDdEgscURBQXFFLENBQUMsNEJBQTRCO0FBYWxHO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBWHpCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1lBQzNCLE9BQU8sRUFBRTtnQkFDTix1QkFBdUI7Z0JBQ3RCLHNDQUFvQjthQUN2QjtZQUNELFlBQVksRUFDTCw0QkFBVSxRQUNoQjtZQUNELFNBQVMsRUFBRSxDQUFFLGdDQUFjLENBQUUsQ0FBQywyREFBMkQ7U0FDNUYsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvZmVhdHVyZS9mZWF0dXJlLm1vZHVsZS50c1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVNlcnZpY2UgfSBmcm9tIFwiLi9mZWF0dXJlLnNlcnZpY2VcIjsgLy8gSW1wb3J0IGFsbCBzZXJ2aWNlcyB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgbGF6eSBsb2FkZWQgbW9kdWxlXHJcbmltcG9ydCB7IEZlYXR1cmVSb3V0aW5nTW9kdWxlLCBDT01QT05FTlRTIH0gZnJvbSBcIi4vZmVhdHVyZS5yb3V0aW5nXCI7IC8vIGltcG9ydCB0aGUgcm91dGluZyBtb2R1bGVcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAvLyAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEZlYXR1cmVSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgLi4uQ09NUE9ORU5UU1xyXG4gICAgXSwgLy8gZGVjbGFyZSBhbGwgY29tcG9uZW50cyB0aGF0IHdpbGwgYmUgdXNlZCB3aXRoaW4gdGhlIG1vZHVsZVxyXG4gICAgcHJvdmlkZXJzOiBbIEZlYXR1cmVTZXJ2aWNlIF0gLy8gcHJvdmlkZSBhbGwgc2VydmljZXMgdGhhdCB3aWxsIGJlIHVzZWQgd2l0aGluIHRoZSBtb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNb2R1bGUgeyB9Il19