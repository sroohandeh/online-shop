import { Art } from '../shared/art';
import { Injectable } from '@angular/core';
import {Tag} from '../shared/tag';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor() { }

  getAllArtsBySearchTerm(searchTerm:string) :Art[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  } 
  getAllTags(): Tag[]{
      return [
        {name: 'همه', count: 3},
        {name: 'چهره', count: 2},
        {name: 'پرفروش', count: 1 },
        {name: 'معروف', count: 1 }
      ]
  }

  getArtById(id: number): Art{
    return this.getAll().find(art => art.id == id)!;
  }
  getAllPicsByTag(tag: string): Art[]{
    return tag == 'همه'? this.getAll(): this.getAll().filter(art => art.tags?.includes(tag));
  }

  getAll(): Art[] { 
    return [
      {
        id: 1,
        name: 'چهره مریم',
        price: 4200000,       
        imageUrl : 'assets/images/face1.jpg',
        favorite: false,
        stars: 4,     
        origins : [], 
        tags : ['پرفروش', 'چهره']         
      },
      {
        id: 2,
        name: 'چهره زهرا',
        price: 850000,        
        imageUrl : 'assets/images/face2.jpg',
        favorite: true,
        stars: 2,     
        origins : [],
        tags: ['چهره']
      },      
      {
        id: 3,
        name: 'چهره مهسا',
        price: 1550000,        
        imageUrl : 'assets/images/face4.jpg',
        favorite: false,
        stars: 2,     
        origins : [],
        tags: ['معروف']
      }        
    ]
  }
}
