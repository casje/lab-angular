import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stickers';

  adesivos = [
    {
      ident: 10,
      url: "assets/angular.png",
      title: "Angular"
    },
    {
      ident: 13,
      url: "assets/devops.png",
      title: "DevOps"
    },
    {
      ident: 14,
      url: "assets/fullstack.png",
      title: "FullStack"
    },
    {
      ident: 17,
      url: "assets/machinelearning.png",
      title: "Machine Learning"
    },
    {
      ident: 18,
      url: "assets/ninja.png",
      title: "Ninja"
    },
    {
      ident: 19,
      url: "assets/nodejs.png",
      title: "Node JS"
    },
    {
      ident: 21,
      url: "assets/spring.png",
      title: "Spring"
    },
    {
      ident: 22,
      url: "assets/vscode.png",
      title: "Visual Studio Code"
    },
    {
      ident: 23,
      url: "assets/vuejs.png",
      title: "Vue JS"
    },
    {
      ident: 27,
      url: "assets/netcore.png",
      title: ".Net Core"
    }
  ];
}
