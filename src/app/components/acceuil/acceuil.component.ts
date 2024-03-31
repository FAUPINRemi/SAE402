import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const mlElement = this.el.nativeElement.querySelector('#ML');
    if (mlElement) {
      mlElement.classList.add('blink');
    }
  }
}