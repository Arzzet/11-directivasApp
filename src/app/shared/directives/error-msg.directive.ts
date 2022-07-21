import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color: string = 'red';
  private _mensaje: string = 'Este es el mensaje duwoiiii';

  htmlELement: ElementRef<HTMLElement>;

  @Input() set color(valor: string){
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje(valor: string ){
    this._mensaje = valor;
    this.setMensaje();
  }
  @Input() set valido(valor: boolean ){
   if(valor){
     this.el.nativeElement.classList.add('hidden');
   } else {
     this.el.nativeElement.classList.remove('hidden');
   }
    
  }

  constructor(private el: ElementRef<HTMLElement>) { 
    
    this.htmlELement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {

    // if(changes.mensaje){
    //   const mensaje = changes.mensaje.currentValue;
    //   this.el.nativeElement.innerText = mensaje;
    // }
    
    // if(changes.color){
    // const color = changes.color.currentValue;
    // this.el.nativeElement.style.color = color;
    // }


  }
  ngOnInit(): void {
    console.log('ngOnInit directiva');
    this.setColor();
    this.setMensaje();
  }

  setEstilo(): void {
    this.el.nativeElement.classList.add('text-input');
  }

  setColor(): void {
    this.el.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.el.nativeElement.innerText = this._mensaje;
  }


}
