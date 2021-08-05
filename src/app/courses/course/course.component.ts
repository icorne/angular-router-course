import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {

  course: Course;

  couponCode: string;

  constructor(private readonly activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.course = this.activatedRoute.snapshot.data['course'];
  }

  confirmExit() {
    return confirm(`Are you sure you want to exit${this.course.description}?`);
  }

}











