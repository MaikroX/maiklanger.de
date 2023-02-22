import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: '/skills.component.html',
  styleUrls: ['./skills.component.scss'],
  template: `
    <div class="skill-contain">
      <div class="logo" *ngFor="let image of logos">
        <img [src]="image.src" alt="" />
      </div>
      <div class="skill"></div>
    </div>
  `,
})
export class SkillsComponent implements OnInit {
  logos = []; // Ändern Sie "logo" in "logos"

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.logos = [
      // Ändern Sie "logo" in "logos"
      { src: 'src/assets/img/skill-logo/javascript.png' },
      { src: '/assets/img/skill-logo/angular.png' },
      { src: '/assets/img/skill-logo/css.png' },
      { src: '/assets/img/skill-logo/scrum.png' },
      { src: '/assets/img/skill-logo/git.png' },
      { src: '/assets/img/skill-logo/design-thinking.png' },
      { src: '/assets/img/skill-logo/rest-api.png' },
      { src: '/assets/img/skill-logo/test-automation.png' },
      { src: '/assets/img/skill-logo/database.png' },
    ];
  }
}
