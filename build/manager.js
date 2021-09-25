"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var List = require("collections/list");
var Map = require("collections/map");
var Member = (function () {
    function Member(name, email) {
        this.name = name;
        this.email = email;
    }
    Member.prototype.getName = function () { return this.name; };
    Member.prototype.setMemberName = function (newName) { this.name = name; };
    Member.prototype.getMemberEmail = function () { return this.email; };
    Member.prototype.setMemberEmail = function (newEmail) { this.email = newEmail; };
    return Member;
}());
var Organization = (function (_super) {
    __extends(Organization, _super);
    function Organization(name) {
        var _this = this;
        _this.name = name;
        _this.affairList = new List();
        return _this;
    }
    Organization.prototype.getName = function () { return name; };
    Organization.prototype.setOrgName = function (newName) { this.name = newName; };
    Organization.prototype.addAffairToList = function (affair) {
        pop.affairList(affair);
    };
    return Organization;
}(Affair));
var Affair = (function (_super) {
    __extends(Affair, _super);
    function Affair(name, date, zipcode, memberList) {
        var _this = this;
        _this.name = name;
        _this.date = date;
        _this.zipcode = zipcode;
        _this.membersOfAffairList = new List();
        return _this;
    }
    Affair.prototype.getName = function () { return this.name; };
    Affair.prototype.getAffairDate = function () { return this.date; };
    Affair.prototype.getAffairZipcode = function () { return this.zipcode; };
    Affair.prototype.setAffairName = function (newName) { this.name = newName; };
    Affair.prototype.setAffairDate = function (newDate) { this.date = newDate; };
    Affair.prototype.setAffairZipcode = function (newZipcode) { this.zipcode = newZipcode; };
    Affair.prototype.displayMembers = function (member) {
        return member.getName() + " " + member.getMemberEmail();
    };
    Affair.prototype.getMembers = function () {
        membersOfAffairList.forEach(displayMembers);
    };
    Affair.prototype.addMemberToList = function (member) {
        pop.membersOfAffairList(member);
    };
    return Affair;
}(Member));
var AffairManager = (function () {
    function AffairManager() {
        this.affairObject = new Affair();
        this.memberObject = new Member();
        this.orgObject = new Organization();
    }
    return AffairManager;
}());
var memberList = new List();
var affairList = new List();
var orgList = new List();
addMember(name, string, email, string);
{
    Member;
    member = new Member(name, email);
    pop.memberList(member);
}
addAffair(name, string, zipcode, string, date, string);
{
    Affair;
    affair = new Affair(name, zipcode, date);
    pop.affairList(affair);
}
addOrganization(name, string);
{
    Organization;
    organization = new Organization(name);
    pop.orgList(organization);
}
addMembersToAffair(memName, string, affairName, string);
{
    affairObject = affairList.map(search, affairName);
    memberObject = memberList.map(search, memName);
    affairObject.addMemberToList(member);
}
modifyAffair(affairName, string, newTitle, string, newTime, string);
{
    affairObject = affairList.map(search, affairName);
    affairObject.setAffairName(newTitle);
    affairObject.setAffairDate(newTime);
}
addAffairToOrganization(affairName, string);
{
    affairObject = affairList.map(search, name);
    affairObject.addAffairToList(affairObject);
}
findMembersName(name, string);
{
    memberObject = memberList.map(search, name);
    return (memberObject.getName() + " " + memberObject.getMemberEmail());
}
findAffairName(name, string);
{
    affairObject = memberList.map(search, name);
    return (affairObjet.getName() + " " + affairObject.getAffairZipcode() + " " + affairObject.getAffairDate());
}
findOrganizationName(name, string);
{
    memberObject = memberList.map(search, name);
    return (memberObject.getName());
}
getMembersFromAffair(name, string);
{
    affairObject = affairList.map(search, name);
    affairObject.getMembers();
}
search(object, Object, name, string);
{
    if (object.getName() == name) {
        return object;
    }
    return "not found";
}
//# sourceMappingURL=manager.js.map