import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { createRef } from 'react';
import { api } from '@/common/api';
import axios from 'axios';
export type CaptchaProps = {};
export default function Captcha({ ...props }: CaptchaProps) {
  const { register, handleSubmit, setError } = useForm();
  const recaptchaRef = createRef<ReCAPTCHA>();

  // -----------------------------------------------------------------------------------------------
  const onSubmit = async (data: any) => {
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setError('captcha', {
        type: 'manual',
        message: 'Veuillez compléter le CAPTCHA'
      });
      return;
    }

    try {
      const result = await axios.get(api.captcha);

      if (result) {
        // Traitement après succès
      } else {
        // Gestion des erreurs
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire', error);
    }
  };
  // -----------------------------------------------------------------------------------------------
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        ref={recaptchaRef}
      />

    </form>
  );
}
