import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  styleUrls: ['./category-list.component.scss'],
  templateUrl: './category-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent {
  readonly categories$: Observable<CategoryModel[]> = this._categoryService.getAll()
  .pipe(
    delay(2000),
    map(()=>[])

  );

  constructor(private _categoryService: CategoryService) {
  }
}
