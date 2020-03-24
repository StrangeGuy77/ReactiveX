import { Observable, Observer } from "rxjs";
// Si el import viene directamente del directorio raíz rxjs significa que está enfocado a CREAR Observables.

// const obs$ = Observable.create();

interface IState {
  test: string;
}

const observer: Observer<IState> = {
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log("Completed ._. XD")
};

const obs$ = new Observable<IState>(subs => {
  subs.next({
    test: ""
  });
  subs.next({
    test: "Test"
  });

  subs.complete();
  // Subscribers no seguirán recibiendo los next a partir del complete();
  subs.next({
    test: "Test"
  });
});

obs$.subscribe(observer);
