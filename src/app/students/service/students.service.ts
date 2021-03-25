import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  Name: string;
  Class: number;
  Section: string;
  Sub1: number;
  Sub2: number;
  Sub3: number;
}

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor() { }
  getStudents(): Student[] {
    const students: Array<Student>  = [
      {
        id: 1,
        Name: 'Indu',
        Class: 5,
        Section: 'C',
        Sub1: 30,
        Sub2: 60,
        Sub3: 40
      },
      {
        id: 2,
        Name: 'Asmita',
        Class: 3,
        Section: 'A',
        Sub1: 10,
        Sub2: 80,
        Sub3: 20
      },
      {
        id: 3,
        Name: 'Tarun',
        Class: 4,
        Section: 'B',
        Sub1: 20,
        Sub2: 50,
        Sub3: 30
      },
      {
        id: 4,
        Name: 'Ajit',
        Class: 6,
        Section: 'D',
        Sub1: 40,
        Sub2: 70,
        Sub3: 50
      }
    ];
    return students;
}
}
