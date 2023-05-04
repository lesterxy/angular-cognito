import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SightingsService {

  constructor(private http: HttpClient) { }

  retrieveAllSightings(token: any) {
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token
    });
    return this.http.get(
      // 'https://8ua63uneed.execute-api.eu-west-1.amazonaws.com/dev/sightings',
      'https://8ua63uneed.execute-api.eu-west-1.amazonaws.com/staging/sightings',
      { headers: header}
    );
  }
}

