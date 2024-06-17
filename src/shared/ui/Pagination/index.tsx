import React, { Component } from 'react';
import './styles.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className: string;
}

export class Pagination extends Component<PaginationProps> {
  render() {
    const { currentPage, totalPages, onPageChange, className } = this.props;
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return (
      <div className={`pagination ${className}`}>
        <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
          В начало
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          В конец
        </button>
      </div>
    );
  }
}
