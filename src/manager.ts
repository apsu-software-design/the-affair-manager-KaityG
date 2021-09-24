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
class Affair{
    constructor(name:string, date:string, zipcode:string)
    {
        this.name = name;
        this.date = date;
        this.zipcode = zipcode;
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
    findMembersName(){

    }
    fineAffairName(){}
    findOrganizationName(){}
    getMembersFromAffair(){}
}

/**
 * Register class
 * -----------------------------
 * fields: name, email
 * a member object
 * gets and sets name and email
 * */
class Register{
    let memberList = new List();
    let affairList = new List();
    let organizationList = new List();
    let membersInAffairList = new List();

    addMember(name:string, email:string)
    {
        Member member = new Member(name, email);
        pop.this.memberList(member);
        console.log("Member added");
    }
    addOrganization(name:string)
    {
        Organization member = new Organization(name);
        pop.this.organization(organization);
        console.log("Organization added");
    }
    addAffair(name:string, date:string, zipcode:string)
    {
        Affair affair = new Affair(name, date, zipcode)   
        pop.this.affairList(affair);
        console.log("Affair added");
    }
    
    addMemberToAffair(affairName:string, member:Member){
        //put search function to return the correct affair
        pop.this.membersInAffairList(member);
    }

    modifyAffair(affairName:string, newTitle:string, newTime:string)
    {
        //search and return affair using affairName
        affair.setAffairName(newTitle);
        affair.setAffairDate(newTime);
    }
    search(elementName:string)
    {
           if(elementName == listName){
               return true;
       }
    }


}







