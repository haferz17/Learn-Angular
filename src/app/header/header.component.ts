import { Component } from '@angular/core';
@Component({
    // moduleId: module.id,
    selector: 'HeaderBlock',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    headerTitle: string;
    userName: string;
    constructor(){
        this.headerTitle = 'Learn Angular';
        this.userName = 'Rizqi';
    }
}