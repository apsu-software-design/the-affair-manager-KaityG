class Member{
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

class Members
{
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

    public getMember(name:string):Member
    {
        let i:number;
        for (i = 0; i < this.memberListSize; i++)
        {
            if (this.membersList[i].getName() == name)
            {
                return this.membersList[i];
            }
        }
        
        return null;
    }
    public getMemberList(): Member[]{return this.membersList;}

}

class Affair
{
    private affairName: string;
    private zipcode: string;
    private date: string;
    private members: Member[];
    private membersSize: number;

    constructor(name:string, zipcode: string, date:string)
    {
        this.affairName = name;
        this.zipcode = zipcode;
        this.date = date;
        this.membersSize = 0;
        this.members = [];
    }

    public getName(): string {return this.affairName;}

    public setAffairName(name: string): void {this.affairName = name;}

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
            membersName.push(this.members[i].getName());
        }
       
       return membersName;
    }
}

class Affairs{
    private affairs: Affair[];
    private affairSize: number;

    constructor()
    {
        this.affairs = [];
        this.affairSize = 0;
    }

    public addAffairToList(affair: Affair)
    {
        this.affairSize = this.affairs.push(affair);
    }

    public getAffairSize()
    {
        return this.affairSize;
    }
    public getAffairs(): Affair[]
    {
        return this.affairs;
    }

}

class Organization
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

class Organizations
{
    private orgList: Organization[];
    private orgSize: number;

    constructor()
    {
        this.orgList = [];
        this.orgSize = 0;
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
        this.affairs = new Affairs();
        this.members = new Members();
        this.orgs = new Organizations();
    }

    public addMember(memberName:string, memberEmail: string) : void
    {
        let member = new Member(memberName, memberEmail);
        this.members.addMemberToList(member);
    }

    public addAffair(affairName:string, zipcode: string, date: string): void
    {
        let affair = new Affair(affairName, zipcode, date);
        this.affairs.addAffairToList(affair);
    }

    public addOrganization(orgName: string): void
    {
        let org = new Organization(orgName);
        this.orgs.addOrgToList(org);
    }

    public addMemberToAffair(memberName:string, affairName:string): void
    {
        
    }
    public findMemberNames(query: string) : string[]
    {
        let memberArray = this.search(query, this.members);
        return memberArray;
    }

    public findOrganizationNames(query: string) : string[]
    {
        let orgArray = this.search(query, this.orgs);
        return orgArray;
    }

    public findAffairNames(query: string) : string[]
    {
        let affairArray = this.search(query, this.affairs);
        return affairArray;
    }

    public modifyAffair(affairName: string, newTitle: string, newTime: string): void
    {
        if(newTime == undefined)
        {
            
        }
    }

    private search(searchName:string, array:any[]):any[]{
        let filteredArray = array.filter(function(element: any) {element.getName() == searchName;});
        return filteredArray;  
    }   
  

    public addAffairToOrganization(affairName: string, orgName: string): void
    {
        let affair: Affair;
        let org: Organization;

        org.addAffairToOrg(affair);
    }

    public getMembers(affairName: string):string[]
    {
        let i:number = 0;
        let affair:Affair;

        for(i; i < this.affairs.getAffairSize(); i++)
        {
            if(this.affairs[i].getName() == affairName)
            {
                affair = this.affairs[i];
            }
        }

        let members:string[];
        members = affair.getMembersFromAffair();
        
        return members;
    }
}

