import { Member } from '../types';

export function getActiveMembers(members: Member[]): number {
  return members.filter(m => m.accessCardStatus === 'active').length;
}

export function getPaidMembers(members: Member[]): number {
  return members.filter(m => m.paymentStatus === 'paid').length;
}

export function generateAccessCardId(): string {
  return `AC${Math.floor(1000 + Math.random() * 9000)}`;
}