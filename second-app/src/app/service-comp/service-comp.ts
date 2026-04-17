import { Component } from '@angular/core';
import { DisplayCount } from '../display-count/display-count';
import { ControlCount } from '../control-count/control-count';

@Component({
  selector: 'app-service-comp',
  imports: [DisplayCount , ControlCount],
  templateUrl: './service-comp.html',
  styleUrl: './service-comp.css',
})
export class ServiceComp {}
