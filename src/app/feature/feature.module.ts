// app/feature/feature.module.ts
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FeatureService } from "./feature.service"; // Import all services that will be used in the lazy loaded module
import { FeatureRoutingModule, COMPONENTS } from "./feature.routing"; // import the routing module


// for dataform !IMPORTANT or things won't work correctly 
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
       //  NativeScriptModule,
        FeatureRoutingModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        ...COMPONENTS
    ], // declare all components that will be used within the module
    providers: [ FeatureService ] // provide all services that will be used within the module
})
export class FeatureModule { }