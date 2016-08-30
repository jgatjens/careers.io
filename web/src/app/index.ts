import { Store, StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { usersReducer, jobsReducer } from './reducers';
import { Job } from './containers';

import { AuthService, ApiService } from './services';

const ROUTER_CONFIG = [
	{
		path: '',
		component: Job,
		canActivate: [AuthService],
		pathMatch: 'full'
	},
	{
		path: 'applicant',
		canActivate: [AuthService],
		loadChildren: './containers/applicant'
	},
	{ path: 'login', loadChildren: './containers/login' },
	{ path: 'register', loadChildren: './containers/register' },
	{ path: '**', redirectTo: '' } // redirect to home if there is not route..
];

@NgModule({
	providers: [
		AuthService, ApiService
	],
	declarations: [
		// Components / Directives/ Pipes
		Job,
	],
	imports: [
		RouterModule.forChild(ROUTER_CONFIG),
		StoreModule.provideStore({ users: usersReducer, jobs: jobsReducer }),
		BrowserModule
	],
})
export default class AppModule {
	static routes = ROUTER_CONFIG
}

