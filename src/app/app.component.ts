import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MenudiarioService } from './servicios/menudiario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webHigueron';

  dataSource = new MatTableDataSource<any>();
  menusss: any[] = [];
  menuAlmuerzo: any[] = [];
  menuMerienda: any[] = [];


  constructor(
    private MenudiarioService: MenudiarioService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.getAllmenusDesayuno();
    this.getAllmenusAlmuerzo();
    this.getAllmenusMerienda();
    

  }

    //obtener todos los menus 
    getAllmenusDesayuno() {
      this.MenudiarioService.gettMenuDesayuno().subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res.menu);
          this.menusss = res.menu;
        },
        error: (err) => {
          //alert("Error en la carga de datos");
        },
      });
    }

    getAllmenusAlmuerzo() {
      this.MenudiarioService.gettMenuAlmuerzo().subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res.menu);
          this.menuAlmuerzo = res.menu;
        },
        error: (err) => {
          //alert("Error en la carga de datos");
        },
      });
    }

    getAllmenusMerienda() {
      this.MenudiarioService.gettMenuMerienda().subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res.menu);
          this.menuMerienda = res.menu;
        },
        error: (err) => {
          //alert("Error en la carga de datos");
        },
      });
    }
}