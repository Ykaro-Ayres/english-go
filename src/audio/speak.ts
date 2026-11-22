import { Capacitor, registerPlugin } from '@capacitor/core';

type NativeSpeech = { speak(options: {text:string; rate:number; language:string}):Promise<void>; stop():Promise<void> };
const nativeSpeech = registerPlugin<NativeSpeech>('EnglishGoSpeech');
export async function speakEnglish(text:string, rate=0.85):Promise<void> {
  if (!text.trim()) return;
  if (Capacitor.getPlatform()==='android') {
    try { await nativeSpeech.speak({text,rate,language:'en-US'}); }
    catch(e) { console.error('Android TTS:',e); alert('Não foi possível reproduzir o áudio. Instale a voz inglesa nas configurações de síntese de voz do Android.'); }
    return;
  }
  if (!('speechSynthesis' in window)) {alert('Voz indisponível neste navegador.');return;}
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.lang='en-US';utterance.rate=rate;
  const voice=window.speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('en') && v.localService);
  if(voice)utterance.voice=voice;
  window.speechSynthesis.speak(utterance);
}
