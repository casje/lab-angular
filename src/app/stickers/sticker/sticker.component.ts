import { Component, Input } from '@angular/core';

@Component({
    selector: 'orb-sticker',
    templateUrl: 'sticker.component.html',
    styleUrls: ['sticker.component.css']
})
export class StickerComponent {
    @Input() url: string = '';
    @Input() title: string = '';
}