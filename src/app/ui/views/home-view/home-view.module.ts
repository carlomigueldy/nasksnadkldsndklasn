import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeViewRoutingModule } from './home-view-routing.module';
import { HomeViewComponent } from './home-view.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [HomeViewComponent],
  imports: [CommonModule, HomeViewRoutingModule, SharedModule],
  exports: [],
})
export class HomeViewModule {}
