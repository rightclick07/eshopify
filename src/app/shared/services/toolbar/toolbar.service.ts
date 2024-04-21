import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor() { }
  private showMainToolbarSubject = new BehaviorSubject<boolean>(true);
  private showSearchToolbarSubject = new BehaviorSubject<boolean>(false);
  get showMainToolbar$() {
    return this.showMainToolbarSubject.asObservable();
  }

  setShowMainToolbar(show: boolean) {
    this.showMainToolbarSubject.next(show);
  }
  get showSearchToolbar$() {
    return this.showSearchToolbarSubject.asObservable();
  }

  setShowSearchToolbar(show: boolean) {
    this.showSearchToolbarSubject.next(show);
  }
}
