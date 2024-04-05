import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

interface Alert {
  title: string,
  subTitle: string,
  successful: boolean
}
const DEFAULT_TOAST_TIMEOUT = 5000;

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert$$: BehaviorSubject<Alert | null> = new BehaviorSubject<Alert | null>(null);
  public alert$ = this.alert$$.asObservable();

  success(alert: Omit<Alert, 'successful'>, timeout = DEFAULT_TOAST_TIMEOUT) {
    this.alert$$.next({ ...alert, successful: true});
    this.removeAlert(timeout);
  }

  error(alert: Omit<Alert, 'successful'>, timeout = DEFAULT_TOAST_TIMEOUT) {
    this.alert$$.next({ ...alert, successful: false});
    this.removeAlert(timeout);
  }

  private removeAlert(timeout: number) {
    setTimeout(() => {
      this.alert$$.next(null);
    }, timeout);
  }
}
