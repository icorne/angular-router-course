import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from './courses.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private readonly courseService: CoursesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    return this.courseService.loadCourseByUrl(route.paramMap.get('courseUrl'));
  }
}
