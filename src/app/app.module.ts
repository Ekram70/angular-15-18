import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this line
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    FormsModule, // And this
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
