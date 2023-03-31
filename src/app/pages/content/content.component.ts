import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  photoCover:string = "https://www.unodata.com.br/wp-content/uploads/2022/10/tecnologia-1.jpg"
  contentTitle:string = "NOTÍCIA"
  contentDescription:string = "HELLO"

  constructor(){}

  ngOnInit(): void {

  }

}
