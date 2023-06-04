import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {Art} from '../shared/art';
import { ArtService } from '../services/art.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arts !: Art[];

  constructor(public artService: ArtService, private route: ActivatedRoute){    
  }  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.arts = this.artService.getAll().filter(art => art.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      }else{
        this.arts = this.artService.getAll();
      }
    })
   
    
  }

}
