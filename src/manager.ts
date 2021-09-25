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
class Member{
    constructor(name:string, email:string)
    {
        this.name = name;
        this.email = email;
    }
    getName(){return this.name;}
    setMemberName(newName:string){this.name = name;}
    getMemberEmail(){return this.email;}
    setMemberEmail(newEmail:string){this.email = newEmail;}
}

/**
 * Organization class
 * -----------------------------
 * fields: name
 * creates organization object
 * gets and sets name
 * */
class Organization extends Affair{
    constructor(name:string){
        this.name = name;
        this.affairList = new List();
    }
    getName(){return name;}
    setOrgName(newName:string){this.name = newName;}
    addAffairToList(affair:Affair)
    {
        pop.affairList(affair);
    }
}

/**
 * Affair class
 * -----------------------------
 * fields: name, date, zipcode
 * creates affair object
 * gets and sets name, date and zipcode
 * */
class Affair extends Member { 
    constructor(name:string, date:string, zipcode:string, memberList:Member)
    {
        this.name = name;
        this.date = date;
        this.zipcode = zipcode;
        this.membersOfAffairList = new List();
    }


    getName(){return this.name;}
    getAffairDate(){return this.date;}
    getAffairZipcode(){return this.zipcode;}
    setAffairName(newName:string){this.name = newName;}
    setAffairDate(newDate:string){this.date = newDate;}
    setAffairZipcode(newZipcode:string){this.zipcode = newZipcode;}
    displayMembers(member:Member)
    {
        return member.getName() + " " + member.getMemberEmail();
    }
    getMembers(){
        membersOfAffairList.forEach(displayMembers);
    }

    addMemberToList(member:Member){
        pop.membersOfAffairList(member);
    }

}

//Affair Manager
class AffairManager {

    constructor(){
        Affair affairObject;
        Member memberObject;
        Organization orgObject;

        List memberList = new List();

        List affairList = new List();

        List orgList = new List();
    }

    addMember(name:string, email:string)
    {
        memberObject = new Member(name, email);
        pop.memberList(memberObject);
    }
    
    addAffair(name:string, zipcode:string, date:string){
        affairObject = new Affair(name, zipcode, date);
        pop.affairList(affairObject);

    }

    addOrganization(name:string){
        orgObject = new Organization(name);
        pop.orgList(orgObject);
    }

    addMembersToAffair(memName:string, affairName:string){
        affairObject = affairList.map(search, affairName);
        memberObject = memberList.map(search, memName);

        affairObject.addMemberToList(member);

    }

    modifyAffair(affairName:string, newTitle:string, newTime:string)
    {
        affairObject = affairList.map(search, affairName);

        affairObject.setAffairName(newTitle);
        affairObject.setAffairDate(newTime);
    }

    addAffairToOrganization(affairName:string){
        affairObject = affairList.map(search, name)
        affairObject.addAffairToList(affairObject);
    }

    findMembersName(name:string){
        memberObject = memberList.map(search, name);
        return(memberObject.getName() + " " + memberObject.getMemberEmail());

    }

    findAffairName(name:string){
        affairObject = memberList.map(search, name);
        return(affairObjet.getName() + " " + affairObject.getAffairZipcode() + " " + affairObject.getAffairDate());

    }

    findOrganizationName(name:string){
        memberObject = memberList.map(search, name);
        return(memberObject.getName());
    }

    getMembersFromAffair(name:string){
        affairObject = affairList.map(search, name);
        affairObject.getMembers();
    }

    search(object:Object, name:string)
    {
        if(object.getName() == name){
        return object;
        }
        return "not found";
    }
}








