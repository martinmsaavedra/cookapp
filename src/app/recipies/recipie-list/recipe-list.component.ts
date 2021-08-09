import { Component, OnDestroy, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipies.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipieListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscribe: Subscription

  constructor(private recipeService: RecipesService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribe = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) =>{
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
}
