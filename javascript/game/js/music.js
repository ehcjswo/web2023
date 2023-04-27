const allMusic = [
    {
        name : "1. Here it Comes",
        artist : "TrackTribe",
        img : "musicView01",
        audio : "music_audio01"
    },{
        name : "2. Here it Comes",
        artist : "TrackTribe",
        img : "musicView02",
        audio : "music_audio02"
    },{
        name : "3. Here it Comes",
        artist : "TrackTribe",
        img : "musicView03",
        audio : "music_audio03"
    },{
        name : "4. Here it Comes",
        artist : "TrackTribe",
        img : "musicView04",
        audio : "music_audio04"
    },{
        name : "5. Here it Comes",
        artist : "TrackTribe",
        img : "musicView05",
        audio : "music_audio05"
    },{
        name : "6. Here it Comes",
        artist : "TrackTribe",
        img : "musicView06",
        audio : "music_audio06"
    },{
        name : "7. Here it Comes",
        artist : "TrackTribe",
        img : "musicView07",
        audio : "music_audio07"
    },{
        name : "8. Here it Comes",
        artist : "TrackTribe",
        img : "musicView08",
        audio : "music_audio08"
    },{
        name : "9. Here it Comes",
        artist : "TrackTribe",
        img : "musicView09",
        audio : "music_audio09"
    }
];



const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressCurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressDuration = musicWrap.querySelector(".progress .timer .duration");

const musicCount = allMusic.length;

let musicIndex = 6;  // 현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;         //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       //뮤직 이미지
    musicView.art = allMusic[num-1].name;                   //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`;   //뮤직파일

}

//재생 버튼
const playMusic = () => {
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
}

//정지 버튼
const pauseMusic = () => {
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
}

// 이전 곡 듣기
const prevMusic = () => {
    musicIndex <= 1 ? musicIndex = 9 : musicIndex --;
    loadMusic(musicIndex);
    musicAudio.play();
}

// 다음 곡 듣기
const nextMusic = () => {
    // musicIndex++;
    // if(musicIndex >= musicCount){
    //     musicIndex= 1;
    // }

    musicIndex >= musicCount ? musicIndex=1 : musicIndex++;
    loadMusic(musicIndex);
    musicAudio.play();
}

// 뮤직 진행바
musicAudio.addEventListener("timeupdate", e => {
    // console.log(e)
    const currentTime = e.target.currentTime;       //현재 재생되는 시간
    const duration = e.target.duration;             //오디오 총 길이
    let progressWidth = currentTime/duration * 100; //전체길이에서 현재 진행되는 시간을 백분위 단위로 나눔
    
    musicProgressBar.style.width = `${progressWidth}%`;

    // 노래 전체 길이 (분: 초)
    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10) totalSec = `0${totalSec}`
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
    });

    // 노래 진행 시간 (분: 초)
    let currentMin = Math.floor(currentTime / 60);
    let currntSec = Math.floor(currentTime % 60);
    if(currntSec < 10) currntSec = `0${currntSec}`
    musicProgressCurrent.innerText = `${currentMin}:${currntSec}`;
});

// 진행바 버튼 클릭
musicProgress.addEventListener("click",(e)=>{
    let progressWidth = musicProgress.clientWidth;  //진행바 전체 길이
    let clickedOffsetX = e.offsetX;                 //진행바 기준으로 측정되는 X좌표값
    let songDuration = musicAudio.duration;         //노래 전체 길이

    //백분위 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickedOffsetX/progressWidth) *songDuration;

    // console.log(musicAudio.currentTime)
})

// 플레이 버튼 클릭
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused");   //음악 재생중
    isMusicPaused ? pauseMusic() : playMusic();

});

// 이전곡 버튼 클릭
musicPrevBtn.addEventListener("click", () => {
    prevMusic();
});

// 다음곡 버튼 클릭
musicNextBtn.addEventListener("click", () => {
    
    nextMusic();
});

window.addEventListener("load", () => {
    loadMusic(musicIndex);
    
});