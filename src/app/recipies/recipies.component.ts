import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipies.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipesService]
})
export class RecipiesComponent implements OnInit {

  selectedRecipe: Recipe;
  
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }

}
