import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  AvailableFunds!: number;
  Designation!: string;
  Username!: string;
  NoOfTeamMembers!: number;
  TotalCostOfAllProjects!: number;
  PendingTasks!: number;
  UpComingProjects!: number;
  ProjectCost!: number;
  ToDay:Date;

  CurrentExpenditure!: number;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: string[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  constructor(private dashboardService:DashboardService) {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 65;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 14;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 32321211;
    this.CurrentExpenditure = 423222;
    this.AvailableFunds = 29323232;
    this.ToDay= new Date();
    this.TeamMembersSummary=this.dashboardService.getTeamMembersSummary();
  }


  ngOnInit(): void {
    this.Clients = ["FactSet Europe.", "KPMG IT", "Abbott", "Capital One Financial", "Bank of America"];
    this.Projects = ["Fox OnRoll", "Actso Reserv", "Biling Mgmt", "Procurement Warehouse"];
    this.Years = ["2019-2024", "2018-2022", "2017-2024", "2016-2021"];
    // for(var i=2022;i>=2017;i--)
    // {
    //   this.Years.push(i);
    // }

    
    // this.TeamMembersSummary = [{ Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4 },
    // { Region: "South", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8 },
    // { Region: "West", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1 },
    // { Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6 }
    // ];

    this.TeamMembers = [
      {

        Region: "East", Members: [
          { ID: 1, Name: "Stewie", Status: "Available" },
          { ID: 2, Name: "Peter", Status: "Available" },
          { ID: 3, Name: "Chris", Status: "Busy" },
          { ID: 4, Name: "Lious", Status: "Busy" }
        ]
      },
      

      {

        Region: "West", Members: [
          { ID: 5, Name: "Meg", Status: "Busy" },
          { ID: 6, Name: "Brain", Status: "Available" },
          { ID: 7, Name: "Quagmire", Status: "Available" },
          { ID: 8, Name: "Joe", Status: "Busy" }
        ]
      },
      {
        Region: "South", Members: [
          { ID: 9, Name: "Jones", Status: "Busy" },
          { ID: 10, Name: "Miller", Status: "Available" },
          { ID: 11, Name: "Ford", Status: "Busy" },
          { ID: 12, Name: "James", Status: "Busy" }
        ]
      },

      {
        Region: "North", Members: [
          { ID: 13, Name: "Donnoven", Status: "Busy" },
          { ID: 14, Name: "Lindsy", Status: "Available" },
          { ID: 15, Name: "Alex", Status: "Busy" },
          { ID: 16, Name: "Rupert", Status: "Busy" }
        ]
      }

    ];






  }

  onProjectChange($event:any)
  {
    if($event.target.innerHTML=="Fox OnRoll")
    {
     this.ProjectCost=54232322;
     this.CurrentExpenditure=2323232;
     this.AvailableFunds = this.ProjectCost - this.CurrentExpenditure;
    }
    if($event.target.innerHTML=="Actso Reserv")
    {
     this.ProjectCost=64298790;
     this.CurrentExpenditure=143287;
     this.AvailableFunds = this.ProjectCost - this.CurrentExpenditure;
    }
    if($event.target.innerHTML=="Biling Mgmt")
    {
     this.ProjectCost=75656331;
     this.CurrentExpenditure=212111;
     this.AvailableFunds = this.ProjectCost - this.CurrentExpenditure;
    }
    if($event.target.innerHTML=="Procurement Warehouse")
    {
     this.ProjectCost=97878787;
     this.CurrentExpenditure=14437589;
     this.AvailableFunds = this.ProjectCost - this.CurrentExpenditure;
    }
  }

}
