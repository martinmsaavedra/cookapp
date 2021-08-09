import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageSerivce } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl:'header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false;
    private userSubscription: Subscription;

    constructor(private dataStorage: DataStorageSerivce,
        private authService: AuthService){}

    onSaveData(){
        this.dataStorage.storeRecipes();
    }

    onFetchData(){
        this.dataStorage.fetchRecipes().subscribe();
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnInit(){
        this.userSubscription = this.authService.user.subscribe(user => {
            this.isAuthenticated = !user ? false : true;
        });
    }

    ngOnDestroy(){
        this.userSubscription.unsubscribe();
    }

}