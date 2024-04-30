import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icource, Icourcepay } from '../constant/interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseurl:string=`${environment.baseurl}/courses`
  constructor(
    private _http:HttpClient
  ) { }
  

  getallcourses():Observable<Icource[]>{
    return this._http.get<Icourcepay>(this.courseurl)
    .pipe(
      map(res=>res['payload']),
      shareReplay()
    )
  }
}
