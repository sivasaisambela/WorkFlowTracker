import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  
  projects: any[] = [];

  constructor(private projectService:ProjectsService) 
  { 

  }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (respose:Project[])=>{
        this.projects=respose;
      }
    );
  }

}
