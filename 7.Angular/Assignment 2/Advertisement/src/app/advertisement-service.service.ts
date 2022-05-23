import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdvertisementServiceService {

  ad=[];
  newAd;
  constructor(private http: HttpClient) { }
  ads=[
    {
      "title":"Dummy data",
      "name":"Samsung",
      "category":"electronics",
      "description":"ad of samsung tv"
    },
    {
      "title":"Dummy data 2",
      "name":"Philips",
      "category":"electronics",
      "description":"ad of philips washing machine"
    }
  ]
  postAd(ad)
  {
    this.ads.push(ad);
  }
  getAdvertisements()
  {
     return this.ads;
  }

  deleteAdvertisement(ad)
  {
    this.ads.splice(this.ads.indexOf(ad),1);
  }

  updateAdvertisement(ad)
  {
      let index;
      this.ads.forEach(element => {
        if(element.title == ad.title)
        {
          index = this.ads.indexOf(element);
        }
      });
      this.ads[index] =ad;
  }

  getAdvertisement(adTitle)
  {
    this.ads.map(element => {
      if(element.title === adTitle)
      {
        this.ad.push(element);
      }
    });
    return this.ad;
  }
}
