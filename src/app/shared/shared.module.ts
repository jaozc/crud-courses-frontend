import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoriesPipe } from './pipes/categories.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [CategoriesPipe, ConfirmationDialogComponent, ErrorDialogComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [
    CategoriesPipe
],
})
export class SharedModule {}
