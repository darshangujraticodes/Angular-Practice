import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  service: string | null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.service = this.route.snapshot.paramMap.get('service');
  }
}
