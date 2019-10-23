import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadChildren: './login/login.module#LoginPageModule'
	},
	{
		path: 'home',
		loadChildren: './home/home.module#HomePageModule'
	},
	{
		path: 'list',
		loadChildren: './list/list.module#ListPageModule'
	},
	{ path: 'page1', loadChildren: './page1/page1.module#Page1PageModule' },
	{ path: 'page2', loadChildren: './page2/page2.module#Page2PageModule' },
	{ path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
