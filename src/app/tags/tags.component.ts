import { Component, Input, OnInit } from '@angular/core';

import { ArtService } from '../services/art.service';
import {Tag} from '../shared/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];
  @Input() artDetailTags?:string[];
  
  @Input() justifyContent:string = 'center';
 
  constructor(public artService: ArtService ){}
  ngOnInit(): void {
    if(!this.artDetailTags){
      this.tags = this.artService.getAllTags();

    }
  }
  


}
