import { Component, OnInit } from '@angular/core';
import { AppService } from "../service/app.service";
import { FortData } from "../shared/fortData";
import { LoderType } from "../shared/LoderType.enum";

@Component({
  selector: 'app-fort-details',
  templateUrl: './fort-details.component.html',
  styleUrls: ['./fort-details.component.css']
})
export class FortDetailsComponent implements OnInit {

  fortData: FortData[];
  isLoding = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
      this.appService.fortLoading.subscribe(loder=> {
          this.isLoding = loder === LoderType.bar;
      })
      this.appService.data.subscribe(data=>{
          this.fortData = data;
      })
  }

  getDetails(details: any) {
     return details.join('\n');
  }
}
