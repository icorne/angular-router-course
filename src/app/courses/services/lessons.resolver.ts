import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { LessonSummary } from '../model/lesson-summary';
import { CoursesService } from './courses.service';

@Injectable()
export class LessonsResolver implements Resolve<LessonSummary[]> {
  constructor(private readonly courseService: CoursesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> {
    return this.courseService.loadAllCourseLessonsSummary(route.paramMap.get('courseUrl'));
  }
}
