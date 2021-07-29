import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingList:ShoppingListService) { }

  ngOnInit(): void {
  }
  
  onAddItem(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, 
    this.amountInput.nativeElement.value);
    this.shoppingList.addIngredient(newIngredient);  
  }
}
