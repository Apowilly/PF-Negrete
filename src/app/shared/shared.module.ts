import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitulosDirective } from './titulos.directive';
import { FullNamePipe } from './full-name.pipe';



@NgModule({
  declarations: [
    TitulosDirective,
    FullNamePipe
  ],
  imports: [
    CommonModule
  ],exports: [TitulosDirective,FullNamePipe]
  
})
export class SharedModule { }
