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
//your code goes here!
//import List library
var List = require("collections/list");
/**
 * Member class
 * -----------------------------
 * fields: name, email
 * creates member object
 * gets and sets name and email
 * */
var Member = /** @class */ (function () {
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
/**
 * Organization class
 * -----------------------------
 * fields: name
 * creates organization object
 * gets and sets name
 * */
var Organization = /** @class */ (function (_super) {
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
/**
 * Affair class
 * -----------------------------
 * fields: name, date, zipcode
 * creates affair object
 * gets and sets name, date and zipcode
 * */
var Affair = /** @class */ (function (_super) {
    __extends(Affair, _super);
    function Affair(name, date, zipcode) {
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
var affairObject;
var memberObject;
var orgObject;
var memberList = new List();
var affairList = new List();
var orgList = new List();
//Affair Manager
var AffairManager = /** @class */ (function () {
    function AffairManager() {
    }
    AffairManager.prototype.addMember = function (name, email) {
        memberObject = new Member(name, email);
        pop.memberList(memberObject);
    };
    AffairManager.prototype.addAffair = function (name, zipcode, date) {
        affairObject = new Affair(name, zipcode, date);
        pop.affairList(affairObject);
    };
    AffairManager.prototype.addOrganization = function (name) {
        orgObject = new Organization(name);
        pop.orgList(orgObject);
    };
    AffairManager.prototype.addMembersToAffair = function (memName, affairName) {
        affairObject = affairList.map(search, affairName);
        memberObject = memberList.map(search, memName);
        affairObject.addMemberToList(member);
    };
    AffairManager.prototype.modifyAffair = function (affairName, newTitle, newTime) {
        affairObject = affairList.map(search, affairName);
        affairObject.setAffairName(newTitle);
        affairObject.setAffairDate(newTime);
    };
    AffairManager.prototype.addAffairToOrganization = function (affairName) {
        affairObject = affairList.map(search, name);
        affairObject.addAffairToList(affairObject);
    };
    AffairManager.prototype.findMembersName = function (name) {
        memberObject = memberList.map(search, name);
        return (memberObject.getName() + " " + memberObject.getMemberEmail());
    };
    AffairManager.prototype.findAffairName = function (name) {
        affairObject = memberList.map(search, name);
        return (affairObjet.getName() + " " + affairObject.getAffairZipcode() + " " + affairObject.getAffairDate());
    };
    AffairManager.prototype.findOrganizationName = function (name) {
        memberObject = memberList.map(search, name);
        return (memberObject.getName());
    };
    AffairManager.prototype.getMembersFromAffair = function (name) {
        affairObject = affairList.map(search, name);
        affairObject.getMembers();
    };
    AffairManager.prototype.search = function (object, name) {
        if (object.getName() == name) {
            return object;
        }
        return "not found";
    };
    return AffairManager;
}());
