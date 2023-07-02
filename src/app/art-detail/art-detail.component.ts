import { Component, OnInit } from '@angular/core';
import { Art } from '../shared/art';
import { ArtService } from '../services/art.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.scss']
})
export class ArtDetailComponent implements OnInit {

  art!: Art;   
  constructor(activatedRoute: ActivatedRoute, private artService: ArtService, private router: Router, private cartService: CartService){
    activatedRoute.params.subscribe(params =>{
      if(params['id']){
        this.art = this.artService.getArtById(params['id']);
      }
    })
  }
  ngOnInit(): void {
    
  }

  addToCart(){
    this.cartService.addToCart(this.art);
    this.router.navigateByUrl('/cart-page');
  }
}
