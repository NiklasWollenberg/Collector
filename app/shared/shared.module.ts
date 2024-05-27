// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderSelectorComponent } from '../folder-selector/folder-selector.component';

@NgModule({
  declarations: [FolderSelectorComponent],
  imports: [CommonModule],
  exports: [FolderSelectorComponent]
})
export class SharedModule { }
