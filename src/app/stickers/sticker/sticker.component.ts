import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'orb-sticker',
    templateUrl: 'sticker.component.html',
    styleUrls: ['sticker.component.css']
})
export class StickerComponent {
    @Input() ident: number = 0;
    @Input() url: string = '';
    @Input() title: string = '';

    @Output() contador: number = 0;

    adicionar() {
        //window.alert('ident: ' + ident);
        this.contador = this.contador + 1;
    }

    remover() {
        if (this.contador > 0) {
            this.contador = this.contador - 1;
        }
        else {
            window.alert('Sticker encontra-se com quantidade igual a zero');
        }
    }

}