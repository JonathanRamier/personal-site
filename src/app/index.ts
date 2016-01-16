/**
 * personal-site
 *
 * @file app.ts
 * @author Jonathan RAMIER <jramier@live.fr>
 * @licence NONE
 * @version 1.0
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'personal-jo',
    template: `
        <sidebar></sidebar>
        <div>Hello world</div>
    `
})
export class AppComponent {

    constructor() {
        console.log('toto-constructor')
    }

}