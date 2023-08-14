export interface ApiDataType {
  id: number;
  status: boolean;
  alarm: string;
  assetType: string;
  asset: string;
  system: string;
  resp: string;
  approved: boolean;
  isChecked: boolean;
}

export const ApiData: ApiDataType[] = [
  {
    id: 23443,
    status: true,
    alarm: 'Nulla viverra vulputate elit',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    system: 'Environment',
    resp: 'Kira Madsen',
    approved: false,
    isChecked: false
  },
  {
    id: 45652,
    status: true,
    alarm: 'Purus viverra vulputate elit',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    system: 'Environment',
    resp: 'Kira Madsen',
    approved: false,
    isChecked: false
  },
  {
    id: 96543,
    status: true,
    alarm: 'Vestibulum viverra vulputate elit',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    system: 'Environment',
    resp: 'Kira Madsen',
    approved: false,
    isChecked: false
  },
  {
    id: 12386,
    status: true,
    alarm: 'Maecenas viverra vulputate elit',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    system: 'Environment',
    resp: 'Kira Madsen',
    approved: false,
    isChecked: false
  },
  {
    id: 34567,
    status: true,
    alarm: 'Aliquam viverra vulputate elit',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    system: 'Environment',
    resp: 'Kira Madsen',
    approved: false,
    isChecked: false
  },
  {
    id: 67543,
    status: true,
    alarm: 'Nunc viverra vulputate elit',
    assetType: 'Molestie magna',
    asset: 'ABC-08-01',
    system: 'Environment',
    resp: 'Kira Madsen',
    approved: false,
    isChecked: false
  }
];
