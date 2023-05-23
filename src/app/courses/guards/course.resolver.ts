import { Observable, of } from 'rxjs';
import { Course } from './../model/course';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { inject } from '@angular/core';


export const courseResolver: ResolveFn<Observable<Course>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  if (route.params && route.params['id']) {
    return inject(CoursesService).loadById(route.params['id']);
  }

    return of( {_id: '', name: '', category: ''});
}
