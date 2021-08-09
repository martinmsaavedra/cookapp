import { tokenize } from "@angular/compiler/src/ml_parser/lexer"

export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokernExpirationDate: Date
  ) {}


get token() {
    if (!this._tokernExpirationDate || new Date() > this._tokernExpirationDate){
        return null;
    }
    return this._token;
}

}