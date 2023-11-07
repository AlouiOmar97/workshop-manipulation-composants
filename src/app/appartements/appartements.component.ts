import { Component } from '@angular/core';
import { Appartement } from '../core/models/appartement';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-appartements',
  templateUrl: './appartements.component.html',
  styleUrls: ['./appartements.component.css']
})
export class AppartementsComponent {
  residencesList: Residence[]=[
    {id: 1, name: "Residence 1", address: "Address 1", image:"image 1"},
    {id: 1, name: "Residence 2", address: "Address 2", image:"image 2"},
    {id: 1, name: "Residence 3", address: "Address 3", image:"image 3"}
  ]

}
