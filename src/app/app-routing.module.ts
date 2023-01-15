import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ProductComponent } from './components/product/product.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { NamesComponent } from './components/names/names.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { JobComponent } from './components/job/job.component';
import { JobsGridComponent } from './components/jobs-grid/jobs-grid.component';
import { InfluComponent } from './components/influ/influ.component';
import { FormComponent } from './components/form/form.component';
import { FormAgeComponent } from './components/form-age/form-age.component';
import { FormEmailComponent } from './components/form-email/form-email.component';
import { FormCommentComponent } from './components/form-comment/form-comment.component';
import { FormUserRolesComponent } from './components/form-user-roles/form-user-roles.component';
import { UniversityFormComponent } from './components/university-form/university-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { ProductComponentModule } from './components/product/product.component-module';
import { HolidayListComponentModule } from './components/holiday-list/holiday-list.component-module';
import { NamesComponentModule } from './components/names/names.component-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { JobComponentModule } from './components/job/job.component-module';
import { JobsGridComponentModule } from './components/jobs-grid/jobs-grid.component-module';
import { InfluComponentModule } from './components/influ/influ.component-module';
import { FormComponentModule } from './components/form/form.component-module';
import { FormAgeComponentModule } from './components/form-age/form-age.component-module';
import { FormEmailComponentModule } from './components/form-email/form-email.component-module';
import { FormCommentComponentModule } from './components/form-comment/form-comment.component-module';
import { FormUserRolesComponentModule } from './components/form-user-roles/form-user-roles.component-module';
import { UniversityFormComponentModule } from './components/university-form/university-form.component-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'crypto-table', component: CryptoListComponent }, { path: 'form-1-group-select-product', component: ProductComponent }, { path: 'public-holidays', component: HolidayListComponent }, { path: 'list-1-single-table-names', component: NamesComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'job-post-table', component: JobComponent }, { path: 'list-1-multi-gird-list-jobs', component: JobsGridComponent }, { path: 'list-1-nested-list-influencers', component: InfluComponent }, { path: 'form-1-control-name', component: FormComponent }, { path: 'form-1-control-age', component: FormAgeComponent }, { path: 'form-1-control-email', component: FormEmailComponent }, { path: 'form-1-control-comment', component: FormCommentComponent }, { path: 'register-with-role', component: FormUserRolesComponent }, { path: 'form-1-control-radio-universities', component: UniversityFormComponent }, { path: 'login', component: LoginFormComponent }]), CryptoListComponentModule, ProductComponentModule, HolidayListComponentModule, NamesComponentModule, CategoryListComponentModule, JobComponentModule, JobsGridComponentModule, InfluComponentModule, FormComponentModule, FormAgeComponentModule, FormEmailComponentModule, FormCommentComponentModule, FormUserRolesComponentModule, UniversityFormComponentModule, LoginFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
