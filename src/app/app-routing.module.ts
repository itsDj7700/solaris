import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { XRayComponent } from './x-ray/x-ray.component';
import { MammographyComponent } from './mammography/mammography.component';
import { BoneDensitometryComponent } from './bone-densitometry/bone-densitometry.component';
import { UltrasoundComponent } from './ultrasound/ultrasound.component';
import { CtScanComponent } from './ct-scan/ct-scan.component';
import { VacuumAssistedBiopsComponent } from './vacuum-assisted-biops/vacuum-assisted-biops.component';
import { VacuumAssistedExcisionComponent } from './vacuum-assisted-excision/vacuum-assisted-excision.component';
import { CtGuidedBiopsyComponent } from './ct-guided-biopsy/ct-guided-biopsy.component';
import { UltrasoundGuidedComponent } from './ultrasound-guided/ultrasound-guided.component';
import { RadiofrequencyAblationComponent } from './radiofrequency-ablation/radiofrequency-ablation.component';
import { VaricoseVeinAblationComponent } from './varicose-vein-ablation/varicose-vein-ablation.component';
import { GuidedBlocksComponent } from './guided-blocks/guided-blocks.component';
import { PetGuideComponent } from './pet-guide/pet-guide.component';
import { NuclearMedicineComponent } from './nuclear-medicine/nuclear-medicine.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'contact',component:ContactComponent},
  {path:'career',component:CareerComponent},
  {path:'facility',children:[
    {path:'radiology',children:[
      {path:'x-ray',component:XRayComponent},
      {path:'mammography',component:MammographyComponent},
      {path:'bone-densitometry',component:BoneDensitometryComponent},
      {path:'ultrasound',component:UltrasoundComponent},
      {path:'ct-scan',component:CtScanComponent},
    ]},
    {path:'biopsy-and-ablation',children:[
      {path:'vacuum_assisted_biopsy',component:VacuumAssistedBiopsComponent},
      {path:'vacuum_assisted_excision',component:VacuumAssistedExcisionComponent},
      {path:"ct_guided_biopsy",component:CtGuidedBiopsyComponent},
      {path:'ultrasound_guided',component:UltrasoundGuidedComponent},
      {path:'radiofrequency_ablation',component:RadiofrequencyAblationComponent},
      {path:'varicose_vein_ablation',component:VaricoseVeinAblationComponent},
      {path:'guided_blocks',component:GuidedBlocksComponent},
      {path:'pet_guide',component:PetGuideComponent},
    ]},
    {path:'nuclear_medicine',component:NuclearMedicineComponent},

  ]},
  {path:'services',component:ServicesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
