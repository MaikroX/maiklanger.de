import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  logos = [];
  skill = [];

  ngOnInit() {
    this.loadImages();
    this.loadSkills();
  }

  loadImages() {
    this.logos = [
      'javascript.png',
      'angular.png',
      'css.png',
      'scrum.png',
      'git.png',
      'design-thinking.png',
      'rest-api.png',
      'database.png',
      'responsive.png',
    ];
  }

  loadSkills() {
    this.skill = [
      'JavaScript',
      'Angular',
      'CSS',
      'SCRUM',
      'Git',
      'Design-thinking',
      'REST-API',
      'Database',
      'Responsive',
    ];
  }
}
