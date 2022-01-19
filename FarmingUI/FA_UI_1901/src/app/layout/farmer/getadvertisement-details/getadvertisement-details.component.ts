import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetadvertiesmentDetailService } from 'src/app/services/getadvertiesment-detail.service';

@Component({
  selector: 'app-getadvertisement-details',
  templateUrl: './getadvertisement-details.component.html',
  styleUrls: ['./getadvertisement-details.component.scss']
})
export class GetadvertisementDetailsComponent implements OnInit {

  constructor(public service: GetadvertiesmentDetailService,private router : Router) { }
  populateForm(selectedRecord: any) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  ngOnInit(): void {
    this.service.refreshList();

  }
  onClickChangeStatus(){
    this.router.navigate(['/farmer/updateaddstatus-details']);
  }

}
