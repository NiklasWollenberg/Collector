// electron.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  private ipcRenderer: any;

  constructor() {
    if ((window as any).require) {
      try {
        this.ipcRenderer = (window as any).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron IPC renderer is not available.');
    }
  }

  selectFolder(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (this.ipcRenderer) {
        this.ipcRenderer.invoke('select-folder').then((folderPath: string) => {
          resolve(folderPath);
        }).catch((error: any) => {
          reject(error);
        });
      } else {
        reject('Electron IPC renderer is not available.');
      }
    });
  }

  getXmlFiles(folderPath: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      if (this.ipcRenderer) {
        this.ipcRenderer.invoke('get-xml-files', folderPath).then((xmlFiles: string[]) => {
          resolve(xmlFiles);
        }).catch((error: any) => {
          reject(error);
        });
      } else {
        reject('Electron IPC renderer is not available.');
      }
    });
  }
}
