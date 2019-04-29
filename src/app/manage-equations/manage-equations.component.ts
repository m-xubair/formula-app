import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EquationService } from './../services/equation.service';

@Component({
  selector: 'app-manage-equations',
  templateUrl: './manage-equations.component.html',
  styleUrls: ['./manage-equations.component.css']
})
export class ManageEquations implements OnInit {
  routeParams = this.activeRoute.snapshot.params;
  editEqId: any;
  editEquation: any;
  isEdit: boolean = false;

  eqName: any;
  eqDescription: any;
  equation: any = [];
  successMessage = '';
  errorMessage = '';

  leftVariables: any = [];
  rightVariables: any = [];

  constructor(
    private service: EquationService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.editEqId = this.routeParams.id;
    if (this.editEqId) {
      this.isEdit = true;
      // get the equation if its edit equation
      this.getEquation();
    }
    // initialise varialbes
    this.initialiseVariables();
  }

  // get equation by its id
  getEquation() {
    this.service.getEquationById(this.editEqId).subscribe(
      res => {
        let response: any = res;
        this.editEquation = response[0];
        this.equation = response[0].equation;
        this.eqName = response[0].name;
        this.eqDescription = response[0].description;
        console.log('this.editEquation:', this.editEquation);
      },
      err => {
        let error: any = err;
        console.log('error:', error);
      }
    );
  }

  // add variable to equation
  addVariable(event) {
    const variable = event.target.innerText;
    this.equation.push(variable);
  }

  // add operator to equation
  addOperator(event) {
    const operator = event.target.innerText;
    this.equation.push(operator);
  }

  // remove any variable or operator from equation
  removeItem(index, item) {
    this.equation.splice(index, 1);
    // console.log('this.equation:', this.equation);
  }

  // save the equation
  saveEquation() {
    this.clearMessages();
    const data = {
      name: this.eqName,
      description: this.eqDescription,
      equation: this.equation
    };

    this.service.saveEquation(data).subscribe(
      res => {
        let response: any = res;
        this.successMessage = response.message;
        this.router.navigate(['/view-equations']);
      },
      err => {
        let error: any = err;
        this.errorMessage = error.message;
      }
    );
  }

  // edit the equation
  editEquationMethod() {
    this.clearMessages();

    // update the equation.
    this.editEquation.name = this.eqName;
    this.editEquation.description = this.eqDescription;
    this.editEquation.equation = this.equation;

    this.service.updateEquation(this.editEquation).subscribe(
      res => {
        let response: any = res;
        this.successMessage = 'Equation is updated successfully.';
        this.router.navigate(['/view-equations']);
      },
      err => {
        let error: any = err;
        this.errorMessage = error.message;
      }
    );
  }

  clearMessages() {
    this.successMessage = '';
    this.errorMessage = '';
  }

  // initialise varialbes
  initialiseVariables() {
    this.leftVariables = [
      { lable: 'Variable 1', value: 'Variable1' },
      { lable: 'Variable 2', value: 'Variable2' },
      { lable: 'Variable 3', value: 'Variable3' },
      { lable: 'Variable 4', value: 'Variable4' },
      { lable: 'Variable 5', value: 'Variable5' },
      { lable: 'Variable 6', value: 'Variable6' },
      { lable: 'Variable 7', value: 'Variable7' },
      { lable: 'Variable 8', value: 'Variable8' },
      { lable: 'Variable 9', value: 'Variable9' },
      { lable: 'Variable 10', value: 'Variable10' }
    ];
    this.rightVariables = [
      { lable: 'Variable 11', value: 'Variable11' },
      { lable: 'Variable 12', value: 'Variable12' },
      { lable: 'Variable 13', value: 'Variable13' },
      { lable: 'Variable 14', value: 'Variable14' },
      { lable: 'Variable 15', value: 'Variable15' },
      { lable: 'Variable 16', value: 'Variable16' },
      { lable: 'Variable 17', value: 'Variable17' },
      { lable: 'Variable 18', value: 'Variable18' },
      { lable: 'Variable 19', value: 'Variable19' },
      { lable: 'Variable 20', value: 'Variable20' }
    ];
  }
}
