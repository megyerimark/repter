import { Component, OnInit } from '@angular/core';
import { JaratserviceService } from '../shared/jaratservice.service';

@Component({
  selector: 'app-repter',
  templateUrl: './repter.component.html',
  styleUrls: ['./repter.component.scss']
})
export class RepterComponent implements OnInit {
  // jaratok:any= [];
  jaratok! :any;
  constructor (private api: JaratserviceService){}


  ngOnInit(): void {
    this.getJaratok();
    
  }

  getJaratok(){
    this.api.getJaratok().subscribe({

      next :(jaratok)=>{
        this.jaratok = jaratok;
      },
      error: (err)=>{}
    });
  }

}
