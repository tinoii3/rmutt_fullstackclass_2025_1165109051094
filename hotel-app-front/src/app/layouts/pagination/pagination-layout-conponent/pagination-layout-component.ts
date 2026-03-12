import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-layout-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './pagination-layout-component.html',
  styleUrl: './pagination-layout-component.scss',
})
export class PaginationLayoutComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    const total = this.totalPages && this.totalPages > 0 ? this.totalPages : 1;
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  onPageChange(page: number) {
    if(page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }
}
