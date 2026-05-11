import { Component, signal, computed } from '@angular/core';
import {
  LucideAngularModule,
  LucideUserRound,
  LucidePhoneCall,
  LucideAtSign,
} from 'lucide-angular';
import { DevProfileService } from '../../../services/dev-profile/dev-profile-service';
import { DevProfile } from '../../../models/profile';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-review',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './review.html',
  styleUrl: './review.css',
})
export class Review {
  readonly LucideUserRound = LucideUserRound;
  readonly LucidePhoneCall = LucidePhoneCall;
  readonly LucideAtSign = LucideAtSign;

  devProfileData = signal<DevProfile[] | []>([]);
  displayProfileIndex = signal(0);
  displayProfileData = computed(() => {
    const data = this.devProfileData();
    const index = this.displayProfileIndex();

    return data.length ? data[index] : null;
  });

  constructor(private devProfileService: DevProfileService) {}

  ngOnInit() {
    this.devProfileService.getProfileData().subscribe((data) => {
      this.devProfileData.set(data);
      this.displayProfileIndex.set(0);
    });
  }

  nextDevProfile() {
    const length = this.devProfileData().length;
    if (!length) return;

    this.displayProfileIndex.update((prev) => (prev === length - 1 ? 0 : prev + 1));
  }

  prevDevProfile() {
    const length = this.devProfileData().length;
    if (!length) return;

    this.displayProfileIndex.update((prev) => (prev === 0 ? length - 1 : prev - 1));
  }

  copyText(text: string) {
    if (!text) return;
    navigator.clipboard.writeText(text);
    alert('Contact Info Copied!');
  }

  surpriseDevProfile() {
    const data = this.devProfileData();
    const length = data.length;

    if (!length) return;

    let randomIndex = Math.floor(Math.random() * length);
    this.displayProfileIndex.set(randomIndex);
  }
}
