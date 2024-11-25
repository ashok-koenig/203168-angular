import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-creation-operator',
  standalone: true,
  imports: [],
  templateUrl: './creation-operator.component.html',
  styleUrl: './creation-operator.component.css'
})
export class CreationOperatorComponent {
  constructor(){
      // Creating Observable using Observable constructor
      const myObservable = new Observable( observer => {
        observer.next("My Observer next value");
        observer.next("Another value from My observer")
        observer.complete()
      })
      myObservable.subscribe({
        next: (value)=> console.log(value),
        error: (error)=> console.log(error),
        complete: ()=> console.log('Completed')
      })
      // Method 2 using 'of' function
      const secondObservable = of('Value from of function', 'Another value from of function');
      secondObservable.subscribe((val)=>console.log(val))
      // Method 3 using 'from' function for array of values
      const thirdObservable = from([1, 2, 3, 4, 5])
      thirdObservable.subscribe((value)=> console.log(value))
  }
}
