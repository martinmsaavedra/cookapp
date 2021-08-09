import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { loadingSpinnerComponent } from './loadingSpinner/loading-spinner.component';

@NgModule({
  declarations: [DropdownDirective, loadingSpinnerComponent],
  imports: [CommonModule],
  exports: [DropdownDirective, loadingSpinnerComponent, CommonModule],
})
export class SharedModule {}
