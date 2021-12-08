import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OverviewRoutingModule } from './overview-routing.module';
import { LoginComponent } from './login/login.component';
import { QuoteoverviewComponent } from './quoteoverview/quoteoverview.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
    entryComponents: [
                      LoginComponent
                    ],
    imports: [
      CommonModule,
      OverviewRoutingModule,
      MatTableModule,
      MatToolbarModule,
      MatTabsModule,
      MatButtonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule
    ],

  declarations: [
      LoginComponent,
      QuoteoverviewComponent
                 ]
})
export class OverviewModule { }