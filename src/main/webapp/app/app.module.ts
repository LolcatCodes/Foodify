import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { FoodifySharedModule } from 'app/shared/shared.module';
import { FoodifyCoreModule } from 'app/core/core.module';
import { FoodifyAppRoutingModule } from './app-routing.module';
import { FoodifyHomeModule } from './home/home.module';
import { FoodifyEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    FoodifySharedModule,
    FoodifyCoreModule,
    FoodifyHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    FoodifyEntityModule,
    FoodifyAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class FoodifyAppModule {}
