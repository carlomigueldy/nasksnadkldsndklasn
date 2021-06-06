import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from 'src/app/ui/components/app-button/app-button.component';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  declarations: [AppButtonComponent],
  exports: [AppButtonComponent],
  imports: [CommonModule],
})
export class SharedModule {}
