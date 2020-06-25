import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Word } from '../models/word.model';

@Injectable({
  providedIn: 'root'
})
export class SynonymsManagerService {

  constructor(private http: HttpClient) { }

  public getWords(): Observable<Word[]> {
    return this.http.get<Word[]>(
      `${environment.apiUrl}/SynonymsManagement`
    );
  }

  public addWord(req: Word): Observable<any> {
    return this.http.post<Word>(`${environment.apiUrl}/SynonymsManagement`, req);
  }
}
