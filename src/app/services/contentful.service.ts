import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor(private http: HttpClient) { }

  private client = createClient({
    space:'ava1kewavy8c',
    accessToken:'jh8iqowzppONbWHtvniM8fEqiX2TjeFi6Fnjfz7OFEo'
  })

  getAllData() {
    let data = this.client.getEntries();
    return from(data);
  }

  fetchData() {
    // return this.http.get('https://cdn.contentful.com/spaces/ava1kewavy8c/environments/master/content_types?access_token=jh8iqowzppONbWHtvniM8fEqiX2TjeFi6Fnjfz7OFEo')
    return this.http.get('https://cdn.contentful.com/spaces/ava1kewavy8c/environments/master/entries/32WNavnNE4Dq1TG6HhQ6pJ?access_token=jh8iqowzppONbWHtvniM8fEqiX2TjeFi6Fnjfz7OFEo')
  }

  fetchDatas() {
    return this.http.get('https://cdn.contentful.com/spaces/ava1kewavy8c/environments/master/content_types?access_token=jh8iqowzppONbWHtvniM8fEqiX2TjeFi6Fnjfz7OFEo')
    // return this.http.get('https://cdn.contentful.com/spaces/ava1kewavy8c/environments/master/entries/32WNavnNE4Dq1TG6HhQ6pJ?access_token=jh8iqowzppONbWHtvniM8fEqiX2TjeFi6Fnjfz7OFEo')
  }
}
