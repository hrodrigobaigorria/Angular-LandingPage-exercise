import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  loading: boolean = true;
  public product?: IProduct;
  public safeImageUrl?: SafeUrl;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  private _sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        this.product = data;
        this.safeImageUrl = this._sanitizer.bypassSecurityTrustUrl(data.image);
        this.loading = false;
      });
    });
  }
}
