import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { AdvertisementServiceService } from '../advertisement-service.service';


@Component({
  selector: 'app-advertisement-form-component',
  templateUrl: './advertisement-form-component.component.html',
  styleUrls: ['./advertisement-form-component.component.css']
})
export class AdvertisementFormComponentComponent implements OnInit {

  categories =['Furniture','Hardware','Mobile'];
  
  /* @Input() adList;
  @Output() childEvent = new EventEmitter(); */
  constructor(private fb: FormBuilder, private _adService: AdvertisementServiceService) { }

  advertform = this.fb.group({
    title: ['',[ Validators.required, Validators.minLength(5)]],
    name:['', Validators.required],
    category:['', Validators.required],
    description:['', Validators.required]
  }) 

  ngOnInit(): void {
  }

  onSubmit(ad)
  {
    this._adService.postAd(ad);
  }

}
