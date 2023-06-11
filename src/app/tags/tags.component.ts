import { Component, OnInit } from '@angular/core';

import { ArtService } from '../services/art.service';
import {Tag} from '../shared/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];
  constructor(public artService: ArtService ){}
  ngOnInit(): void {
    this.tags = this.artService.getAllTags();
  }
  


}
