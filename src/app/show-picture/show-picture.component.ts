import { Component, OnInit } from '@angular/core';
import PicsJson from '../../assets/pics/picList.json';

@Component({
  selector: 'app-show-picture',
  templateUrl: './show-picture.component.html',
  styleUrls: ['./show-picture.component.scss']
})
export class ShowPictureComponent implements OnInit {

  constructor() {
    console.table(PicsJson.pics);
   }

  ngOnInit(): void {

    //var data = require('asset/pics/picList.json');
    //console.log("Json data : ", JSON.stringify(data));
  }

}
