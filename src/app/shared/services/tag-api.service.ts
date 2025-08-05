import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagApiService {
  private apiUrl = 'http://157.230.36.182:3004/api/tags';

  constructor(private http: HttpClient) {}

  getTags(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createTag(tagData: any): Observable<any> {
    return this.http.post(this.apiUrl, tagData);
  }

  updateTag(id: string, tagData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, tagData);
  }

  deleteTag(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}