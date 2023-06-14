import { Component, OnInit } from '@angular/core';
import { Art } from '../shared/art';
import { ArtService } from '../services/art.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.scss']
})
export class ArtDetailComponent implements OnInit {

  art!: Art;
  constructor(activatedRoute: ActivatedRoute, private artService: ArtService){
    activatedRoute.params.subscribe(params =>{
      if(params['id']){
        this.art = this.artService.getArtById(params['id']);
      }
    })
  }
  ngOnInit(): void {
    
  }

}
