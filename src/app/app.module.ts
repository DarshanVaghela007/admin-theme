import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { FaqComponent } from './faq/faq.component';
import { FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
