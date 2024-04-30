import { Component, Input, OnInit } from '@angular/core';
import { Icource } from '../../constant/interface';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  begginercourse!:Array<Icource>
  advancecourse!:Array<Icource>
  courseArray!:Icource
 
  constructor(
    private _course:CourseService
  ) { }

  ngOnInit(): void {
    this._course.getallcourses()
    .subscribe(course=>{
      this.begginercourse=course.filter(c=>c.category==='BEGINNER')
      this.advancecourse=course.filter(c=>c.category==='ADVANCED')
    })
  }

}
