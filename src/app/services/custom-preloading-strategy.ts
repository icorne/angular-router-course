import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AuthStore } from './auth.store';

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {

  constructor(private readonly auth: AuthStore) {
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    let preloadSetting = route.data['preload'];
    if (preloadSetting === true) {
      return load()
    } else if (preloadSetting === 'auth') {
      return this.auth.isLoggedIn$
        .pipe(first())
        .pipe(map((loggedIn) => {
          if (loggedIn) {
            return load();
          } else {
            return of(null);
          }
        }));
    }
    return of(null);
  }

}
