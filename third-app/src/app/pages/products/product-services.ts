import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  productList() {
    return [
      {
        id: 1,
        name: 'Keyboard',
        price: 1500,
        company: 'Logitech',
        warranty_available: false,
      },
      {
        id: 2,
        name: 'Mouse',
        price: 800,
        company: 'HP',
        warranty_available: false,
      },
      {
        id: 3,
        name: 'RAM 8GB',
        price: 3200,
        company: 'Corsair',
        warranty_available: true,
      },
      {
        id: 4,
        name: 'Monitor 24 inch',
        price: 12000,
        company: 'Samsung',
        warranty_available: true,
      },
      {
        id: 5,
        name: 'SSD 512GB',
        price: 4500,
        company: 'Kingston',
        warranty_available: true,
      },
      {
        id: 6,
        name: 'External Hard Drive 1TB',
        price: 5500,
        company: 'Seagate',
        warranty_available: true,
      },
      {
        id: 7,
        name: 'Graphics Card',
        price: 25000,
        company: 'NVIDIA',
        warranty_available: true,
      },
      {
        id: 8,
        name: 'Motherboard',
        price: 10000,
        company: 'ASUS',
        warranty_available: true,
      },
      {
        id: 9,
        name: 'Power Supply Unit',
        price: 4000,
        company: 'Cooler Master',
        warranty_available: true,
      },
      {
        id: 10,
        name: 'Webcam',
        price: 2500,
        company: 'Logitech',
        warranty_available: false,
      },
    ];
  }
}
