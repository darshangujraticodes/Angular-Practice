import { Component, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  search = signal('');
  products = signal<string[]>([
    'Samsung',
    'Apple iPhone',
    'Vivo',
    'Asus',
    'OnePlus',
    'Nothing',
    'Jio',
  ]);

  filteredData = computed(() => {
    const searchValue = this.search().toLowerCase();

    return this.products().filter((item) => item.toLowerCase().includes(searchValue));
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe((params) => {
      const searchParams = params['search'] || '';
      this.search.set(searchParams);

      console.log(searchParams);
    });
  }

  updateUrl() {
    this.router.navigate([], {
      queryParams: { search: this.search() },
    });
  }
}
