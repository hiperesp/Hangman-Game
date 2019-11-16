class Game {

    assets = {};

    context;

    screen = "MAIN_MENU";

    keyboardKeys = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
          ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
               ["Z", "X", "C", "V", "B", "N", "M"],
    ];
    wordList = [
        new Word("Pong", "Sports"),
		new Word("Zork", "Adventure"),
		new Word("Space Invaders", "Shoot 'em up"),
		new Word("Asteroids", "Shoot 'em up"),
		new Word("Adventure", "Action-adventure"),
		new Word("Missile Command", "Shoot 'em up"),
		new Word("Pac-Man", "Maze"),
		new Word("Defender", "Shoot 'em up"),
		new Word("Donkey Kong", "Platform"),
		new Word("Galaga", "Shoot 'em up"),
		new Word("Joust", "Action"),
		new Word("Ms. Pac-Man", "Maze"),
		new Word("Pitfall!", "Platform"),
		new Word("Robotron: 2084", "Top-down shooter"),
		new Word("Elite", "Space flight simulator"),
		new Word("Tetris", "Puzzle"),
		new Word("Gauntlet", "Action role-playing"),
		new Word("Super Mario Bros.", "Platform"),
		new Word("Bubble Bobble", "Platform"),
		new Word("The Legend of Zelda", "Action-adventure"),
		new Word("Out Run", "Racing"),
		new Word("Contra", "Run and gun"),
		new Word("Double Dragon", "Beat 'em up"),
		new Word("Mike Tyson's Punch-Out!!", "Sports"),
		new Word("R-Type", "Shoot 'em up"),
		new Word("Mega Man 2", "Platform"),
		new Word("Super Mario Bros. 3", "Platform"),
		new Word("Prince of Persia", "Platform"),
		new Word("SimCity", "City-building"),
		new Word("The Secret of Monkey Island", "Adventure"),
		new Word("Super Mario World", "Platform"),
		new Word("Another World", "Platform"),
		new Word("Civilization", "Turn-based strategy"),
		new Word("The Legend of Zelda: A Link to the Past", "Action-adventure"),
		new Word("Lemmings", "Puzzle"),
		new Word("Monkey Island 2: LeChuck's Revenge", "Adventure"),
		new Word("Sonic the Hedgehog", "Platform"),
		new Word("Street Fighter II", "Fighting"),
		new Word("Mortal Kombat", "Fighting"),
		new Word("Sonic the Hedgehog 2", "Platform"),
		new Word("Super Mario Kart", "Kart racing"),
		new Word("Wolfenstein 3D", "First-person shooter"),
		new Word("Day of the Tentacle", "Adventure"),
		new Word("Daytona USA", "Racing"),
		new Word("Doom", "First-person shooter"),
		new Word("The Legend of Zelda: Link's Awakening", "Action-adventure"),
		new Word("Mortal Kombat II", "Fighting"),
		new Word("Myst", "Adventure"),
		new Word("NBA Jam", "Sports"),
		new Word("Phantasy Star IV", "Role-playing"),
		new Word("Sam & Max Hit the Road", "Adventure"),
		new Word("Secret of Mana", "Action role-playing"),
		new Word("SimCity 2000", "City-building"),
		new Word("Star Fox", "Shoot 'em up"),
		new Word("Syndicate", "Real-time tactics"),
		new Word("Donkey Kong Country", "Platform"),
		new Word("EarthBound", "Role-playing"),
		new Word("Final Fantasy VI", "Role-playing"),
		new Word("Star Wars: TIE Fighter", "Space flight simulator"),
		new Word("Super Metroid", "Action-adventure"),
		new Word("UFO: Enemy Unknown", "Turn-based strategy"),
		new Word("Chrono Trigger", "Role-playing"),
		new Word("Yoshi's Island", "Platform"),
		new Word("Civilization II", "Turn-based strategy"),
		new Word("Command & Conquer: Red Alert", "Real-time strategy"),
		new Word("Duke Nukem 3D", "First-person shooter"),
		new Word("Nights into Dreams...", "Action"),
		new Word("Pokémon Red and Blue", "Role-playing"),
		new Word("Quake", "First-person shooter"),
		new Word("Resident Evil", "Survival horror"),
		new Word("Super Mario 64", "Platform"),
		new Word("Tomb Raider", "Action-adventure"),
		new Word("Castlevania: Symphony of the Night", "Action-adventure"),
		new Word("Final Fantasy Tactics", "Tactical role-playing"),
		new Word("Final Fantasy VII", "Role-playing"),
		new Word("GoldenEye 007", "First-person shooter"),
		new Word("Gran Turismo", "Racing"),
		new Word("Star Fox 64", "Shoot 'em up"),
		new Word("Star Wars Jedi Knight: Dark Forces II", "First-person shooter"),
		new Word("Tekken 3", "Fighting"),
		new Word("Fallout 2", "Role-playing"),
		new Word("Grim Fandango", "Adventure"),
		new Word("Half-Life", "First-person shooter"),
		new Word("The Legend of Zelda: Ocarina of Time", "Action-adventure"),
		new Word("Metal Gear Solid", "Stealth"),
		new Word("Panzer Dragoon Saga", "Role-playing"),
		new Word("Resident Evil 2", "Survival horror"),
		new Word("SoulCalibur", "Fighting"),
		new Word("StarCraft", "Real-time strategy"),
		new Word("Thief: The Dark Project", "Stealth"),
		new Word("Age of Empires II", "Real-time strategy"),
		new Word("Homeworld", "Real-time strategy"),
		new Word("Planescape: Torment", "Role-playing"),
		new Word("Quake III: Arena", "First-person shooter"),
		new Word("Shenmue", "Adventure"),
		new Word("System Shock 2", "First-person shooter"),
		new Word("Unreal Tournament", "First-person shooter"),
		new Word("Baldur's Gate II: Shadows of Amn", "Role-playing"),
		new Word("Counter-Strike", "First-person shooter"),
		new Word("Deus Ex", "Action role-playing"),
		new Word("Diablo II", "Action role-playing"),
		new Word("Jet Set Radio", "Platform"),
		new Word("The Legend of Zelda: Majora's Mask", "Action-adventure"),
		new Word("The Sims", "Life simulation"),
		new Word("Thief II: The Metal Age", "Stealth"),
		new Word("Tony Hawk's Pro Skater 2", "Sports"),
		new Word("Advance Wars", "Turn-based tactics"),
		new Word("Animal Crossing", "Life simulation"),
		new Word("Final Fantasy X", "Role-playing"),
		new Word("Gran Turismo 3: A-Spec", "Racing"),
		new Word("Grand Theft Auto III", "Action-adventure"),
		new Word("Halo: Combat Evolved", "First-person shooter"),
		new Word("Ico", "Action-adventure"),
		new Word("Ikaruga", "Shoot 'em up"),
		new Word("Max Payne", "Third-person shooter"),
		new Word("Metal Gear Solid 2: Sons of Liberty", "Stealth"),
		new Word("Rez", "Shoot 'em up"),
		new Word("Silent Hill 2", "Survival horror"),
		new Word("Super Smash Bros. Melee", "Fighting"),
		new Word("Grand Theft Auto: Vice City", "Action-adventure"),
		new Word("Kingdom Hearts", "Action role-playing"),
		new Word("The Legend of Zelda: The Wind Waker", "Action-adventure"),
		new Word("Metroid Prime", "Action-adventure"),
		new Word("Soulcalibur II", "Fighting"),
		new Word("Beyond Good & Evil", "Action-adventure"),
		new Word("Prince of Persia: The Sands of Time", "Action-adventure"),
		new Word("Star Wars: Knights of the Old Republic", "Role-playing"),
		new Word("WarioWare, Inc.: Mega Microgames!", "Action"),
		new Word("Burnout 3: Takedown", "Racing"),
		new Word("Grand Theft Auto: San Andreas", "Action-adventure"),
		new Word("Half-Life 2", "First-person shooter"),
		new Word("Katamari Damacy", "Action"),
		new Word("Metal Gear Solid 3: Snake Eater", "Stealth"),
		new Word("Rome: Total War", "Strategy"),
		new Word("World of Warcraft", "MMORPG"),
		new Word("Civilization IV", "Turn-based strategy"),
		new Word("Devil May Cry 3: Dante's Awakening", "Action-adventure"),
		new Word("God of War", "Action-adventure"),
		new Word("Guitar Hero", "Rhythm"),
		new Word("Psychonauts", "Platform"),
		new Word("Resident Evil 4", "Survival horror"),
		new Word("Shadow of the Colossus", "Action-adventure"),
		new Word("Tom Clancy's Splinter Cell: Chaos Theory", "Stealth"),
		new Word("The Elder Scrolls IV: Oblivion", "Role-playing"),
		new Word("Gears of War", "Third-person shooter"),
		new Word("Hitman: Blood Money", "Stealth"),
		new Word("Ōkami", "Action-adventure"),
		new Word("Wii Sports", "Sports"),
		new Word("BioShock", "First-person shooter"),
		new Word("Call of Duty 4: Modern Warfare", "First-person shooter"),
		new Word("God of War II", "Action-adventure"),
		new Word("Halo 3", "First-person shooter"),
		new Word("Portal", "Puzzle-platformer"),
		new Word("Super Mario Galaxy", "Platform"),
		new Word("Team Fortress 2", "First-person shooter"),
		new Word("Braid", "Puzzle-platformer"),
		new Word("Dead Space", "Survival horror"),
		new Word("Fallout 3", "Action role-playing"),
		new Word("Grand Theft Auto IV", "Action-adventure"),
		new Word("Left 4 Dead", "First-person shooter"),
		new Word("Persona 4", "Role-playing"),
		new Word("Spelunky", "Platform"),
		new Word("Street Fighter IV", "Fighting"),
		new Word("Assassin's Creed II", "Action-adventure"),
		new Word("Batman: Arkham Asylum", "Action-adventure"),
		new Word("Left 4 Dead 2", "First-person shooter"),
		new Word("Uncharted 2: Among Thieves", "Action-adventure"),
		new Word("Limbo", "Platform"),
		new Word("Mass Effect 2", "Action role-playing"),
		new Word("Red Dead Redemption", "Action-adventure"),
		new Word("Rock Band 3", "Rhythm"),
		new Word("StarCraft II: Wings of Liberty", "Real-time strategy"),
		new Word("Super Mario Galaxy 2", "Platform"),
		new Word("Super Meat Boy", "Platform"),
		new Word("Batman: Arkham City", "Action-adventure"),
		new Word("Dark Souls", "Action role-playing"),
		new Word("The Elder Scrolls V: Skyrim", "Action role-playing"),
		new Word("Minecraft", "Sandbox"),
		new Word("Portal 2", "Puzzle-platformer"),
		new Word("Dishonored", "Stealth"),
		new Word("Journey", "Adventure"),
		new Word("The Walking Dead", "Adventure"),
		new Word("Dota 2", "MOBA"),
		new Word("Grand Theft Auto V", "Action-adventure"),
		new Word("The Last of Us", "Action-adventure"),
		new Word("Bloodborne", "Action role-playing"),
		new Word("The Witcher 3: Wild Hunt", "Action role-playing"),
		new Word("Inside", "Platform"),
		new Word("Overwatch", "First-person shooter"),
		new Word("The Legend of Zelda: Breath of the Wild", "Action-adventure"),
    ];

    MAX_LIFE = 7;
    life;
    letters;
    selectedWord;

    constructor(context) {
        this.context = context;
        this.loadAssets();
        this.registerEvents();
        this.loop();
    }
    async loadAssets(){
        let assetsToLoad = {
            sprite0: "img/sprite0.png",
            sprite1: "img/sprite1.png",
            sprite2: "img/sprite2.png",
            sprite3: "img/sprite3.png",
            sprite4: "img/sprite4.png",
            sprite5: "img/sprite5.png",
            sprite6: "img/sprite6.png",
            sprite7: "img/sprite7.png",
        };
        for(let key in assetsToLoad) {
            let asset = (await ((path)=> {
                return new Promise((resolve, reject) => {
                    let image = document.createElement("img");
                    image.src = path;
                    image.addEventListener("load", resolve);
                    image.addEventListener("error", reject);
                });
            })(assetsToLoad[key])).target;
            this.assets[key] = asset;
        }
    }
    registerEvents() {
        this.context.canvas.addEventListener("click", this.handleClick.bind(this));
    }
    isInsideArea(x, y, ax, ay, aw, ah) {
        return x>ax&&x<ax+aw&&y>ay&&y<ay+ah;
    }
    handleClick(event) {
		let baseScreenX;
		let baseScreenY;
		let x = 0;
		let y = 0;
		if(this.context.canvas.clientWidth/720>this.context.canvas.clientHeight/1280) {
			baseScreenY = this.context.canvas.clientHeight;
			baseScreenX = baseScreenY/16*9;
			x-= (this.context.canvas.clientWidth-baseScreenX)/2;
		} else {
			baseScreenX = this.context.canvas.clientWidth;
			baseScreenY = baseScreenX*16/9;
			y-= (this.context.canvas.clientHeight-baseScreenY)/2;
		}
        x+= event.offsetX;
        y+= event.offsetY;
		x*= 720/baseScreenX;
		y*= 1280/baseScreenY;
		this.context.fillStyle = "#ff0000";
		this.context.fillRect(x-3, y-3, 6, 6);
        switch(this.screen){
            case "MAIN_MENU":
                this.handleMainMenuClick(x, y);
                break;
            case "GAME":
                this.handleGameClick(x, y);
                break;
            case "GAME_OVER_LOSE":
                this.handleGameOverClick(x, y);
                break;
            case "GAME_OVER_WIN":
                this.handleGameOverWin(x, y);
                break;
        }
    }
    handleMainMenuClick(x, y) {
        let playButtonClick = this.isInsideArea(x, y, 110, 880, 500, 120);
        if(playButtonClick) {
            this.start();
        }
    }
    handleGameOverClick(x, y) {
        let tryAgainButtonClick = this.isInsideArea(x, y, 110, 880, 500, 120);
        if(tryAgainButtonClick) {
            this.start();
        }
    }
    handleGameOverWin(x, y) {
        let playNowButtonClick = this.isInsideArea(x, y, 110, 880, 500, 120);
        if(playNowButtonClick) {
            this.start();
        }
    }
    handleGameClick(x, y) {
        let letter = this.getLetter(x, y);
        if(letter) {
            if(this.letters.indexOf(letter)==-1) {
                this.try(letter);
            }
        }
    }
    getLetter(pressX, pressY){
        let sY = 800;
        let sX = 1;
        let keySize = {w: 35*2, h: 55*2}
        for(let y=0; y<this.keyboardKeys.length; y++){
            if(y==1) sX+=keySize.w/2;
            if(y==2) sX+=keySize.w+1;
            for(let x=0; x<this.keyboardKeys[y].length; x++) {
                let pXMin = sX+x*(keySize.w+2);
                let pXMax = pXMin+keySize.w;
                let pYMin = sY+y*(keySize.h+2);
                let pYMax = pYMin+keySize.h;
                if(pressX>pXMin&&pressX<pXMax&&pressY>pYMin&&pressY<pYMax) {
                    return this.keyboardKeys[y][x];
                }
            }
        }
        return false;
    }
    try(letter) {
        let correctLetters = this.correctLetters;
        if(this.letters.indexOf(letter)==-1)
            this.letters.push(letter);
        if(correctLetters==this.correctLetters) {
            this.life--;
        }
        
    }
    start() {
        this.screen = "GAME";
        this.life = this.MAX_LIFE;
        this.letters = [];
        this.selectedWord = Math.floor(Math.random()*this.wordList.length);
    }
    loop() {
        this.update();
        this.render();
        requestAnimationFrame(this.loop.bind(this));
    }
    update(){
        switch(this.screen) {
            case "GAME":
                if(this.wordTotalLetters-this.correctLetters==0) {
                    this.screen = "GAME_OVER_WIN";
                } else if(this.life==0) {
                    this.screen = "GAME_OVER_LOSE";
                }
                break;
        }
    }
    get currentWord(){
        let currentWord = "";
        let word = this.wordList[this.selectedWord].word;
        for(let i=0; i<word.length; i++) {
            if(this.letters.indexOf(word.charAt(i))>-1||word.charCodeAt(i)<65||word.charCodeAt(i)>90) {
                currentWord+= word[i];
                continue;
            }
            currentWord+= "_";
        }
        return currentWord;
    }
    get wordTotalLetters(){
        return this.wordList[this.selectedWord].word.length;
    }
    get correctLetters(){
        let word = this.currentWord;
        let correct = 0;
        for(let i=0; i<word.length; i++) {
            if(word[i]!="_") correct++;
        }
        return correct;
    }
    render(){
		this.context.clearRect(0, 0, 720, 1280);
        this.context.textAlign = "center";
        switch(this.screen){
            case "MAIN_MENU":
                this.renderMainMenu();
                break;
            case "GAME":
                this.renderGame();
                break;
            case "GAME_OVER_LOSE":
                this.renderGameOverLose();
                break;
            case "GAME_OVER_WIN":
                this.renderGameOverWin();
                break;
        }
    }
    renderMainMenu(){
        this.renderGenericScreen("Jogo da Forca", "Jogar");
        this.context.font = "20px Roboto";
        this.context.fillStyle = "#282828";
        this.context.fillText("App Icon made by Freepik from www.flaticon.com", 720/2, 1240);
    }
    renderGame(){
        this.renderHangman();
        this.renderKeyboard();
        this.renderWord();
    }
    renderHangman() {
        /*
        this.context.font = "160px Roboto";
        this.context.fillStyle = "#282828";
        this.context.fillText(this.life, 720/2, 200);
        */
       this.context.drawImage(this.assets["sprite"+(this.MAX_LIFE-this.life)],
        (720-this.assets["sprite"+(this.MAX_LIFE-this.life)].width)/2, 80);
    }
    renderKeyboard() {
        let sY = 800;
        let sX = 1;
        let keySize = {w: 35*2, h: 55*2}
        this.context.font = "60px Roboto";
        for(let y=0; y<this.keyboardKeys.length; y++){
            if(y==1) sX+=keySize.w/2;
            if(y==2) sX+=keySize.w+1;
            for(let x=0; x<this.keyboardKeys[y].length; x++) {
                this.context.fillStyle = "#dddddd";
                this.context.fillRect(sX+x*(keySize.w+2), sY+y*(keySize.h+2), keySize.w, keySize.h);
                if(this.letters.indexOf(this.keyboardKeys[y][x])==-1){
                    this.context.fillStyle = "#282828";
                    this.context.fillText(this.keyboardKeys[y][x], sX+x*(keySize.w+2)+keySize.w/2, sY+y*(keySize.h+2)+keySize.h-35);
                } else {
                    this.context.fillStyle = "#bbbbbb";
                    this.context.fillText(this.keyboardKeys[y][x], sX+x*(keySize.w+2)+keySize.w/2, sY+y*(keySize.h+2)+keySize.h-35);
                }
            }
        }
    }
    getBestFontSize(text) {
        return Math.min(200, 800/text.length);
    }
    renderWord(){
        let word = this.currentWord;
        let fontSize = this.getBestFontSize(word);
        this.context.font = fontSize+"px Roboto";
        this.context.fillStyle = "#282828";
        this.context.fillText(word, 720/2, 380+fontSize/2);
        let strRemainingChars = "";
        {
            let remainingChars = this.wordTotalLetters-this.correctLetters;
            strRemainingChars+= "Falta";
            if(remainingChars!=1) strRemainingChars+= "m";
            strRemainingChars+= " ";
            strRemainingChars+= remainingChars;
            strRemainingChars+= " letra";
            if(remainingChars!=1) strRemainingChars+= "s";
            strRemainingChars+= ".";
        }
        this.context.font = "40px Roboto";
        this.context.fillText(strRemainingChars, 720/2, 640);

        let hint = this.wordList[this.selectedWord].hint;
        this.context.font = "40px Roboto";
        this.context.fillText("Dica: "+hint, 720/2, 740);
    }
    renderGameOverLose(){
        this.renderHangman();
        
        this.renderGenericScreen("Que pena :(", "Tentar novamente");
        this.context.font = "40px Roboto";
        this.context.fillText("A palavra era", 360, 480);

        let word = this.wordList[this.selectedWord].word;
        let fontSize = this.getBestFontSize(word);
        this.context.font = fontSize+"px Roboto";
        this.context.fillStyle = "#282828";
        this.context.fillText(word, 720/2, 600+fontSize/2);

    }
    renderGameOverWin(){
        this.renderGenericScreen("Você venceu!", "Jogar novamente");
        this.context.font = "40px Roboto";

        let word = this.wordList[this.selectedWord].word;
        let fontSize = this.getBestFontSize(word);
        this.context.font = fontSize+"px Roboto";
        this.context.fillStyle = "#282828";
        this.context.fillText(word, 720/2, 540+fontSize/2);

    }
    renderGenericScreen(title, buttonText){
        this.context.fillStyle = "#282828";
        this.context.font = "80px Roboto";
        this.context.fillText(title, 360, 360);
        this.context.fillStyle = "#d7d7d7";
        this.context.fillRect(110, 880, 500, 120);
        this.context.fillStyle = "#282828";
        this.context.font = "60px Roboto";
        this.context.fillText(buttonText, 360, 960);
    }
    
}