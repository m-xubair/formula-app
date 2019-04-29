import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable()
export class EquationService {
  constructor(private http: HttpClient) {}

  // save the equation
  saveEquation(data) {
    return this.http.post(base_url + '/save-equation', data);
  }

  // edit the equation
  updateEquation(data) {
    return this.http.put(base_url + '/edit-equation', data);
  }

  // get an equation by its id
  getEquationById(id) {
    let params = new HttpParams();
    params = params.append('id', id);

    return this.http.get(base_url + '/get-equation', {
      params: params
    });
  }

  // delete any equation
  deleteEquation(id) {
    let params = new HttpParams();
    params = params.append('id', id);

    return this.http.delete(base_url + '/delete-equation', {
      params: params
    });
  }

  // get all equations from db
  getEquations() {
    return this.http.get(base_url + '/get-equations');
  }
}
