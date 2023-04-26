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
    },{
        name : "10. Here it Comes",
        artist : "TrackTribe",
        img : "musicView10",
        audio : "music_audio10"
    },
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musiclPlay = musicWrap.querySelector("#control-play");

let musicIndex = 6;  // 현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;         //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       //뮤직 이미지
    musicView.art = allMusic[num-1].name;                   //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`;   //뮤직파일

}



// 플레이 버튼 클릭
musiclPlay.addEventListener("click", () => {
    alert("안녕하세용ㅇ가리")
})

window.addEventListener("load", () => {
    loadMusic(musicIndex);

    musicAudio.play();
});