import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule-description',
  templateUrl: './rule-description.component.html',
  styleUrls: ['./rule-description.component.scss']
})
export class RuleDescriptionComponent implements OnInit, OnChanges{
  title:string = '';
  description:string = '';
  @Input() card:string;

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All woman drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: 'Guess a detail about another Player. If it is correct, you decide who has to drink.' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: 'Ask a question. Who can answer correctly decides who has to drink.' },
    { title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when they break the rule.' },
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  /**
   * card title and card text is shown according to the card and the array of descriptions
   */
  ngOnChanges(): void {
    if(this.card) {
      let cardNumber =  +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }

  }
}