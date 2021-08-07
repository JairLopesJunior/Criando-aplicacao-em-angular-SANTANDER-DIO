import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                'id': 1,
                'name': 'Matematicaa',
                'imageUrl': '/assets/images/mario.png',
                'price': 99.99,
                'code': 'xps-345',
                'duration': 120,
                'rating': 4.4,
                'releaseDate': 'December, 2, 2019'
            },
            {
                'id': 2,
                'name': 'Portugues',
                'imageUrl': '/assets/images/mario.png',
                'price': 45.99,
                'code': 'gds-345',
                'duration': 80,
                'rating': 4.5,
                'releaseDate': 'December, 4, 2019'
            }
        ]
    }
}