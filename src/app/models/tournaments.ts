class Tournament {
  title: string[];
  text: string[];
  start_date: string;
  end_date: string;
  type: number;
  price: number;
  class: number;
  map: number;
  presents: any;
  active: boolean;
  AI: number;
  image: string;
  devices: number;
  live: boolean;
  players: number;
  isEnded: boolean;
  champion: any;
  tour_type: string;
}

class Kill_battles {
  title: string[];
  text: string[];
  start_date: string;
  map: number;
  type: number;
  device: number;
  class: number;
  price: number;
  background_image: string;
  live: boolean;
  active: boolean;
}

export class Tournaments {
  [index: number]: Tournament;
  AI: number;
  title: string[];
  kill_battles: Kill_battles;
  tournaments(tournaments: any) {
    throw new Error('Method not implemented.');
  }
}
