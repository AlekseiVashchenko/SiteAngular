import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { IdeaComponent } from './idea/idea/idea.component';
import { DescriptionComponent } from './description/description.component';
import { RecepiesListComponent } from './recepies-list/recepies-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FooterComponent } from './footer/footer.component';
import { FormRecepiComponent } from './form-recepi/form-recepi.component';
import { ContentWrapComponent } from './content-wrap/content-wrap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IdeaComponent,
    DescriptionComponent,
    RecepiesListComponent,
    ListItemComponent,
    FooterComponent,
    FormRecepiComponent,
    ContentWrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
