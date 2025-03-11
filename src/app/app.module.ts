import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
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
import { FooterMapComponent } from './footer-map/footer-map.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SearchbarComponent,
    AppointmentComponent,
    ContactComponent,
    CareerComponent,
    XRayComponent,
    MammographyComponent,
    BoneDensitometryComponent,
    UltrasoundComponent,
    CtScanComponent,
    VacuumAssistedBiopsComponent,
    VacuumAssistedExcisionComponent,
    CtGuidedBiopsyComponent,
    UltrasoundGuidedComponent,
    RadiofrequencyAblationComponent,
    VaricoseVeinAblationComponent,
    GuidedBlocksComponent,
    PetGuideComponent,
    NuclearMedicineComponent,
    ServicesComponent,
    FooterMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
