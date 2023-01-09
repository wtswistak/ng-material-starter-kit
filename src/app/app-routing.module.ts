import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ProductComponent } from './components/product/product.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { NamesComponent } from './components/names/names.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { JobComponent } from './components/job/job.component';
import { JobsGridComponent } from './components/jobs-grid/jobs-grid.component';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { ProductComponentModule } from './components/product/product.component-module';
import { HolidayListComponentModule } from './components/holiday-list/holiday-list.component-module';
import { NamesComponentModule } from './components/names/names.component-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { JobComponentModule } from './components/job/job.component-module';
import { JobsGridComponentModule } from './components/jobs-grid/jobs-grid.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'crypto-table', component: CryptoListComponent }, { path: 'products-search', component: ProductComponent }, { path: 'public-holidays', component: HolidayListComponent }, { path: 'list-1-single-table-names', component: NamesComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'job-post-table', component: JobComponent }, { path: 'list-1-multi-gird-list-jobs', component: JobsGridComponent }]), CryptoListComponentModule, ProductComponentModule, HolidayListComponentModule, NamesComponentModule, CategoryListComponentModule, JobComponentModule, JobsGridComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
