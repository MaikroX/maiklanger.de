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

  ngOnInit() {
    this.loadImages();
    this.projectname();
    this.hoverHeads();
    this.hoverInfos();
    this.projektLinks();
    console.log(this.projectname);
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
      'Manage your tasks used Javascript & Bootsrap',
      'Small jump & run game with OOP',
      'First generation Pokedex using API',
      'Small card game written in Angular & used Firebase',
    ];
  }

  projektLinks() {
    this.projektLink = [
      '#',
      'https://maik-langer.developerakademie.net/JOIN-Maik/Join/login.html',
      'https://maik-langer.developerakademie.net/El%20Pollo%20Loco/index.html',
      'https://maik-langer.developerakademie.net/Pokedex/index.html',
      'https://maik-langer.developerakademie.net/Pokedex/index.html',
    ];
  }
}
