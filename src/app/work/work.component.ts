import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  workImages = [];

  ngOnInit() {
    this.loadImages();
    console.log(this.workImages);
  }

  loadImages() {
    this.workImages = [
      'preview-homepage.jpg',
      'preview-join.jpg',
      'preview-polo-loco.jpg',
      'preview-ring-of-fire.png',
    ];
  }
}
