import { Component } from '@angular/core';
@Component({
  selector: 'whatsapp-button',
  template: `
    <a 
      href='https://wa.me/11234567890' 
      class='fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors'
      target='_blank'
      rel='noopener noreferrer'
    >
      <i class='fab fa-whatsapp'></i>
    </a>
  `,
  styles: []
})
export class WhatsAppButtonComponent {}
