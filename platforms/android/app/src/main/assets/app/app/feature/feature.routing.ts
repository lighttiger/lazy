// app/feature/feature.routing
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { FeatureComponent } from "./feature.component";
import { TestComponent } from "./test/test.component";

export const COMPONENTS = [TestComponent, FeatureComponent];

export const routes: Routes = [
   // { path: "", component: TestComponent }
    { path: "", redirectTo: "test", pathMatch: "full" },
    { path: "test", component: TestComponent },
//feature
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class FeatureRoutingModule { }