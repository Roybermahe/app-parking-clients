import { Injectable } from '@angular/core';
import * as AppSettings from '@nativescript/core/application-settings';

@Injectable({ 
    providedIn: 'root' 
})
export class AppSettingService<T> {
    constructor() { }

    saveData(name: string,data: T) {
        AppSettings.setString(name, JSON.stringify(data));
    }

    getData(name: string): T {
        return <T>JSON.parse(AppSettings.getString(name, null)); 
    }
}