import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor(){
    // no colocar cosas asyncronas
    // se ejecuta antes del render
    // solo corre una unida vez y no mas

    console.log('constructor');
    console.log('--'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    // se ejecuta antes del render pero tambien durante
    console.log('ngonchanges');
    console.log('--'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration){
      this.doSomething();
    }
  }
  
  ngOnInit(){
    //renderiza el componente
    //corre una vez
    // se puede incluir algo asyncrono
    console.log('ngOnInit');
    console.log('--'.repeat(10));
    console.log('duration => ', this.duration)
    console.log('message => ', this.message)
  }
  
  ngAfterViewInit(){
    // antes de renderizar como el ngOnInit
    // para saber si los hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('--'.repeat(10));
  }
  
  ngOnDestroy(){
    // Ver cuando el componente se destruye
    // como destruirlo? con ngIf
    console.log('ngOnDestroy');
    console.log('--'.repeat(10));

  }

  doSomething(){
    console.log("cambio");
    // asyng. etc
  }
}
