"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Address = /** @class */ (function () {
    function Address() {
        this.address_line_1 = "";
        this.address_line_2 = "";
        this.city = "";
        this.zipcode = "";
        this.state = "";
        this.phone = "";
        this.note = "";
    }
    return Address;
}());
exports.Address = Address;
var UserAddress = /** @class */ (function () {
    function UserAddress() {
        this.firstName = "";
        this.lastName = "";
        this.addressLine1 = "";
        this.addressLine2 = "";
        this.state = 0;
        this.city = 0;
        this.zipCode = "";
        this.phoneNumber = "";
        this.note = "";
    }
    return UserAddress;
}());
exports.UserAddress = UserAddress;
var StateCityAddress = /** @class */ (function () {
    function StateCityAddress() {
    }
    return StateCityAddress;
}());
exports.StateCityAddress = StateCityAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQVNJO1FBUk8sbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQVcsRUFBRSxDQUFDO0lBR3pCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSwwQkFBTztBQWFwQjtJQVdJO1FBVk8sY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFNBQUksR0FBVyxFQUFFLENBQUM7SUFFekIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxrQ0FBVztBQWdCeEI7SUFBQTtJQUdBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFkZHJlc3Mge1xyXG4gICAgcHVibGljIGFkZHJlc3NfbGluZV8xOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGFkZHJlc3NfbGluZV8yOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGNpdHk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgemlwY29kZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBzdGF0ZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBwaG9uZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBub3RlOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckFkZHJlc3Mge1xyXG4gICAgcHVibGljIGZpcnN0TmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIFxyXG4gICAgcHVibGljIGFkZHJlc3NMaW5lMTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBhZGRyZXNzTGluZTI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgc3RhdGU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY2l0eTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB6aXBDb2RlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIHBob25lTnVtYmVyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIG5vdGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZUNpdHlBZGRyZXNzIHtcclxuICAgIHN0YXRlOiBudW1iZXI7XHJcbiAgICBjaXR5OiBudW1iZXI7XHJcbn0iXX0=