export enum UserRole {
  DONOR = 'DONOR',
  RECEIVER = 'RECEIVER',
  VOLUNTEER = 'VOLUNTEER',
  ADMIN = 'ADMIN'
}

export enum DonationStatus {
  AVAILABLE = 'AVAILABLE',
  CLAIMED = 'CLAIMED',
  PICKED_UP = 'PICKED_UP',
  DELIVERED = 'DELIVERED'
}

export interface Donation {
  id: string;
  donorName: string;
  foodType: string;
  quantity: string; // e.g., "50 meals" or "10kg"
  pickupTime: string;
  location: string;
  expiry: string;
  status: DonationStatus;
  notes?: string;
  createdAt: number;
}

export interface LogisticsRoute {
  id: string;
  driverName: string;
  stops: string[]; // List of Donation IDs or Location names
  estimatedTime: string;
  efficiencyScore: number;
  aiReasoning: string;
}

export interface ImpactStat {
  name: string;
  value: number;
  unit: string;
}
