import { Component, OnInit } from '@angular/core';
import { EquationService } from './../services/equation.service';

@Component({
  selector: 'app-view-equations',
  templateUrl: './view-equations.component.html',
  styleUrls: ['./view-equations.component.css']
})
export class ViewEquationsComponent implements OnInit {
  equations: any = [];
  sortType: any = 'name';
  sortReverse: boolean = false;
  loading = false;

  constructor(private service: EquationService) {}

  ngOnInit() {
    this.getAllEquations();
  }

  // get all equations from database
  getAllEquations() {
    // true the loading while fetching the data
    this.loading = true;
    this.service.getEquations().subscribe(
      res => {
        let response: any = res;
        this.equations = response;
        this.loading = false;
        console.log('response:', response);
      },
      err => {
        let error: any = err;
        this.loading = false;
        console.log('error:', error);
      }
    );
  }

  // delete the equation
  deleteEquation(id) {
    this.service.deleteEquation(id).subscribe(
      res => {
        let response: any = res;
        console.log('response:', response);
        this.getAllEquations();
      },
      err => {
        let error: any = err;
        console.log('error:', error);
      }
    );
  }

  // sort the table
  sortTable(sortType) {
    if (this.sortReverse) {
      if (sortType != 'equation')
        this.equations.sort((a, b) => a[sortType].localeCompare(b[sortType]));
      else
        this.equations.sort((a, b) => a.equation[0].localeCompare(b[sortType]));
    } else {
      if (sortType != 'equation') {
        this.equations.sort((a, b) => a[sortType].localeCompare(b[sortType]));
        this.equations.reverse((a, b) =>
          a[sortType].localeCompare(b[sortType])
        );
      } else {
        this.equations.sort((a, b) => a.equation[0].localeCompare(b[sortType]));
        this.equations.reverse((a, b) =>
          a.equation[0].localeCompare(b[sortType])
        );
      }
    }
  }
}
