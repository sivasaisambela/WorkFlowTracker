import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { SkillsComponent } from './skills/skills.component';
import { WizardfinishedComponent } from './wizardfinished/wizardfinished.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import {DashboardService} from '../app/dashboard.service';
import { ProjectsComponent } from './projects/projects.component';



const routes: Routes = [
  {path:"Dashboard",component:DashboardComponent},
  {path:"About",component:AboutComponent},
  {path:"Projects",component:ProjectsComponent},
  {path:"step-1",component:PersonaldetailsComponent},
  {path:"Profile",component:PersonaldetailsComponent},
 
  {path:"step-2",component:ContactdetailsComponent},
  {path:"step-4",component:WorkexperienceComponent},
  {path:"step-3",component:SkillsComponent},
  {path:"wizard-finished",component:WizardfinishedComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers:[DashboardService]
})
export class AppRoutingModule { }
