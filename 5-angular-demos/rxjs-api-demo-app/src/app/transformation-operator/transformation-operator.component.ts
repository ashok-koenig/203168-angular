import { Component } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-transformation-operator',
  standalone: true,
  imports: [],
  templateUrl: './transformation-operator.component.html',
  styleUrl: './transformation-operator.component.css'
})
export class TransformationOperatorComponent {
  mapOperatorDemo(){
    const source = from([1,2,3,4,5])
    const afterMap = source.pipe(map(value=> value * 10))
    afterMap.subscribe((val)=>console.log(val))
  }
}
