// -------------------------------------------------------------------------------------------------

import toast from 'react-hot-toast';

export function random(min: number = 1, max: number = 10): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function toastMe(message: string) {
  toast.success(message, {
    duration: 3000, // Durée d'affichage en millisecondes
    style: {
      background: '#333',
      color: '#fff',
      fontWeight: 'bold'
    }
  });
}
