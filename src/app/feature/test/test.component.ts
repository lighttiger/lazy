import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"; 
import { UserAddress } from "../../shared/data-services/address";

@Component({
    selector: "test",
    moduleId: module.id,
    templateUrl: "./test.component.html",
    styleUrls:["./test.component.css"]
})
export class TestComponent implements OnInit {
    private _userAddress: UserAddress;


    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this._userAddress = new UserAddress();

    }

     
    get userAddress(): UserAddress {
        return this._userAddress;
    }

}
