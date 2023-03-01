import { Component, OnInit } from '@angular/core';
import { ViewChildren, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, AfterViewInit {
  logos = [];
  skill = [];
  logos2 = [];
  skill2 = [];
  logos3 = [];
  skill3 = [];

  ngOnInit() {
    this.loadImages();
    this.loadSkills();
  }

  @ViewChildren('skillContain') skillContains: any;
  @ViewChildren('skillContain2') skillContain2: any;
  @ViewChildren('skillContain3') skillContain3: any;

  ngAfterViewInit(): void {
    this.animateFirstRow();
    this.animateSecondRow();
    this.animateThirdRow();
  }

  loadImages() {
    this.logos = ['javascript.png', 'angular.png', 'css.png'];
    this.logos2 = ['scrum.png', 'git.png', 'design-thinking.png'];
    this.logos3 = ['rest-api.png', 'database.png', 'responsive.png'];
  }

  loadSkills() {
    this.skill = ['JavaScript', 'Angular', 'CSS'];
    this.skill2 = ['SCRUM', 'Git', 'Design-thinking'];
    this.skill3 = ['REST-API', 'Database', 'Responsive'];
  }

  animateFirstRow() {
    this.skillContains.forEach((skillContain: ElementRef) => {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let square = entry.target.querySelector('.skill-entry1');

          if (entry.isIntersecting) {
            square.classList.add('skill1');
          } else {
            square.classList.remove('skill1');
          }
        });
      });

      observer.observe(skillContain.nativeElement);
    });
  }

  animateSecondRow() {
    this.skillContain2.forEach((skillContain2: ElementRef) => {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const square = entry.target.querySelector('.skill-entry2');

          if (entry.isIntersecting) {
            square.classList.add('skill2');
          } else {
            square.classList.remove('skill2');
          }
        });
      });

      observer.observe(skillContain2.nativeElement);
    });
  }

  animateThirdRow() {
    this.skillContain3.forEach((skillContain3: ElementRef) => {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const square = entry.target.querySelector('.skill-entry3');
          if (entry.isIntersecting) {
            square.classList.add('skill3');
          } else {
            square.classList.remove('skill3');
          }
        });
      });

      observer.observe(skillContain3.nativeElement);
    });
  }
}
