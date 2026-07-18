(function(){
  const video = document.getElementById('diagVideo');
  const out = document.getElementById('output');
  const btn = document.getElementById('btnInspect');
  const btnPlay = document.getElementById('btnPlay');

  function report(msg){
    out.textContent = msg + '\n\n' + out.textContent;
  }

  function inspect(){
    out.textContent = '';
    report('readyState: ' + video.readyState);
    report('paused: ' + video.paused);
    report('muted: ' + video.muted);
    report('volume: ' + video.volume);
    report('duration: ' + (isFinite(video.duration) ? video.duration.toFixed(2) + 's' : 'unknown'));
    report('videoWidth x videoHeight: ' + video.videoWidth + ' x ' + video.videoHeight);

    try {
      if ('audioTracks' in video) {
        report('audioTracks length: ' + video.audioTracks.length);
      } else {
        report('audioTracks not supported in this browser API');
      }
    } catch (e) {
      report('audioTracks check error: ' + e.message);
    }

    try {
      if ('mozHasAudio' in video) {
        report('mozHasAudio: ' + video.mozHasAudio);
      }
    } catch (e) {}

    try {
      if ('webkitDecodedFrameCount' in video) {
        report('webkitDecodedFrameCount: ' + video.webkitDecodedFrameCount);
      }
    } catch (e) {}

    try{
      if ('webkitAudioDecodedByteCount' in video) report('webkitAudioDecodedByteCount: ' + video.webkitAudioDecodedByteCount);
    } catch(e){}

    // Media capabilities (if available)
    try {
      const mime = video.currentSrc ? 'video/mp4' : 'unknown';
      if (navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo) {
        navigator.mediaCapabilities.decodingInfo({
          type: 'file',
          video: { contentType: 'video/mp4; codecs="avc1.42E01E"' },
          audio: { contentType: 'audio/mp4; codecs="mp4a.40.2"' }
        }).then(info => report('mediaCapabilities: ' + JSON.stringify(info))).catch(()=>{});
      }
    } catch(e){}

    report('Network state: ' + video.networkState);
    report('Ready state: ' + video.readyState);

    // show list of sources
    try { report('currentSrc: ' + video.currentSrc); } catch(e){}
  }

  btn.addEventListener('click', () => inspect());

  btnPlay.addEventListener('click', async () => {
    try {
      video.muted = false;
      video.volume = 1;
      await video.play();
      report('Playback started (user-initiated). muted=' + video.muted + ' volume=' + video.volume);
    } catch (e) {
      report('Play error: ' + e.message);
    }
  });

  const measureBtn = document.getElementById('btnMeasure');
  measureBtn.addEventListener('click', async () => {
    report('Starting 3s audio level measurement...');
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) { report('AudioContext not supported in this browser'); return; }
      const ctx = new AudioCtx();
      await ctx.resume();
      const src = ctx.createMediaElementSource(video);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      src.connect(analyser);
      analyser.connect(ctx.destination);

      const data = new Uint8Array(analyser.fftSize);
      const samples = [];
      const start = performance.now();
      function sample() {
        analyser.getByteTimeDomainData(data);
        // compute RMS
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
          const v = (data[i] - 128) / 128; sum += v * v;
        }
        const rms = Math.sqrt(sum / data.length);
        samples.push(rms);
        if (performance.now() - start < 3000) {
          requestAnimationFrame(sample);
        } else {
          const avg = samples.reduce((s, v) => s + v, 0) / samples.length;
          const max = Math.max(...samples);
          report('Measurement complete — RMS avg: ' + avg.toFixed(5) + ' max: ' + max.toFixed(5));
          try { src.disconnect(); analyser.disconnect(); } catch (e) {}
          try { ctx.close(); } catch (e) {}
        }
      }
      sample();
    } catch (e) {
      report('Measurement error: ' + e.message);
    }
  });

  // auto-inspect when metadata loads
  video.addEventListener('loadedmetadata', () => inspect());
  video.addEventListener('error', (ev) => report('Error event: ' + ev.message + ' code=' + video.error && video.error.code));
})();