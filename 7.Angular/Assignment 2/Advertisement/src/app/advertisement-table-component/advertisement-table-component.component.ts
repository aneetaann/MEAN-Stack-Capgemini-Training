import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementServiceService } from '../advertisement-service.service';
import { SearchFilterPipe } from '../search-filter.pipe';


@Component({
  selector: 'app-advertisement-table-component',
  templateUrl: './advertisement-table-component.component.html',
  styleUrls: ['./advertisement-table-component.component.css'],
  providers: [SearchFilterPipe]
})
export class AdvertisementTableComponentComponent implements OnInit {

  //@Input('adList') ads;
  ads: any[];
  searchString: string;
  constructor(private router : Router, private searchFilter : SearchFilterPipe, private _adService : AdvertisementServiceService) {
   this.ads = _adService.getAdvertisements();
  }

  ngOnInit(): void {
  }

  deleteAd(ad)
  {
    this._adService.deleteAdvertisement(ad);
  }

  editAd(ad)
  {
    this.router.navigate(['edit', ad.title.toString()]);
  }

}
