import { Component, OnInit } from '@angular/core';
import { ThemeVariables, shadowBuilder, LyTheme2 } from '@alyle/ui';
import { MyapiService } from '../myapi.service';
import { interval } from 'rxjs';

const styles = (theme: ThemeVariables) => ({
  item: {
    
    textAlign: 'center',
    background: theme.background.secondary,
    boxShadow: shadowBuilder(0),
    'padding-right': '30px',
    height: '100%',
    padding: '50px 10px',
    border: '.5px solid black',
    'overflow-wrap': 'break-word'    
  }
});

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  readonly classes = this.theme.addStyleSheet(styles);

  constructor(
    private theme: LyTheme2, private myser: MyapiService
  ) { }
    
  recievedDataFromAPI:any;
  myinterval = interval(1000);
  poppedData: object;
  display: boolean = false;
  SearchByTitle:string;

  

  ngOnInit() {
    this.getDataFromService();
    this.myinterval.subscribe(()=>this.getDataFromService());
  }

  getDataFromService(){
    this.myser.getDataMethod().subscribe(
      (responseFromAPI:any)=>{
        this.recievedDataFromAPI = responseFromAPI.hits;
        console.log(this.recievedDataFromAPI);
      }
    );
  }

  ShowModelToView(poppedDataOnClick){
    this.poppedData = poppedDataOnClick;
    this.display = true;
  }

}
