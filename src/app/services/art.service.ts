import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor() { }

  getAll(): string[] { 
    return [
      'assets/images/face1.jpg',
      'assets/images/face2.jpg',
      'assets/images/face1.jpg'
    ]
  }
}
