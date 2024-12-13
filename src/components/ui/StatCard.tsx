import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from './Card';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: number;
  iconColor: string;
  iconBgColor: string;
}

export function StatCard({ icon: Icon, title, value, iconColor, iconBgColor }: StatCardProps) {
  return (
    <Card>
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${iconBgColor} ${iconColor}`}>
          <Icon className="h-8 w-8" />
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-500 uppercase">{title}</p>
          <p className="text-2xl font-semibold text-gray-700">{value}</p>
        </div>
      </div>
    </Card>
  );
}