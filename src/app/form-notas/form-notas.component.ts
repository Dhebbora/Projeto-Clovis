import { Component } from '@angular/core';
import { Nota } from './domain/form-notas/donain/nota';
import { AccountService } from '../domain/service/account.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs//operators';
import {MatDialog} from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form-notas',
  templateUrl: './form-notas.component.html',
  styleUrls: ['./form-notas.component.css']
})
export class FormNotasComponent {

  notas$: Observable<Nota[]>;
  
  displayedColumns = ['name','turma','situacao','nota1','nota2','trabalhos','pvfinal','media', 'actions'];

  constructor(
    private accountService: AccountService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ){
      this.notas$ = this.accountService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar Lista')
            return of([])
          }
        )
      );
    }

    onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      });
    }

  onAdd(){
    this.router.navigate(['/new']);
    // this.router.navigate(['base/new'], {relativeTo:this.route});
  }
}
