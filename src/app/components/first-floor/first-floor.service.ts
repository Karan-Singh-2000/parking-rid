import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FirstFloorService {
    apiPath = "http://localhost:3000";

    constructor(private httpClient: HttpClient) {

    }

    getFirstFloor() {
        const apiUrl = `${this.apiPath}/first-floor`;

        return this.httpClient.get<any>(apiUrl).pipe(
            catchError((error: HttpErrorResponse) => throwError(error))
        );
    }

    updateExit(index: any) {
        const apiUrl = `${this.apiPath}/first-floor/exit/${index}`;
    
        const httpOptions = {

            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        return this.httpClient.get<any>(apiUrl).pipe(
            catchError((error: HttpErrorResponse) => throwError(error))
        );
    }

    updateReserve() {
        const apiUrl = `${this.apiPath}/first-reserve`;

        return this.httpClient.get<any>(apiUrl).pipe(
            catchError((error: HttpErrorResponse) => throwError(error))
        );
    }
}