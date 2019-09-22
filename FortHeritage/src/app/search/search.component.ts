import { Component, OnInit } from '@angular/core';
import { AppService } from "../service/app.service";
import { FortData } from "../shared/fortData";
import { Router } from "@angular/router";
import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchOption = [{dispVal: 'Fort Name', val: 'fortName'},
                  {dispVal: 'District', val: 'dist'}
                 ];
  fortData: FortData;

  options: string[] = [];
  filteredOptions: Observable<string[]>;
  myForm: FormGroup;
  
  constructor(private appService: AppService, private route: Router, 
          private _fb: FormBuilder) { }

  ngOnInit() {
      this.myForm = this._fb.group({
          searchText: ['', [Validators.required]],
          searchBy: ['', [Validators.required]],
      });
      this.filteredOptions = this.myForm.controls['searchText'].valueChanges.pipe(
              startWith(''),
              map(value => this._filter(value))
          
      );
      this.myForm.controls['searchBy'].valueChanges.subscribe(data=> {
          this.appService.getDistrict(data).subscribe(data=> {
              this.options = data.district;
          });
      })
  }

  private _filter(value: string): string[] {
          const filterValue = value.toLowerCase();
          
          return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  
  seePlan() {
     this.appService.getPlan(this.myForm.controls['searchText'].value, this.myForm.controls['searchBy'].value);
     if(this.myForm.controls['searchBy'].value === 'dist') {
         this.route.navigate(['/fort']);
     } else {
         this.route.navigate(['/fort/list']);
     }
     
  }
}
