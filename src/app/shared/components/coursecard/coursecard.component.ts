import { Component, Input, OnInit } from '@angular/core';
import { Icource } from '../../constant/interface';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.scss']
})
export class CoursecardComponent implements OnInit {
@Input()getcourse!:Icource

  constructor() { }

  ngOnInit(): void {
  }

}
