import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-picture',
  templateUrl: './show-picture.component.html',
  styleUrls: ['./show-picture.component.scss']
})
export class ShowPictureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var data = require('asset/pics/picList.json');
    console.log("Json data : ", JSON.stringify(data));
  }

}
