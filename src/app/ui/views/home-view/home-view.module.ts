import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeViewRoutingModule } from './home-view-routing.module';
import { HomeViewComponent } from './home-view.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  declarations: [HomeViewComponent, CardComponent],
  imports: [CommonModule, HomeViewRoutingModule],
  exports: [],
})
export class HomeViewModule {}
