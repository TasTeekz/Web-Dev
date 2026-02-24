import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input({ required: true }) product!: Product;
  @Output() delete = new EventEmitter<number>();

  selectedImage = '';
  isDescExpanded = false;

  ngOnInit() {
    this.selectedImage = this.product.image || this.product.images[0];
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  getStars(rating: number): ('full' | 'half' | 'empty')[] {
    const stars: ('full' | 'half' | 'empty')[] = [];
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < full) stars.push('full');
      else if (i === full && hasHalf) stars.push('half');
      else stars.push('empty');
    }
    return stars;
  }

  formatKzt(price: number): string {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₸';
  }

  openKaspi() {
    window.open(this.product.link, '_blank', 'noopener,noreferrer');
  }

  shareWhatsApp() {
    const text = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  prevImage() {
    const idx = this.product.images.indexOf(this.selectedImage);
    const prevIdx = idx <= 0 ? this.product.images.length - 1 : idx - 1;
    this.selectedImage = this.product.images[prevIdx];
  }

  nextImage() {
    const idx = this.product.images.indexOf(this.selectedImage);
    const nextIdx = idx >= this.product.images.length - 1 ? 0 : idx + 1;
    this.selectedImage = this.product.images[nextIdx];
  }

  toggleDescription(event: MouseEvent) {
    event.stopPropagation();
    this.isDescExpanded = !this.isDescExpanded;
  }

  like() {
    this.product.likes++;
  }

  deleteProduct() {
    if (confirm('Are you sure?')) {
      this.delete.emit(this.product.id);
    }
  }
}
