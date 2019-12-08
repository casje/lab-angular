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
      url: "assets/angular.png",
      title: "Angular"
    },
    {
      url: "assets/devops.png",
      title: "DevOps"
    },
    {
      url: "assets/fullstack.png",
      title: "FullStack"
    },
    {
      url: "assets/machinelearning.png",
      title: "Machine Learning"
    },
    {
      url: "assets/ninja.png",
      title: "Ninja"
    },
    {
      url: "assets/nodejs.png",
      title: "Node JS"
    },
    {
      url: "assets/spring.png",
      title: "Spring"
    },
    {
      url: "assets/vscode.png",
      title: "Visual Studio Code"
    },
    {
      url: "assets/vuejs.png",
      title: "Vue JS"
    }
    ,
    {
      url: "assets/netcore.png",
      title: ".Net Core"
    }
  ];
}
