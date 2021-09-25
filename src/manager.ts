//your code goes here!
//import List library
var List = require("collections/list");
var Map = require("collections/map");


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
    getMemberName(){return this.name;}
    setMemberName(newName:string){this.name = name;}
    getMemberEmail(){return this.email;}
    setMemberEmail(newEmail:string){this.email = newEmail;}
    addMemberToMemberList(member:Member)
}

/**
 * Organization class
 * -----------------------------
 * fields: name
 * creates organization object
 * gets and sets name
 * */
class Organization{
    constructor(name:string){
        this.name = name;
        this.affairList = new List();
    }
    getOrgName(){return name;}
    setOrgName(newName:string){this.name = newName;}
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
        this.memberList = new List();
    }


    getAffairName(){return this.name;}
    getAffairDate(){return this.date;}
    getAffairZipcode(){return this.zipcode;}
    setAffairName(newName:string){this.name = newName;}
    setAffairDate(newDate:string){this.date = newDate;}
    setAffairZipcode(newZipcode:string){this.zipcode = newZipcode;}

}

//Affair Manager
class AffairManager{
    let memberList = new List();

    let affairList = new List();

    let orgList = new List();

    addMember(name:string, email:string)
    {
        Member member = new Member(name, email);
        pop.memberList(member);
    }
    
    addAffair(name:string, zipcode:string, date:string){
        Affair affair = new Affair(name, zipcode, date);
        pop.affairList(affair);

    }
    addOrganization(name:string){
        Organization organization = new Organization(name);
        pop.orgList(organization);
    }
    addMembersToAffair(memName:string, affairName:string){
        search(memName);


    }
    modifyAffair(affairName:string, newTitle:string, newTime:string)
    {
        //search and return affair using affairName
        affair.setAffairName(newTitle);
        affair.setAffairDate(newTime);
    }
    addAffairToOrganization(){}
    findMembersName(name:string){
        search(name);

    }
    findAffairName(name:string){
        search(name);
    }
    findOrganizationName(name:string){
        search(name);
    }
    getMembersFromAffair(name:string){}

    search(){
        
    }
}








