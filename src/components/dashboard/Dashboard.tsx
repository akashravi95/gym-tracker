import React from 'react';
import { Member, AttendanceRecord } from '../../types';
import { Users, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import { StatCard } from '../ui/StatCard';
import { getActiveMembers, getPaidMembers } from '../../utils/memberUtils';
import { isDateToday } from '../../utils/dateUtils';

interface DashboardProps {
  members: Member[];
  attendance: AttendanceRecord[];
}

export default function Dashboard({ members, attendance }: DashboardProps) {
  const totalMembers = members.length;
  const activeMembers = getActiveMembers(members);
  const paidMembers = getPaidMembers(members);
  const todayAttendance = attendance.filter(a => isDateToday(a.checkInTime)).length;

  const stats = [
    {
      icon: Users,
      title: 'Total Members',
      value: totalMembers,
      iconColor: 'text-blue-500',
      iconBgColor: 'bg-blue-100'
    },
    {
      icon: CheckCircle,
      title: 'Active Members',
      value: activeMembers,
      iconColor: 'text-green-500',
      iconBgColor: 'bg-green-100'
    },
    {
      icon: CreditCard,
      title: 'Paid Members',
      value: paidMembers,
      iconColor: 'text-yellow-500',
      iconBgColor: 'bg-yellow-100'
    },
    {
      icon: AlertCircle,
      title: "Today's Attendance",
      value: todayAttendance,
      iconColor: 'text-purple-500',
      iconBgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}