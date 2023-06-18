import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  private apiUrl = 'http://127.0.0.1:3000/api/v1/storages.json:';

  constructor(private http: HttpClient) { }

  getStorage(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  addStorage(storageData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, storageData);
  }
}
