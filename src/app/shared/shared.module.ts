import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/utils/form/form.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainComponent } from './components/layout/main/main.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ButtonsComponent } from './components/utils/buttons/buttons.component';
import { InputsComponent } from './components/utils/inputs/inputs.component';

@NgModule({
  declarations: [
    FormComponent,
    DashboardComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ButtonsComponent,
    InputsComponent,
  ],
  imports: [CommonModule],
  exports: [InputsComponent, ButtonsComponent, FormComponent, DashboardComponent, HeaderComponent, MainComponent, FooterComponent ],
})
export class SharedModule {}
