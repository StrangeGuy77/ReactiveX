import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log("Completed ._. XD")
};
