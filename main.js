// 単語の認識に使用する単語
const keyword = '抜いた';

// 音声認識用の設定
const recognition = new window.webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'ja-JP';

// 音声認識が開始されたときに呼び出される関数
recognition.onstart = function() {
  console.log('音声認識を開始します');
}

// 音声が認識されたときに呼び出される関数
recognition.onresult = function(event) {
  for (let i = event.resultIndex; i < event.results.length; i++) {
    const transcript = event.results[i][0].transcript;
    console.log('認識された単語:', transcript);
    
    if (transcript.includes(keyword)) {
      console.log('「抜いた」と認識されました');
      console.log('test');
    }
  }
}

// 音声認識が終了したときに呼び出される関数
recognition.onend = function() {
  console.log('音声認識を終了します');
}

// 音声認識がエラーで中断されたときに呼び出される関数
recognition.onerror = function(event) {
  console.error('音声認識中にエラーが発生しました:', event.error);
}

// getUserMedia()メソッドを使用してマイクへのアクセス権を取得する
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    console.log('マイクへのアクセスが許可されました');
    recognition.start();
  })
  .catch(function(error) {
    console.error('マイクへのアクセスが拒否されました:', error);
  });
