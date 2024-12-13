import { Member, AttendanceRecord } from '../types';

export const mockMembers: Member[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    membershipType: 'premium',
    accessCardId: 'AC001',
    accessCardStatus: 'active',
    joinDate: '2024-01-15',
    lastPaymentDate: '2024-03-01',
    paymentStatus: 'paid'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '123-456-7891',
    membershipType: 'basic',
    accessCardId: 'AC002',
    accessCardStatus: 'blocked',
    joinDate: '2024-02-01',
    lastPaymentDate: '2024-02-01',
    paymentStatus: 'overdue'
  }
];

export const mockAttendance: AttendanceRecord[] = [
  {
    id: '1',
    memberId: '1',
    checkInTime: new Date().toISOString(),
    checkOutTime: new Date().toISOString()
  }
];

export const mockClassSessions = [
  {
    id: '1',
    name: 'Yoga Basics',
    instructor: 'Sarah Johnson',
    time: '09:00 AM',
    duration: '60 min',
    capacity: 20,
    enrolled: 15
  },
  {
    id: '2',
    name: 'HIIT Training',
    instructor: 'Mike Wilson',
    time: '10:30 AM',
    duration: '45 min',
    capacity: 15,
    enrolled: 12
  }
];