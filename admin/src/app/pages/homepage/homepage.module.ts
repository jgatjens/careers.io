import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DefaultLayoutModule } from '../../layouts/default/default.module';
import { StyleguideModule } from '../../components/styleguide/styleguide.module';
import { FormLoginModule } from '../../components/form-login/form-login.module';
import { BreadcrumbModule } from '../../components/breadcrumb/breadcrumb.module';
import { LogoModule } from '../../components/logo/logo.module';
import { CardModule } from '../../components/card/card.module';
import { CardJobsModule } from '../../components/card-jobs/card-jobs.module';
import { CardApplicantModule } from '../../components/card-applicant/card-applicant.module';
import { HeaderModule } from '../../components/header/header.module';
import { HomepagePageComponent } from './homepage.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: HomepagePageComponent }]),
    CommonModule,
    DefaultLayoutModule,
    StyleguideModule,
    FormLoginModule,
    BreadcrumbModule,
    HeaderModule,
    LogoModule,
    CardModule,
    CardJobsModule,
    CardApplicantModule
  ],
  declarations: [HomepagePageComponent]
})
export class HomepagePageModule { }