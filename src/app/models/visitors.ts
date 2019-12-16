class Visitor {
  AI: number;
  URL: string;
  method: string;
  date: string;
  time: string;
  user_ID: number;
  ip: string;
  details: any;
}

export class Visitors {
  [index: number]: Visitor
}
