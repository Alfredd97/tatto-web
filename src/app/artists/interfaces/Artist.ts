import { Tatto } from "./Tatto";

export interface Artist {
  id: number;
  name: string;
  image: string;
  description: string;
  tattos: Tatto[];
}
