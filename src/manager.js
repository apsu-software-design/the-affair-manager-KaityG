"use strict";
exports.__esModule = true;
exports.AffairManager = void 0;
var Member = /** @class */ (function () {
    function Member(name, email) {
        this.memberName = name;
        this.memberEmail = email;
    }
    Member.prototype.getName = function () { return this.memberName; };
    Member.prototype.getEmail = function () { return this.memberEmail; };
    Member.prototype.setMemberName = function (name) { this.memberName = name; };
    Member.prototype.setMemberEmail = function (email) { this.memberEmail = email; };
    return Member;
}());
var Members = /** @class */ (function () {
    function Members() {
        this.membersList = [];
        this.memberListSize = 0;
    }
    Members.prototype.addMemberToList = function (member) {
        this.memberListSize = this.membersList.push(member);
    };
    Members.prototype.getMember = function (name) {
        var i;
        for (i = 0; i < this.memberListSize; i++) {
            if (this.membersList[i].getName() == name) {
                return this.membersList[i];
            }
        }
        return null;
    };
    Members.prototype.getMemberList = function () { return this.membersList; };
    return Members;
}());
var Affair = /** @class */ (function () {
    function Affair(name, zipcode, date) {
        this.affairName = name;
        this.zipcode = zipcode;
        this.date = date;
        this.membersSize = 0;
        this.members = [];
    }
    Affair.prototype.getName = function () { return this.affairName; };
    Affair.prototype.setAffairName = function (name) { this.affairName = name; };
    Affair.prototype.setZipcode = function (zipcode) { this.zipcode = zipcode; };
    Affair.prototype.setDate = function (date) { this.date = date; };
    Affair.prototype.getMembers = function () { return this.members; };
    Affair.prototype.addMemberToAffairList = function (member) {
        this.membersSize = this.members.push(member);
    };
    Affair.prototype.getMembersFromAffair = function () {
        var membersName;
        var i = 0;
        for (i; i < this.membersSize; i++) {
            membersName.push(this.members[i].getName());
        }
        return membersName;
    };
    return Affair;
}());
var Affairs = /** @class */ (function () {
    function Affairs() {
        this.affairs = [];
        this.affairSize = 0;
    }
    Affairs.prototype.addAffairToList = function (affair) {
        this.affairSize = this.affairs.push(affair);
    };
    Affairs.prototype.getAffairSize = function () {
        return this.affairSize;
    };
    Affairs.prototype.getAffairs = function () {
        return this.affairs;
    };
    return Affairs;
}());
var Organization = /** @class */ (function () {
    function Organization(name) {
        this.orgName = name;
        this.affairs = [];
        this.affairSize = 0;
    }
    Organization.prototype.setOrgName = function (name) { this.orgName = name; };
    Organization.prototype.getOrgName = function () { return this.orgName; };
    Organization.prototype.getAffairs = function () { return this.affairs; };
    Organization.prototype.addAffairToOrg = function (affair) { this.affairSize = this.affairs.push(affair); };
    return Organization;
}());
var Organizations = /** @class */ (function () {
    function Organizations() {
        this.orgList = [];
        this.orgSize = 0;
    }
    Organizations.prototype.getOrgList = function () { return this.orgList; };
    Organizations.prototype.addOrgToList = function (org) { this.orgSize = this.orgList.push(org); };
    return Organizations;
}());
var AffairManager = /** @class */ (function () {
    function AffairManager() {
        this.affairs = new Affairs();
        this.members = new Members();
        this.orgs = new Organizations();
    }
    AffairManager.prototype.addMember = function (memberName, memberEmail) {
        var member = new Member(memberName, memberEmail);
        this.members.addMemberToList(member);
    };
    AffairManager.prototype.addAffair = function (affairName, zipcode, date) {
        var affair = new Affair(affairName, zipcode, date);
        this.affairs.addAffairToList(affair);
    };
    AffairManager.prototype.addOrganization = function (orgName) {
        var org = new Organization(orgName);
        this.orgs.addOrgToList(org);
    };
    AffairManager.prototype.addMemberToAffair = function (memberName, affairName) {
    };
    AffairManager.prototype.findMemberNames = function (query) {
        var memberArray = this.search(query, this.members);
        return memberArray;
    };
    AffairManager.prototype.findOrganizationNames = function (query) {
        var orgArray = this.search(query, this.orgs);
        return orgArray;
    };
    AffairManager.prototype.findAffairNames = function (query) {
        var affairArray = this.search(query, this.affairs);
        return affairArray;
    };
    AffairManager.prototype.modifyAffair = function (affairName, newTitle, newTime) {
        if (newTime == undefined) {
        }
    };
    AffairManager.prototype.search = function (searchName, array) {
        var filteredArray = array.filter(function (element) { element.getName() == searchName; });
        return filteredArray;
    };
    AffairManager.prototype.addAffairToOrganization = function (affairName, orgName) {
        var affair;
        var org;
        org.addAffairToOrg(affair);
    };
    AffairManager.prototype.getMembers = function (affairName) {
        var i = 0;
        var affair;
        for (i; i < this.affairs.getAffairSize(); i++) {
            if (this.affairs[i].getName() == affairName) {
                affair = this.affairs[i];
            }
        }
        var members;
        members = affair.getMembersFromAffair();
        return members;
    };
    return AffairManager;
}());
exports.AffairManager = AffairManager;
