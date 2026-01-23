import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Layout } from './main_component/layout/layout';
import { Header } from './shared_component/header/header';
import { Sidebar } from './shared_component/sidebar/sidebar';
import { Footer } from './shared_component/footer/footer';




@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormsModule,  RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
  constructor(private toastr: ToastrService) {

  }

  showSucess() {
    this.toastr.success("success", "toast Title");
  }
}
