import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  private apiUrl = 'http://127.0.0.1:3000/api/v1/storages';
  private commoditiesUrl = 'http://127.0.0.1:3000/api/v1/commodities';

  constructor(private http: HttpClient) {}

  getStorage(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}.json`);
  }

  addStorage(storageData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}.json`, storageData);
  }

  addCommodity(commodityData: any): Observable<any> {
    return this.http.post<any>(`${this.commoditiesUrl}.json`, commodityData);
  }
  removeCommodity(commodityId: number): Observable<any> {
    const url = `${this.commoditiesUrl}/${commodityId}.json`;
    return this.http.delete<any>(url);
  }
  removeStorage(storageId: number): Observable<any> {
    const url = `${this.apiUrl}/${storageId}.json`;
    return this.http.delete<any>(url);
  }
  updateCommodity(commodityId: number, commodityData: any): Observable<any> {
    const url = `${this.commoditiesUrl}/${commodityId}.json`;
    return this.http.put<any>(url, commodityData);
  }
  updateStorage(storageId: number, storageDate: any): Observable<any> {
    const url = `${this.apiUrl}/${storageId}.json`;
    return this.http.put<any>(url, storageDate);
  }
}
