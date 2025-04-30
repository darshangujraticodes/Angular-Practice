import { Component } from '@angular/core';

@Component({
  selector: 'app-angularloop',
  imports: [],
  templateUrl: './angularloop.component.html',
  styleUrl: './angularloop.component.css',
})
export class AngularloopComponent {
  selectedUser = ['Bruce', 'Ron', 'Abhishek', 'Harsh', 'Roshni', 'Natasha'];

  marvelHeroes = [
    {
      name: 'Tony Stark',
      heroName: 'Iron Man',
      strength: 85,
      attackTypes: ['Repulsor Beams', 'Missile Barrage', 'Unibeam'],
    },
    {
      name: 'Steve Rogers',
      heroName: 'Captain America',
      strength: 90,
      attackTypes: ['Shield Throw', 'Super Soldier Punch', 'Combat Tactics'],
    },
    {
      name: 'Bruce Banner',
      heroName: 'Hulk',
      strength: 100,
      attackTypes: ['Smash', 'Ground Pound', 'Thunderclap'],
    },
    {
      name: 'Thor Odinson',
      heroName: 'Thor',
      strength: 98,
      attackTypes: ['Mjolnir Strike', 'Lightning Blast', 'Hammer Spin'],
    },
    {
      name: 'Natasha Romanoff',
      heroName: 'Black Widow',
      strength: 75,
      attackTypes: ['Martial Arts', 'Electric Batons', 'Stealth Takedown'],
    },
    {
      name: 'Clint Barton',
      heroName: 'Hawkeye',
      strength: 70,
      attackTypes: ['Explosive Arrows', 'Grapple Shot', 'Rapid Fire'],
    },
    {
      name: 'Peter Parker',
      heroName: 'Spider-Man',
      strength: 88,
      attackTypes: ['Web Shot', 'Spider Kick', 'Web Swing Attack'],
    },
    {
      name: "T'Challa",
      heroName: 'Black Panther',
      strength: 92,
      attackTypes: ['Vibranium Claws', 'Pounce Attack', 'Kinetic Blast'],
    },
    {
      name: 'Stephen Strange',
      heroName: 'Doctor Strange',
      strength: 95,
      attackTypes: ['Mystic Shields', 'Portal Slash', 'Time Manipulation'],
    },
    {
      name: 'Wanda Maximoff',
      heroName: 'Scarlet Witch',
      strength: 97,
      attackTypes: ['Chaos Magic', 'Telekinesis', 'Mind Warp'],
    },
  ];
}
