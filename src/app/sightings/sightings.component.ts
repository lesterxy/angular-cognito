import { Component } from '@angular/core';
import { SightingsService } from '../sightings.service';
import { CognitoService } from '../cognito.service';

@Component({
  selector: 'app-sightings',
  templateUrl: './sightings.component.html',
  styleUrls: ['./sightings.component.scss']
})
export class SightingsComponent {
  sightingsArr: any
  
  constructor(private sightingsService: SightingsService, private cognitoService: CognitoService) { }

  public ngOnInit(): void {
    this.cognitoService.getCurrentSession().then(res => {
      let token = res.getIdToken().getJwtToken();
      console.log(token)
      
      this.sightingsService.retrieveAllSightings(token).subscribe(
        (resp) => {
          this.sightingsArr = resp;
          console.log("sightings = ", this.sightingsArr);
        }
      )
    })
  }
}
