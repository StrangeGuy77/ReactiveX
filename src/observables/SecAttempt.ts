import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log("Completed ._. XD")
};

const interval$ = new Observable<any>(subs => {
  // Counter
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    counter === 10 ? subs.unsubscribe() : subs.next(counter);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
  };
});

const subscription = interval$.subscribe(observer);

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
