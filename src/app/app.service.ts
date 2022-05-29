import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    apiPath = "http://localhost:3000";

    constructor(private httpClient: HttpClient) {

    }

    getUsers() {
        const apiUrl = `${this.apiPath}/users`;
        // const httpOptions = {
        //     Headers: new HttpHeaders({
        //         "Content-Type": "application/json",
        //     })
        // }

        return this.httpClient.get<any>(apiUrl).pipe(
            catchError((error: HttpErrorResponse) => throwError(error))
        );
    }

    getFirstFloor() {
        const apiUrl = `${this.apiPath}/first-floor`;

        return this.httpClient.get<any>(apiUrl).pipe(
            catchError((error: HttpErrorResponse) => throwError(error))
        );
    }
}