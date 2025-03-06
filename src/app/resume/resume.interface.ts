export interface Resume {
  name: string;
  position: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  summary: string;
  habilidadesTecnicas: HabilidadesTecnicas;
  experience: Experience[];
}

export interface HabilidadesTecnicas {
  lenguajes: string[];
  frameworks: string[];
  basesDeDatos: string[];
  apis: string[];
  testing: string[];
  devOpsCloud: string[];
  herramientas: string[];
}

export interface Experience {
  company: string;
  role: string;
  years: string;
  description: string;
}
