import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  //readonly list$: Observable<ProductModel[]> = this._productService.getAll()
  readonly catgories$: Observable<ProductModel[]> = this._productService.getAllCategories();
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    category: new FormControl()
  });

  onProductFormSubmitted(productForm: FormGroup): void {
    if(!productForm.valid){
      return;
    }
    this._productService.create({ 
      title: productForm.get('title')?.value, 
      price: productForm.get('price')?.value, 
       description: productForm.get('description')?.value, 
       category: productForm.get('category')?.value,  })
       .subscribe();
  }

  constructor(private _productService: ProductService) {
  }
}
