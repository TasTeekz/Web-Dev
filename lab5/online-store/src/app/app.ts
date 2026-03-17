import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './products/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;

  allProducts: Product[] = [];
  productsToShow: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.allProducts = this.shuffleArray([...this.productService.products]);
    this.productsToShow = [...this.allProducts];
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  showAll() {
    this.selectedCategoryId = null;
    this.productsToShow = [...this.allProducts];
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.productsToShow = this.allProducts.filter((p) => p.categoryId === categoryId);
  }
}
