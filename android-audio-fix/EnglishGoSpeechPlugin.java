package com.englishgo.app;

import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginMethod;
import java.util.Locale;

@CapacitorPlugin(name="EnglishGoSpeech")
public class EnglishGoSpeechPlugin extends Plugin {
    private TextToSpeech tts;
    private boolean ready=false;
    private boolean initializing=false;
    private final java.util.ArrayList<PluginCall> pending = new java.util.ArrayList<>();

    @PluginMethod
    public void speak(PluginCall call) {
        String text=call.getString("text","");
        if(text==null || text.trim().isEmpty()){call.resolve();return;}
        getActivity().runOnUiThread(()->{
            if(ready){play(call);return;}
            pending.add(call);
            if(initializing)return;
            initializing=true;
            tts=new TextToSpeech(getContext(),status->{
                getActivity().runOnUiThread(()->{
                    initializing=false;
                    if(status==TextToSpeech.SUCCESS){
                        int result=tts.setLanguage(Locale.US);
                        ready=result!=TextToSpeech.LANG_MISSING_DATA && result!=TextToSpeech.LANG_NOT_SUPPORTED;
                    }
                    for(PluginCall queued:pending){
                        if(ready)play(queued);
                        else queued.reject("Voz inglesa indisponível. Instale os dados de voz em inglês no Android.");
                    }
                    pending.clear();
                });
            });
        });
    }
    private void play(PluginCall call){
        String text=call.getString("text","");
        Double rate=call.getDouble("rate",0.85);
        float speed=(float)Math.max(0.3,Math.min(1.5,rate));
        tts.stop();
        tts.setSpeechRate(speed);
        int result=tts.speak(text,TextToSpeech.QUEUE_FLUSH,null,"english-go-"+System.nanoTime());
        if(result==TextToSpeech.ERROR)call.reject("Falha no mecanismo de síntese de voz.");
        else call.resolve();
    }
    @PluginMethod
    public void stop(PluginCall call){if(tts!=null)tts.stop();call.resolve();}
    @Override protected void handleOnDestroy(){
        if(tts!=null){tts.stop();tts.shutdown();tts=null;}
        super.handleOnDestroy();
    }
}
