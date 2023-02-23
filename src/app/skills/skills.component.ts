import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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
    console.log(this.logos);
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
      'test-automation.png',
      'database.png',
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
      'Test-Automation',
      'Database',
    ];
  }
}
