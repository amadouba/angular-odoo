import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatDialogModule, MatTableModule, MatMenuModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatTabsModule} from '@angular/material/tabs';





@NgModule({
    declarations: [
      
    ],
    imports: [
      MatInputModule,
      MatButtonModule, 
      MatSelectModule, 
      MatIconModule,
      MatCardModule,
      CommonModule,
      MatToolbarModule, 
      MatDialogModule, 
      MatTableModule, 
      MatMenuModule,
      MatFormFieldModule,
      MatDividerModule,
      MatSidenavModule,
      MatListModule,
      MatExpansionModule,
      MatTabsModule,
    ],
    exports:[
        MatSelectModule, 
            CommonModule,
        MatToolbarModule, 
        MatButtonModule, 
        MatCardModule, 
        MatInputModule, 
        MatDialogModule, 
        MatTableModule, 
        MatMenuModule,
        MatIconModule,
        MatFormFieldModule,
        MatDividerModule,
        MatSidenavModule,
        MatListModule,
        MatExpansionModule,
        MatTabsModule,

    ]
})
export class CustomMatModule{}


