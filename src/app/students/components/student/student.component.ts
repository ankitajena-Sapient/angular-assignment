import { Component, OnInit } from '@angular/core';
import { Student, StudentsService } from 'src/app/students/service/students.service';
export enum SortTypes {
  None,
  Ascending,
  Descending
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  students: Array<Student>;
  sortType: any = SortTypes.None;
  sortColumn: number;
  headings: Array<string>;
  constructor(private studentServic: StudentsService) { }

  ngOnInit(): void {
    this.students = this.studentServic.getStudents();
    if (this.students.length > 0) {
      this.headings = Object.keys(this.students[0]);
      this.headings.shift();
    }
  }

  sort(type: number): void{
    if (this.sortColumn === undefined) {
      this.sortColumn = type;
    }
    if (this.sortColumn === type){
      if (this.sortType === SortTypes.None){
        this.sortArray(type);
        this.sortType = SortTypes.Ascending;
      } else if (this.sortType === SortTypes.Ascending){
        this.students.reverse();
        this.sortType = SortTypes.Descending;
      }else if (this.sortType === SortTypes.Descending){
        this.sortArray(6);
        this.sortType = SortTypes.None;
      }
    } else {
      this.sortType = SortTypes.Ascending;
      this.sortColumn = type;
      this.sortArray(type);
    }
  }
  sortArray(columnNumber: number): void{
    switch (columnNumber) {
    case 0:
      this.students.sort((a, b) => a.Name > b.Name ? 1 : -1);
      break;
      case 1:
      this.students.sort((a, b) => a.Class - b.Class);
      break;
      case 2:
      this.students.sort((a, b) => a.Section > b.Section ? 1 : -1);
      break;
      case 3:
      this.students.sort((a, b) => a.Sub1 - b.Sub1);
      break;
      case 4:
      this.students.sort((a, b) => a.Sub2 - b.Sub2);
      break;
      case 5:
      this.students.sort((a, b) => a.Sub3 - b.Sub3);
      break;
      case 6:
      this.students.sort((a, b) => a.id - b.id);
      break;
    }
  }

}
