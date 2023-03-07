import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  workImages = [];
  projects = [];
  hoverHead = [];
  hoverInfo = [];
  projektLink = [];

  angularprojekt: string = '';

  filterProjects() {
    return this.projects.filter((project) =>
      project.toLowerCase().includes(this.angularprojekt.toLowerCase())
    );
  }

  ngOnInit() {
    this.allProjectsLoad();
  }

  loadImages() {
    this.workImages = [
      'preview-homepage-my.jpg',
      'preview-join-my.jpg',
      'preview-pollo-loco-my.png',
      'preview-pokedex-my.png',
      'preview-ring-of-fire.jpg',
    ];
  }

  projectname() {
    this.projects = [
      'PORTFOLIO',
      'JOIN',
      'POLLO LOCO',
      'POKEDEX',
      'RING OF FIRE',
    ];
  }

  hoverHeads() {
    this.hoverHead = [
      'ANGULAR',
      'KANBAN BOARD',
      'POLLO LOCO',
      'POKEDEX',
      'RING OF FIRE',
    ];
  }

  hoverInfos() {
    this.hoverInfo = [
      'My Portfolio Page is written with Angular',
      'Manage your tasks programmed with Javascript & Bootsrap',
      'Small jump & run game with OOP',
      'First generation Pokedex using API',
      'Small card game written in Angular & Firebase used',
    ];
  }

  projektLinks() {
    this.projektLink = [
      '#',
      'https://maik-langer.developerakademie.net/JOIN-Maik/Join/login.html',
      'https://maik-langer.developerakademie.net/El%20Pollo%20Loco/index.html',
      'https://maik-langer.developerakademie.net/Pokedex/index.html',
      'https://maik-langer.developerakademie.net/ringoffire/index.html',
    ];
  }

  allProjectsLoad() {
    this.loadImages();
    this.projectname();
    this.hoverHeads();
    this.hoverInfos();
    this.projektLinks();
  }

  angularProjectsLoad() {
    this.workImages = ['preview-homepage-my.jpg', 'preview-ring-of-fire.jpg'];
    this.projects = ['PORTFOLIO', 'RING OF FIRE'];
    this.hoverHead = ['ANGULAR', 'RING OF FIRE'];
    this.hoverInfo = [
      'My Portfolio Page is written with Angular',
      'Small card game written in Angular & Firebase used',
    ];
    this.projektLink = [
      '#',
      'https://maik-langer.developerakademie.net/ringoffire/index.html',
    ];
  }

  javaScriptProjectsLoad() {
    this.workImages = [
      'preview-join-my.jpg',
      'preview-pollo-loco-my.png',
      'preview-pokedex-my.png',
    ];
    this.projects = ['JOIN', 'POLLO LOCO', 'POKEDEX'];
    this.hoverHead = ['KANBAN BOARD', 'POLLO LOCO', 'POKEDEX'];
    this.hoverInfo = [
      'Manage your tasks programmed with Javascript & Bootsrap',
      'Small jump & run game with OOP',
      'First generation Pokedex using API',
    ];
    this.projektLink = [
      'https://maik-langer.developerakademie.net/JOIN-Maik/Join/login.html',
      'https://maik-langer.developerakademie.net/El%20Pollo%20Loco/index.html',
      'https://maik-langer.developerakademie.net/Pokedex/index.html',
    ];
  }
}
