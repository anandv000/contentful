import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{

  constructor(private service:ContentfulService) { }

  data:any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log('Method',res);
    })
    
    this.service.fetchDatas().subscribe((res:any)=>{
      // this.data = res.items[0].fields;
      console.log('http==all',res);
    })

    this.service.fetchData().subscribe((res:any)=>{
      // this.data = res.items[0].fields;
      console.log('http==single',res);
    })
  }

}
