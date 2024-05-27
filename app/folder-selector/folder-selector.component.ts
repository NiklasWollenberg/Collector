// folder-selector.component.ts
import { Component } from '@angular/core';
import { ElectronService } from '../electron.service';

@Component({
  selector: 'app-folder-selector',
  templateUrl: './folder-selector.component.html',
  styleUrls: ['./folder-selector.component.css']
})
export class FolderSelectorComponent {
  xmlFiles: string[] = [];

  constructor(private electronService: ElectronService) { }

  selectFolder(): void {
    this.electronService.selectFolder().then(folderPath => {
      this.electronService.getXmlFiles(folderPath).then(xmlFiles => {
        this.xmlFiles = xmlFiles;
      }).catch((error: any) => {
        console.error('Error retrieving XML files:', error);
      });
    }).catch((error: any) => {
      console.error('Error selecting folder:', error);
    });
  }
}
