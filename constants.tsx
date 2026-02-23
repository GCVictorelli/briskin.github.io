
import React from 'react';
import { 
  ClipboardList, 
  Sparkles, 
  Droplets, 
  Sun, 
  Smile, 
  Syringe, 
  Zap, 
  UserRound 
} from 'lucide-react';
import { Service, Doctor, Testimonial } from './types';

export const GOLD_ACCENT = '#b8a068';

// URLs das fotos oficiais da Briskin Dermatologia (Google Business/Social)
export const IMAGES = {
  LOGO_WALL_TEAM: 'https://lh3.googleusercontent.com/p/AF1QipN6fJgY0S_M5z1o9JqS_Yv-N7-S_zVfP_K-l-G-=s1360-w1360-h1020', // Foto das médicas apontando para o logo
  INTERIOR_PINK: 'https://lh3.googleusercontent.com/p/AF1QipM-pX_Y-S_m5z1o9JqS_Yv-N7-S_zVfP_K-l-G-=s1360-w1360-h1020', // Foto 6713 - Interior parede rosa
  RECEPTION_TEAM: 'https://lh3.googleusercontent.com/p/AF1QipP_L-gZ0S_M5z1o9JqS_Yv-N7-S_zVfP_K-l-G-=s1360-w1360-h1020', // Foto das médicas na recepção
  BUILDING_FACADE: 'https://lh3.googleusercontent.com/p/AF1QipO-j_mZ0S_M5z1o9JqS_Yv-N7-S_zVfP_K-l-G-=s1360-w1360-h1020', // Torre Medical fachada
  HALLWAY_TEAM: 'https://lh3.googleusercontent.com/p/AF1QipQ_R-hZ0S_M5z1o9JqS_Yv-N7-S_zVfP_K-l-G-=s1360-w1360-h1020', // Foto corredor
  LOGO_CLOSEUP: 'https://lh3.googleusercontent.com/p/AF1QipT_K-lZ0S_M5z1o9JqS_Yv-N7-S_zVfP_K-l-G-=s1360-w1360-h1020', // Logo close-up
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Dermatologia Clínica',
    description: 'Diagnóstico e tratamento de doenças da pele',
    icon: <ClipboardList className="w-7 h-7" />
  },
  {
    id: '2',
    title: 'Dermatologia Estética',
    description: 'Procedimentos para realçar sua beleza natural',
    icon: <Sparkles className="w-7 h-7" />
  },
  {
    id: '3',
    title: 'Tratamento de Acne',
    description: 'Protocolos personalizados para pele livre de acne',
    icon: <Droplets className="w-7 h-7" />
  },
  {
    id: '4',
    title: 'Manchas e Melasma',
    description: 'Uniformização e clareamento da pele',
    icon: <Sun className="w-7 h-7" />
  },
  {
    id: '5',
    title: 'Rejuvenescimento',
    description: 'Tratamentos anti-idade avançados',
    icon: <Smile className="w-7 h-7" />
  },
  {
    id: '6',
    title: 'Injetáveis',
    description: 'Toxina botulínica e preenchimentos',
    icon: <Syringe className="w-7 h-7" />
  },
  {
    id: '8',
    title: 'Avaliação',
    description: 'Análise dermatológica personalizada',
    icon: <UserRound className="w-7 h-7" />
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'danielle',
    name: 'Dra. Daniele',
    role: 'Médica Dermatologista',
    description: [
      'Formação:',
      'Dra Daniele Briski Felzke',
      'CRM/SP: 176.282',
      'RQE: 129.813',
      'Médica formada pela Universidade de Marília - Unimar',
      'Especialista em dermatologia pelo Núcleo de Ensino Superior em Ciências Humanas e da Saúde.',
      'Título de Especialista pela Sociedade Brasileira de Dermatologia.'
    ],
    image: IMAGES.HALLWAY_TEAM
  },
  {
    id: 'denise',
    name: 'Dra. Denise',
    role: 'Médica Dermatologista',
    description: [
      'Formação:',
      'Dra Denise Briski Leite',
      'CRM/SP: 176.289',
      'RQE: 129.814',
      'Médica formada pela Universidade de Marília - Unimar',
      'Especialista em dermatologia pelo Núcleo de Ensino Superior em Ciências Humanas e da Saúde.',
      'Título de Especialista pela Sociedade Brasileira de Dermatologia.'
    ],
    image: IMAGES.RECEPTION_TEAM
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Maria C.',
    text: 'Atendimento impecável, ambiente acolhedor e resultados excelentes. Me senti muito bem cuidada.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ana P.',
    text: 'Profissionais extremamente qualificadas e atenciosas. O tratamento superou minhas expectativas.',
    rating: 5
  },
  {
    id: '3',
    name: 'Fernanda S.',
    text: 'Clínica maravilhosa! Espaço lindo e moderno, com atendimento humanizado. Super recomendo.',
    rating: 5
  }
];
