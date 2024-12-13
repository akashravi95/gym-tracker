import React from 'react';
import { Member, AttendanceRecord } from '../types';
import { Users, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

interface DashboardProps {
  members: Member[];
  attendance: AttendanceRecord[];
}

export default function Dashboard({ members, attendance }: DashboardProps) {
  const totalMembers = members.length;
  const activeMembers = members.filter(m => m.accessCardStatus === 'active').length;
  const paidMembers = members.filter(m => m.paymentStatus === 'paid').length;
  const todayAttendance = attendance.filter(a => 
    new Date(a.checkInTime).toDateString() === new Date().toDateString()
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-500">
            <Users className="h-8 w-8" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500 uppercase">Total Members</p>
            <p className="text-2xl font-semibold text-gray-700">{totalMembers}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-green-100 text-green-500">
            <CheckCircle className="h-8 w-8" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500 uppercase">Active Members</p>
            <p className="text-2xl font-semibold text-gray-700">{activeMembers}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
            <CreditCard className="h-8 w-8" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500 uppercase">Paid Members</p>
            <p className="text-2xl font-semibold text-gray-700">{paidMembers}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-purple-100 text-purple-500">
            <AlertCircle className="h-8 w-8" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500 uppercase">Today's Attendance</p>
            <p className="text-2xl font-semibold text-gray-700">{todayAttendance}</p>
          </div>
        </div>
      </div>
    </div>
  );
}