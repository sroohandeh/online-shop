import { Injectable } from '@angular/core';
import { Art } from '../shared/art';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor() { }

  getAll(): Art[] { 
    return [
      {
        id: 1,
        name: 'چهره مریم',
        price: 4200000,
        tags : ['پرفروش', 'خوش چهره'],
        imageUrl : 'assets/images/face1.jpg',
        favorite: false,
        stars: 4,     
        origins : []
      },
      {
        id: 2,
        name: 'چهره زهرا',
        price: 850000,        
        imageUrl : 'assets/images/face2.jpg',
        favorite: true,
        stars: 2,     
        origins : []
      },      
      {
        id: 4,
        name: 'چهره مهسا',
        price: 1550000,        
        imageUrl : 'assets/images/face4.jpg',
        favorite: false,
        stars: 2,     
        origins : []
      }        
    ]
  }
}
