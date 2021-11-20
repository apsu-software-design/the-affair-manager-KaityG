"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffairManager = void 0;
class Member {
    constructor(name, email) {
        this.memberName = name;
        this.memberEmail = email;
    }
    getName() { return this.memberName; }
    getEmail() { return this.memberEmail; }
    setMemberName(name) { this.memberName = name; }
    setMemberEmail(email) { this.memberEmail = email; }
}
class Members {
    constructor() {
        this.membersList = [];
        this.memberListSize = 0;
    }
    addMemberToList(member) {
        this.memberListSize = this.membersList.push(member);
    }
    getMember(name) {
        let i;
        for (i = 0; i < this.memberListSize; i++) {
            if (this.membersList[i].getName() == name) {
                return this.membersList[i];
            }
        }
        return null;
    }
    getMemberList() { return this.membersList; }
}
class Affair {
    constructor(name, zipcode, date) {
        this.affairName = name;
        this.zipcode = zipcode;
        this.date = date;
        this.membersSize = 0;
        this.members = [];
    }
    getName() { return this.affairName; }
    setAffairName(name) { this.affairName = name; }
    setZipcode(zipcode) { this.zipcode = zipcode; }
    setDate(date) { this.date = date; }
    getMembers() { return this.members; }
    addMemberToAffairList(member) {
        this.membersSize = this.members.push(member);
    }
    getMembersFromAffair() {
        let membersName;
        let i = 0;
        for (i; i < this.membersSize; i++) {
            membersName.push(this.members[i].getName());
        }
        return membersName;
    }
}
class Affairs {
    constructor() {
        this.affairs = [];
        this.affairSize = 0;
    }
    addAffairToList(affair) {
        this.affairSize = this.affairs.push(affair);
    }
    getAffairs() {
        return this.affairs;
    }
}
class Organization {
    constructor(name) {
        this.orgName = name;
        this.affairs = [];
        this.affairSize = 0;
    }
    setOrgName(name) { this.orgName = name; }
    getOrgName() { return this.orgName; }
    getAffairs() { return this.affairs; }
    addAffairToOrg(affair) { this.affairSize = this.affairs.push(affair); }
}
class Organizations {
    constructor() {
        this.orgList = [];
        this.orgSize = 0;
    }
    getOrgList() { return this.orgList; }
    addOrgToList(org) { this.orgSize = this.orgList.push(org); }
}
class AffairManager {
    constructor() {
        this.affairs = new Affairs;
        this.members = new Members;
        this.orgs = new Organizations;
    }
    addMembers(memberName, memberEmail) {
        let member = new Member(memberName, memberEmail);
        this.members.addMemberToList(member);
    }
    addAffair(affairName, zipcode, date) {
        let affair = new Affair(affairName, zipcode, date);
        this.affairs.addAffairToList(affair);
    }
    addOrganization(orgName) {
        let org = new Organization(orgName);
        this.orgs.addOrgToList(org);
    }
    findMemberNames(query) {
        let memberArray = this.search(query, this.members);
        return memberArray;
    }
    findOrganizationNames(query) {
        let orgArray = this.search(query, this.orgs);
        return orgArray;
    }
    findAffairNames(query) {
        let affairArray = this.search(query, this.affairs);
        return affairArray;
    }
    modifyAffair(affairName, newTitle, newTime) {
        if (newTime == undefined) {
        }
    }
    search(searchName, array) {
        let filteredArray = array.filter(function (element) { element.getName() == searchName; });
        return filteredArray;
    }
    addAffairToOrganization(affairName, orgName) {
        let affair;
        let org;
        org.addAffairToOrg(affair);
    }
    getMembers(affairName) {
        this.affairs.getAffairs();
    }
}
exports.AffairManager = AffairManager;
//# sourceMappingURL=manager.js.map