import React from 'react';

interface StatusBadgeProps {
  status: string;
  variant: 'success' | 'warning' | 'error';
}

const variantStyles = {
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800'
};

export function StatusBadge({ status, variant }: StatusBadgeProps) {
  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${variantStyles[variant]}`}>
      {status}
    </span>
  );
}