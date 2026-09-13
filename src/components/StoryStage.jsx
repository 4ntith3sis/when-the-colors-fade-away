import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { STORY_SCENES } from '../data/storyScenes';
import { CharacterMan } from './CharacterMan';
import { CharacterWoman } from './CharacterWoman';
import {
  Scene1Environment,
  Scene2Environment,
  Scene3Environment,
  Scene4Environment,
  Scene5Environment,
  Scene6Environment,
  Scene7Environment,
  Scene8Environment,
  SceneMonoEnvironment
} from './environments/EditorialEnvironments';
import { NarrativeOverlay } from './NarrativeOverlay';
import { ProgressIndicator } from './UI/ProgressIndicator';
import { AmbientAudio } from './UI/AmbientAudio';
import { ScrollIndicator } from './UI/ScrollIndicator';

gsap.registerPlugin(ScrollTrigger);

export const StoryStage = () => {
  const containerRef = useRef(null);
  const stageRef = useRef(null);

  // Normalized Scroll Progress (0.0 to 1.0)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [subTextIndex, setSubTextIndex] = useState(0);
  const [sweepProgress, setSweepProgress] = useState(0);
  const [journeyOffset, setJourneyOffset] = useState(0);
  const [grayscaleVal, setGrayscaleVal] = useState(0);
  const [hasReachedMonoLock, setHasReachedMonoLock] = useState(false);

  // ANCHOR POSITIONS:
  // MAN IS ON THE LEFT SIDE (x < 0)
  // WOMAN IS ON THE RIGHT SIDE (x > 0)
  // Scene 01: MAN (Left) →    ← WOMAN (Right)
  //   - Man (Left): flipX = true (faces RIGHT →)
  //   - Woman (Right): flipX = true (faces LEFT ←)
  // Scene 03: "We stopped listening." -> BOTH TURN AWAY: MAN (Left) ←    → WOMAN (Right)
  //   - Man (Left): flipX = false (faces LEFT ←)
  //   - Woman (Right): flipX = false (faces RIGHT →)
  const [manPos, setManPos] = useState({ x: -340, y: 0, opacity: 1, flipX: false, facingFactor: 1, scale: 0.8, rotation: 0 });
  const [womanPos, setWomanPos] = useState({ x: 340, y: 0, opacity: 1, flipX: true, facingFactor: -1, scale: 0.78, rotation: 0 });

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll connected to native window scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5
    });

    function updateLenis(time) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(updateLenis);
    lenis.on('scroll', ScrollTrigger.update);

    // 2. Window Scroll & Resize Event Listener & Timeline Calculator
    const handleScrollUpdate = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = (containerRef.current?.clientHeight || document.documentElement.scrollHeight) - window.innerHeight;
      
      if (maxScroll <= 0) return;

      const windowW = window.innerWidth || 1200;
      // Calculate responsive screen factor so character horizontal separation scales with viewport width
      let screenFactor = 1.0;
      if (windowW < 1200) {
        screenFactor = Math.max(0.32, windowW / 1200);
      }

      // Calculate character scale multiplier for smaller mobile screens
      const mobileScaleMult = windowW < 480 ? 0.72 : windowW < 768 ? 0.85 : 1.0;

      // Normalized Progress (0.0 -> 1.0)
      const rawProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
      setScrollProgress(rawProgress);

      const totalScenes = STORY_SCENES.length;
      const currentIdx = Math.min(totalScenes - 1, Math.floor(rawProgress * totalScenes));
      setActiveSceneIndex(currentIdx);

      // SCENE SPECIFIC ANIMATIONS DRIVEN CONTINUOUSLY BY SCROLL PROGRESS
      if (rawProgress < 0.0909) {
        // Scene 01: "We found each other." (0.00 -> 0.09)
        // MAN (Left) →    ← WOMAN (Right) - Facing each other
        const prog = rawProgress / 0.0909;
        setManPos({ x: (-340 + prog * 240) * screenFactor, y: 0, opacity: 1, facingFactor: 1, scale: 0.8 * mobileScaleMult, rotation: 0 });
        setWomanPos({ x: (340 - prog * 240) * screenFactor, y: 0, opacity: 1, facingFactor: -1, scale: 0.78 * mobileScaleMult, rotation: 0 });
      } else if (rawProgress < 0.1818) {
        // Scene 02: "We thought it would last." (0.09 -> 0.18)
        // MAN (Left) →    ← WOMAN (Right) - Facing each other
        const prog = (rawProgress - 0.0909) / 0.0909;
        setManPos({ x: (-100 - Math.sin(prog * Math.PI) * 15) * screenFactor, y: 0, opacity: 1, facingFactor: 1, scale: 0.82 * mobileScaleMult, rotation: 0 });
        setWomanPos({ x: (100 + Math.sin(prog * Math.PI) * 15) * screenFactor, y: 0, opacity: 1, facingFactor: -1, scale: 0.8 * mobileScaleMult, rotation: 0 });
      } else if (rawProgress < 0.2727) {
        // Scene 03: "We stopped listening." (0.18 -> 0.27)
        const prog = (rawProgress - 0.1818) / 0.0909;
        const manFacing = Math.cos(prog * Math.PI); // Smoothly interpolates from +1.0 to -1.0
        const womanFacing = -Math.cos(prog * Math.PI); // Smoothly interpolates from -1.0 to +1.0

        setManPos({
          x: -100 * screenFactor,
          y: 0,
          opacity: 1,
          facingFactor: manFacing,
          rotation: 0,
          scale: 0.82 * mobileScaleMult
        });
        setWomanPos({
          x: 100 * screenFactor,
          y: 0,
          opacity: 1,
          facingFactor: womanFacing,
          rotation: 0,
          scale: 0.8 * mobileScaleMult
        });
      } else if (rawProgress < 0.3636) {
        // Scene 04: The Separation ("Goodbye.") (0.27 -> 0.36) - MAN (Left) ←    → WOMAN (Right)
        const prog = (rawProgress - 0.2727) / 0.0909;
        setManPos({ x: (-100 - prog * 550) * screenFactor, y: 0, opacity: Math.max(0, 1 - prog * 1.2), facingFactor: -1, scale: 0.8 * mobileScaleMult, rotation: 0 });
        setWomanPos({ x: (100 + prog * 550) * screenFactor, y: 0, opacity: Math.max(0, 1 - prog * 1.2), facingFactor: 1, scale: 0.78 * mobileScaleMult, rotation: 0 });
      } else if (rawProgress < 0.4545) {
        // Scene 5: Empty Space (0.36 -> 0.45) - Empty room & scarf
        setManPos({ x: -900 * screenFactor, y: 0, opacity: 0, facingFactor: -1, scale: 0.8 * mobileScaleMult, rotation: 0 });
        setWomanPos({ x: 900 * screenFactor, y: 0, opacity: 0, facingFactor: 1, scale: 0.78 * mobileScaleMult, rotation: 0 });
      } else if (rawProgress < 0.5454) {
        // Scene 6: She's Gone (0.45 -> 0.54) - Night headlights sweep
        const prog = (rawProgress - 0.4545) / 0.0909;
        setSweepProgress(prog);
        setManPos({ x: -900 * screenFactor, y: 0, opacity: 0, facingFactor: -1, scale: 0.8 * mobileScaleMult, rotation: 0 });
        setWomanPos({ x: 900 * screenFactor, y: 0, opacity: 0, facingFactor: 1, scale: 0.78 * mobileScaleMult, rotation: 0 });
      } else if (rawProgress < 0.6363) {
        // Scene 7: The Search (0.54 -> 0.63) - Horizontal camera journey
        const prog = (rawProgress - 0.5454) / 0.0909;
        setJourneyOffset(prog);
        setSubTextIndex(Math.min(2, Math.floor(prog * 3)));
        setWomanPos({ x: 900 * screenFactor, y: 0, opacity: 0, facingFactor: 1, scale: 0, rotation: 0 });
        setManPos({
          x: (-100 + Math.sin(prog * Math.PI * 6) * 40) * screenFactor,
          y: 0,
          opacity: 1,
          facingFactor: -1,
          scale: 0.75 * mobileScaleMult,
          rotation: 0
        });
      } else if (rawProgress < 0.7272) {
        // Scene 8: Too Late (0.63 -> 0.72) - Pier climax, camera zooms out
        const prog = (rawProgress - 0.6363) / 0.0909;
        setWomanPos({ x: 900 * screenFactor, y: 0, opacity: 0, facingFactor: 1, scale: 0, rotation: 0 });
        setManPos({
          x: 0,
          y: 0,
          opacity: 1,
          facingFactor: -1,
          scale: (0.75 - prog * 0.45) * mobileScaleMult,
          rotation: 0
        });
      } else if (rawProgress < 0.8181) {
        // Scene 9: Signature Monochrome Transition (0.72 -> 0.81)
        const prog = (rawProgress - 0.7272) / 0.0909;
        const currentGrayscale = Math.min(100, Math.floor(prog * 100));
        setGrayscaleVal(currentGrayscale);

        if (currentGrayscale >= 98) {
          setHasReachedMonoLock(true);
        }

        setWomanPos({ x: 900 * screenFactor, y: 0, opacity: 0, facingFactor: 1, scale: 0, rotation: 0 });
        setManPos({ x: 0, y: 0, opacity: 1, facingFactor: -1, scale: 0.3 * mobileScaleMult, rotation: 0 });
      } else if (rawProgress < 0.9090) {
        // Scene 10: After (0.81 -> 0.90) - Monochrome fog
        setGrayscaleVal(100);
        setHasReachedMonoLock(true);
        setWomanPos({ x: 900 * screenFactor, y: 0, opacity: 0, facingFactor: 1, scale: 0, rotation: 0 });
        setManPos({ x: 0, y: 0, opacity: 0.8, facingFactor: -1, scale: 0.28 * mobileScaleMult, rotation: 0 });
      } else if (rawProgress < 0.9600) {
        // Scene 11: Memory (0.90 -> 0.96) - Shadow echoes
        setGrayscaleVal(100);
        setHasReachedMonoLock(true);
        setWomanPos({ x: 900 * screenFactor, y: 0, opacity: 0, facingFactor: 1, scale: 0, rotation: 0 });
        setManPos({ x: 0, y: 0, opacity: 0.7, facingFactor: -1, scale: 0.25 * mobileScaleMult, rotation: 0 });
      } else {
        // Scene 12: The End (0.96 -> 1.00) - Fade out
        const prog = (rawProgress - 0.9600) / 0.0400;
        setGrayscaleVal(100);
        setHasReachedMonoLock(true);
        setWomanPos({ x: 900 * screenFactor, y: 0, opacity: 0, facingFactor: 1, scale: 0, rotation: 0 });
        setManPos({
          x: 0,
          y: 0,
          opacity: Math.max(0.08, 0.7 - prog * 0.65),
          facingFactor: -1,
          scale: 0.22 * mobileScaleMult,
          rotation: 0
        });
      }
    };

    window.addEventListener('scroll', handleScrollUpdate, { passive: true });
    window.addEventListener('resize', handleScrollUpdate, { passive: true });
    handleScrollUpdate(); // Initial position calculation

    return () => {
      window.removeEventListener('scroll', handleScrollUpdate);
      window.removeEventListener('resize', handleScrollUpdate);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  // Helper to calculate smooth in-viewport opacity crossfade for scene i
  const getSceneOpacity = (sceneIndex) => {
    const totalScenes = STORY_SCENES.length;
    const sceneCenter = sceneIndex / (totalScenes - 1);
    const dist = Math.abs(scrollProgress - sceneCenter) * (totalScenes - 1);
    return Math.max(0, 1 - dist * 0.9);
  };

  const activeGrayscale = hasReachedMonoLock ? 100 : grayscaleVal;
  const currentScene = STORY_SCENES[activeSceneIndex] || STORY_SCENES[0];

  const sceneSegment = 1 / STORY_SCENES.length;
  const currentSceneProgress = (scrollProgress % sceneSegment) / sceneSegment;
  
  let narrativeOpacity = 0;
  if (currentSceneProgress < 0.12) {
    narrativeOpacity = currentSceneProgress / 0.12;
  } else if (currentSceneProgress <= 0.32) {
    narrativeOpacity = 1;
  } else if (currentSceneProgress <= 0.48) {
    narrativeOpacity = 1 - (currentSceneProgress - 0.32) / 0.16;
  } else {
    narrativeOpacity = 0;
  }

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="scroll-container">
      {/* Editorial Grain Overlay */}
      <div className="editorial-grain" />

      {/* Top Progress & Audio UI Bar */}
      <ProgressIndicator currentScene={currentScene} totalScenes={12} scrollProgress={scrollProgress} />
      <AmbientAudio isMonochrome={activeGrayscale > 50} />

      {/* Right-Side Minimal Scroll Indicator */}
      <ScrollIndicator scrollProgress={scrollProgress} currentSceneId={currentScene.id} />

      {/* Viewport Stage Camera (LOCKED AT FIXED 100vw x 100vh / 100dvh) */}
      <div
        ref={stageRef}
        className="cinematic-stage"
        style={{
          filter: `grayscale(${activeGrayscale}%)`,
          backgroundColor: currentScene.bgColor,
          transition: 'background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Narrative Overlay */}
        <NarrativeOverlay scene={currentScene} activeSubIndex={subTextIndex} opacity={narrativeOpacity} />

        {/* Continuous In-Viewport Scene Environments Layer */}
        <div className="parallax-layer environment-layer" style={{ zIndex: 10 }}>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(0), transition: 'opacity 0.2s linear' }}>
            <Scene1Environment />
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(1), transition: 'opacity 0.2s linear' }}>
            <Scene2Environment />
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(2), transition: 'opacity 0.2s linear' }}>
            <Scene3Environment />
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(3), transition: 'opacity 0.2s linear' }}>
            <Scene4Environment />
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(4), transition: 'opacity 0.2s linear' }}>
            <Scene5Environment />
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(5), transition: 'opacity 0.2s linear' }}>
            <Scene6Environment sweepProgress={sweepProgress} />
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(6), transition: 'opacity 0.2s linear' }}>
            <Scene7Environment journeyOffset={journeyOffset} />
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(7), transition: 'opacity 0.2s linear' }}>
            <Scene8Environment />
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(8), transition: 'opacity 0.2s linear' }}>
            <SceneMonoEnvironment sceneId={9} />
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(9), transition: 'opacity 0.2s linear' }}>
            <SceneMonoEnvironment sceneId={10} />
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(10), transition: 'opacity 0.2s linear' }}>
            <SceneMonoEnvironment sceneId={11} />
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: getSceneOpacity(11), transition: 'opacity 0.2s linear' }}>
            <SceneMonoEnvironment sceneId={12} />
          </div>
        </div>

        {/* Character Stage Layer */}
        <div
          className="parallax-layer character-layer"
          style={{
            zIndex: 30,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            height: '100%',
            paddingBottom: '10vh'
          }}
        >
          <div className="character-stage-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '65vh' }}>
            {/* Man Character (On LEFT Side: x < 0) */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: `translate3d(calc(-50% + ${manPos.x}px), ${manPos.y}px, 0)`,
                willChange: 'transform, opacity'
              }}
            >
              <CharacterMan
                scale={manPos.scale}
                flipX={manPos.flipX}
                facingFactor={manPos.facingFactor}
                rotation={manPos.rotation || 0}
                opacity={manPos.opacity}
                sceneId={currentScene.id}
              />
            </div>

            {/* Woman Character (On RIGHT Side: x > 0) */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: `translate3d(calc(-50% + ${womanPos.x}px), ${womanPos.y}px, 0)`,
                willChange: 'transform, opacity'
              }}
            >
              <CharacterWoman
                scale={womanPos.scale}
                flipX={womanPos.flipX}
                facingFactor={womanPos.facingFactor}
                rotation={womanPos.rotation || 0}
                opacity={womanPos.opacity}
                sceneId={currentScene.id}
              />
            </div>
          </div>
        </div>

        {/* Scene 12 End Action */}
        {currentScene.id === 12 && (
          <div
            style={{
              position: 'absolute',
              bottom: '15%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: '#E0E0E0',
                letterSpacing: '0.2em',
                fontWeight: '300'
              }}
            >
              THE END
            </h2>
            <button className="replay-btn" onClick={handleReplay}>
              REPLAY STORY
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
