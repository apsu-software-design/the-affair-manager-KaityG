public class Member{
    private memberName: string;
    private memberEmail: string;

    constructor(name:string, email:string)
    {
        this.memberName = name;
        this.memberEmail = email;
    }

    public getName():string {return this.memberName;}
    public getEmail():string {return this.memberEmail;}
    public setMemberName(name: string): void {this.memberName = name;}
    public setMemberEmail(email: string): void {this.memberEmail = email;}
    
}

public class Members{
    private membersList: Member[];
    private memberListSize: number;

    constructor()
    {
        this.membersList = [];
        this.memberListSize = 0;
    }

    public addMemberToList(member:Member): void
    {
        this.memberListSize = this.membersList.push(member);
    }

    public getMember():Member
    {
        for member in this.
    }
    public getMemberList(): Member[]{return this.membersList;}

}

public class Affair
{
    private affairName: string;
    private zipcode: string;
    private date: string;
    private members: Member[];
    private membersSize: number;

    constructor(name:string, zipcode: string, date:string)
    {
        this.memberName = name;
        this.memberEmail = zipcode;
        this.date = date;
        this.membersSize = 0;
        this.members = [];
    }

    public getName(): string {return this.affairName;}

    public setMemberName(name: string): void {this.memberName = name;}

    public setZipcode(zipcode:string): void{this.zipcode = zipcode;}

    public setDate(date: string): void {this.date = date;}

    public getMembers(): Member[] {return this.members;}

    public addMemberToAffairList(member: Member) : void
    {
        this.membersSize = this.members.push(member);
    }

    public getMembersFromAffair(): string[]
    {
        let membersName: string[];
        let i: number = 0;

        for(i; i < this.membersSize; i++)
        {
            membersName.push(this.members[i].getName()));
        }
       
       return this.members;
    }

public class Affairs{
    private affairs: Affair[];
    private affairSize: number;

    constructor()
    {
        this.affairList = [];
        this.affairSize = 0;
    }

    public addAffairToList(affair: Affair)
    {
        this.affairSize = this.affairs.push(affair);
    }

    public getAffairs(): Affair[]
    {
        return this.affairs;
    }

}

public class Organization
{
    private orgName: string;
    private affairs: Affair [];
    private affairSize: number;

    constructor(name:string)
    {
        this.orgName = name;
        this.affairs = [];
        this.affairSize = 0;
    }

    public setOrgName(name: string) :void {this.orgName = name;}
    public getOrgName():string {return this.orgName;}
    public getAffairs(): Affair[] {return this.affairs;}
    public addAffairToOrg(affair: Affair){this.affairSize = this.affairs.push(affair);}
}

public class Organizations
{
    private orgList: Organization[];
    private orgSize: number;

    constructor()
    {
        this.orgList = [];
        this.orgList = 0;
    }

    public getOrgList():Organization[] {return this.orgList;}
    public addOrgToList(org: Organization){this.orgSize = this.orgList.push(org);}
}

export class AffairManager
{
    private affairs: Affairs;
    private members: Members;
    private orgs: Organizations;

    constructor()
    {
        affairs = new Affairs;
        members = new Members;
        orgs = new Organizations;
    }

    public addMembers(memberName:string, memberEmail: string) : void
    {
        let member = Member(memberName, memberEmail);
        this.members.addMemberToList(member);
    }

    public addAffair(affairName:string, zipcode: string, date: string): void
    {
        let affair = Affair(affairName, zipcode, date);
        this.affairs.addAffairToList.(affair);
    }

    public addOrganization(orgName: string): void
    {
        let org = Organization(orgName);
        this.orgs.addOrgToList(org);
    }

    public findMemberNames(query: string) : string[]
    {
        search(query, members);
    }

    public findOrganizationNames(query: string) : string[]
    {
        search(query, orgs);
    }

    public findAffairNames(query: string) : string[]
    {
        search(query, affairs);
    }

    public modifyAffair(affairName: string, newTitle: string, newTime: string): void
    {
        if(newTime == undefined)
        {
            
        }
    }

    function search(searchName:string, array:any):any{
        let filteredArray = array.filter(function(element: any) {element.getName() == searchName;});
        return filteredArray;      

    }   

    public addAffairToOrganization(affairName: string, orgName: string): void
    {
        let affair: Affair:
        let org: Organization;

        org.addAffairToOrg(affair);
    }

    public getMembers(affairName: string)
    {
        affair.getAffairs();
    }
}

