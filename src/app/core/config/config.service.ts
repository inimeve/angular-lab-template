import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {SidebarService} from '../components/sidebar/sidebar.service';
import {Store} from '@ngrx/store';
import {AppState} from '../state/core.state';
import {ConfigState} from './state/config.reducer';
import {selectConfigState} from './state/config.selectors';
import {configToggleSidebarState} from './state/config.actions';

export function configServiceInitializerFactory(configService: ConfigService, sidebarService: SidebarService) {
  return () => configService.load()
    .then((config: any) => {
      // UI-CONFIG
      sidebarService.setConfig(config.defaultSidebarState);
    });
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private CONFIG_PATH: string = 'assets/config/ui-config.json';

  private configLoaded: boolean = false;

  private config: any;

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  public getConfig(): any {
    return this.config;
  }

  public load(): Promise<any> {
    if (this.configLoaded) {
      return of(this, this.config).toPromise();
    } else {
      const configObservable = this.http.get(this.CONFIG_PATH);
      configObservable
        .pipe(catchError(error => {
            console.log(`error loading configuration: ${JSON.stringify(error)}`);
            return of();
          }))
        .subscribe(config => {
          this.config = config;
          console.log(`got configuration: ${JSON.stringify(this.config)}`);
          this.configLoaded = true;
        });
      return configObservable.toPromise();
    }
  }

  public getConfigState(): Observable<ConfigState> {
    return this.store.select(selectConfigState);
  }

  public toggleSidebarState(): void {
    this.store.dispatch(configToggleSidebarState());
  }

}
