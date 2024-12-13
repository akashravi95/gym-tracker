import React from 'react';
import { Member } from '../../types';
import { LockIcon, UnlockIcon } from 'lucide-react';
import { StatusBadge } from '../ui/StatusBadge';

interface MemberTableProps {
  members: Member[];
  onToggleAccess: (memberId: string) => void;
}

export default function MemberTable({ members, onToggleAccess }: MemberTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Member
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Membership
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payment Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Access Card
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {members.map((member) => (
            <tr key={member.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{member.name}</div>
                    <div className="text-sm text-gray-500">{member.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge
                  status={member.membershipType}
                  variant="success"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge
                  status={member.paymentStatus}
                  variant={
                    member.paymentStatus === 'paid' ? 'success' :
                    member.paymentStatus === 'pending' ? 'warning' : 'error'
                  }
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {member.accessCardId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onToggleAccess(member.id)}
                  className={`text-${member.accessCardStatus === 'blocked' ? 'red' : 'green'}-600 hover:text-${member.accessCardStatus === 'blocked' ? 'red' : 'green'}-900`}
                >
                  {member.accessCardStatus === 'blocked' ? 
                    <LockIcon className="h-5 w-5" /> : 
                    <UnlockIcon className="h-5 w-5" />
                  }
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}