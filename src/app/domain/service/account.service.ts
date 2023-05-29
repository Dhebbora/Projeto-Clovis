import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Nota } from "../../form-notas/domain/form-notas/donain/nota";
import { delay, first, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class AccountService {

    private readonly API ='api/notas';

    constructor(
        private httpClient: HttpClient
    ){ }

    list(){
        return this.httpClient.get<Nota[]>(this.API)
        .pipe(
            first(),
            delay(5000),
            tap(notas => console.log(notas))
        );
    }
}