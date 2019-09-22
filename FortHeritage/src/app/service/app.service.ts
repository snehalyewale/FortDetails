import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FortData } from "../shared/fortData";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { LoderType } from "../shared/LoderType.enum";
import { District } from "../shared/district";

@Injectable()
export class AppService {

  public data : Observable<FortData[]>;
  private _data: BehaviorSubject<FortData[]>;
  fortData: FortData[] = [];

  public fortLoading : Observable<LoderType>;
  private _fortLoading: BehaviorSubject<LoderType>;

  constructor(private httpClient: HttpClient) {
      this.initObservable('data', null);
      this.initObservable('fortLoading', LoderType.none);
  }

  updateObservable(field: any, data: any) {
      this['_' + field].next(data);
  }
  initObservable(field: any, data: any = null) {
      this['_' + field] = new BehaviorSubject(data);
      this[field] = this['_' + field].asObservable();
  }
  getPlan(inputText: any, searchBy: any) {
      const o = this.httpClient.get<FortData[]>('assets/data/fortData.json');
      this.updateObservable('fortLoading', LoderType.bar);
      o.subscribe(result=> {
          let index =0;
          this.fortData =[];
          for(let data of result) {
              if(searchBy === 'fortName' && data.fortName === inputText) {
                  this.fortData[index] = data;
                  index++;
              } else if(searchBy === 'dist' && data.dist === inputText) {
                  this.fortData[index] = data;
                  index++;
              }
          }
          this.updateObservable('data', this.fortData);
      },
      error => {
          
      },
      ()=> {
          this.updateObservable('fortLoading', LoderType.none);
      })
     // return null;
  }
  
  getDistrict(searchBy: any) {
     if(searchBy === 'dist') {
          return this.httpClient.get<District>('assets/data/district.json')
      }
      else {
        return  this.httpClient.get<District>('assets/data/fortName.json')
      }
  }
}
