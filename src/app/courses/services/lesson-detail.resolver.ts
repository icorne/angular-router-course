import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { LessonDetail } from '../model/lesson-detail';
import { LessonSummary } from '../model/lesson-summary';
import { CoursesService } from './courses.service';

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {
  constructor(private readonly courseService: CoursesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail> {
    let courseUrl = route.parent.paramMap.get('courseUrl');
    let lessonSeqNo = route.paramMap.get('lessonSeqNo');
    return this.courseService.loadLessonDetail(courseUrl, lessonSeqNo);
  }
}
