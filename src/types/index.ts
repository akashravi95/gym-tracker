export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  membershipType: 'basic' | 'premium' | 'vip';
  accessCardId: string;
  accessCardStatus: 'active' | 'blocked';
  joinDate: string;
  lastPaymentDate: string;
  paymentStatus: 'paid' | 'pending' | 'overdue';
}

export interface AttendanceRecord {
  id: string;
  memberId: string;
  checkInTime: string;
  checkOutTime?: string;
}