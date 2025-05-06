import { Component } from '@angular/core';
import {
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';

@Component({
  selector: 'app-angualardirectives',
  imports: [NgIf, NgFor, NgSwitchCase, NgSwitch, NgSwitchDefault],
  templateUrl: './angualardirectives.component.html',
  styleUrl: './angualardirectives.component.css',
})
export class AngualardirectivesComponent {
  showData = false;

  login = false;

  block = 6;

  selectedColor = '';

  marvelHeroes = [
    'Iron Man',
    'Captain America',
    'Thor',
    'Hulk',
    'Black Widow',
    'Hawkeye',
    'Spider-Man',
    'Doctor Strange',
    'Black Panther',
    'Scarlet Witch',
  ];

  heroes = [
    {
      name: 'Iron Man',
      attack: 85,
      attackType: 'Repulsor Beams (Tech)',
      friends: ['Happy Hogan', 'Happy Hogan'],
    },
    {
      name: 'Captain America',
      attack: 80,
      attackType: 'Vibranium Shield Combat',
      friends: ['Happy Hogan', 'Happy Hogan'],
    },
    {
      name: 'Thor',
      attack: 95,
      attackType: 'Lightning and Hammer (Mjolnir)',
      friends: ['Happy Hogan', 'Happy Hogan'],
    },
    {
      name: 'Hulk',
      attack: 98,
      attackType: 'Superhuman Strength',
      friends: ['Happy Hogan', 'Happy Hogan'],
    },
    {
      name: 'Black Widow',
      attack: 75,
      attackType: 'Martial Arts & Gadgets',
      friends: ['Happy Hogan', 'Happy Hogan'],
    },
    {
      name: 'Hawkeye',
      attack: 72,
      attackType: 'Trick Arrows (Bow & Arrow)',
      friends: ['Happy Hogan', 'Happy Hogan'],
    },
    {
      name: 'Spider-Man',
      attack: 88,
      attackType: 'Web-Slinging & Agility Strikes',
      friends: ['Happy Hogan', 'Happy Hogan'],
    },
    {
      name: 'Doctor Strange',
      attack: 90,
      attackType: 'Mystic Arts & Spells',
      friends: ['Happy Hogan', 'Happy Hogan'],
    },
    {
      name: 'Black Panther',
      attack: 83,
      attackType: 'Vibranium Suit & Martial Arts',
      friends: ['Happy Hogan', 'Happy Hogan'],
    },
    {
      name: 'Scarlet Witch',
      attack: 92,
      attackType: 'Chaos Magic & Telekinesis',
      friends: ['Happy Hogan', 'Happy Hogan'],
    },
  ];

  ngIfToggle() {
    this.showData = !this.showData;
  }
}
