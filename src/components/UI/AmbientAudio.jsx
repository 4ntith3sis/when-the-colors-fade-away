import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AmbientAudio = ({ isMonochrome = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const osc1Ref = useRef(null);
  const osc2Ref = useRef(null);
  const gainNodeRef = useRef(null);

  const toggleAudio = () => {
    if (!isPlaying) {
      startSoundscape();
    } else {
      stopSoundscape();
    }
  };

  const startSoundscape = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.05, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Soft Warm Atmosphere (Dual Sine/Triangle Oscillators)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(isMonochrome ? 110 : 146.83, ctx.currentTime); // D3 / A2

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(isMonochrome ? 55 : 73.42, ctx.currentTime); // Low bass drone

      osc1.connect(masterGain);
      osc2.connect(masterGain);

      osc1.start();
      osc2.start();

      osc1Ref.current = osc1;
      osc2Ref.current = osc2;

      setIsPlaying(true);
    } catch (e) {
      console.warn("Web Audio API error", e);
    }
  };

  const stopSoundscape = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1);
      setTimeout(() => {
        osc1Ref.current?.stop();
        osc2Ref.current?.stop();
        audioCtxRef.current?.close();
        setIsPlaying(false);
      }, 1000);
    } else {
      setIsPlaying(false);
    }
  };

  // Adjust pitch when monochrome state changes
  useEffect(() => {
    if (isPlaying && osc1Ref.current && audioCtxRef.current) {
      const targetFreq = isMonochrome ? 110 : 146.83;
      osc1Ref.current.frequency.exponentialRampToValueAtTime(targetFreq, audioCtxRef.current.currentTime + 3);
    }
  }, [isMonochrome, isPlaying]);

  return (
    <button
      onClick={toggleAudio}
      className="ambient-audio-btn"
      title="Toggle Atmospheric Soundscape"
      aria-label={isPlaying ? "Mute atmospheric soundscape" : "Play atmospheric soundscape"}
    >
      {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} opacity={0.6} />}
    </button>
  );
};

