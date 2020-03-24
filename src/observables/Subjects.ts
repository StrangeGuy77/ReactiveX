import { Observable } from "rxjs";

const interval$ = new Observable<number>(subs => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 3000);
  return () => clearInterval(intervalID);
});

/**
 * 1. Casteo múltiple.
 * 2. También es un observer.
 * 3. next, error, complete.
 */

const Subject$ = new Subject<number>();
interval$.subscribe(Subject$);

const subs1 = interval$.subscribe(console.log);
const subs2 = interval$.subscribe(console.log);

setTimeout(() => {
  Subject$.next(10);
  Subject$.complete();
}, 3000);
