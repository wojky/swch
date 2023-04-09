import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CATS_API_URL } from 'src/app/core/injection-tokens';

export interface CatsApiDTO {
  data: string[];
}

@Injectable({
  providedIn: 'root',
})
export class CatsApiService {
  private URL = inject(CATS_API_URL);
  private http = inject(HttpClient);

  getFact() {
    return this.http.get<CatsApiDTO>(this.URL).pipe(map(({ data }) => data[0]));
  }
}
