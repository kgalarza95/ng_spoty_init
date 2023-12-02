import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDioxtMv0m391sBkBrt7_o9NmF-Zg7-34e0Kx26SA62qK29ja3XCtZgfow2yqx9SyA5WqLMV6xZ2UokGSPf44NwW8VDfGNsIrUTfpXIIkIV-BHvSVA '
    });
    this.http.get('https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6', { headers }).subscribe(data => { console.log(data) });

  }
}
