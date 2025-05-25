import { Component } from '@angular/core';

@Component({
  selector: 'whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.css']
})
export class WhatsappButtonComponent {
  whatsappNumber: string = '123456789';

  openWhatsApp() {
    window.open(`https://wa.me/${this.whatsappNumber}`, '_blank');
  }
}