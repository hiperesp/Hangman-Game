class Game {

    assets = {};

    context;

    screen;

    userPhoto = new Image();
    wins = 0;
    loses = 0;
    achievements = [];

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
        this.setScreen("MAIN_MENU");
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
            trofeu:  "img/trofeu.png",
        };
        for(let key in assetsToLoad) {
            let asset = (await ((path)=> {
                return new Promise((resolve, reject) => {
                    let image = new Image();
                    image.src = path;
                    image.addEventListener("load", resolve);
                    image.addEventListener("error", reject);
                });
            })(assetsToLoad[key])).target;
            this.assets[key] = asset;
        }
    }
    setScreen(screen) {
        if(screen=="MAIN_MENU") {
            this.loadUserPhoto();
        }
        if(screen=="PROFILE") {
            this.loadWinLoses();
        }
        if(screen=="ACHIEVEMENTS") {
            this.loadAchievements();
        }
        this.screen = screen;
    }
    loadUserPhoto(data){
        if(data) {
            this.userPhoto.src = "data:image/png;base64,"+data;
        } else {
            GameStorage.getUserPhoto().then((data)=> {
                this.userPhoto.src = "data:image/png;base64,"+data;
            });
        }
    }
    loadWinLoses() {
        GameStorage.getWins().then((data)=> {
            this.wins = data;
        });
        GameStorage.getLoses().then((data)=> {
            this.loses = data;
        });
    }
    loadAchievements() {
        GameStorage.getAchievements().then((data) => {
            this.achievements = [];
            for(let i=0; i<data.length; i++)
                this.achievements.push(data[i].id);
        });
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
            case "PROFILE":
                this.handleProfileClick(x, y);
                break;
            case "ACHIEVEMENTS":
                this.handleAchievementsClick(x, y);
                break;
            case "CREDITS":
                this.handleCreditsClick(x, y);
                break;
            case "SETTINGS":
                this.handleSettingsClick(x, y);
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
            default:
                console.error("CAN'T HANDLE CLICK AT SCREEN \""+this.screen+"\" (x: "+x+", y: "+y+".");
                break;
        }
    }
    handleMainMenuClick(x, y) {
        let playButtonClick = this.isInsideArea(x, y, 110, 600, 500, 120);
        if(playButtonClick) {
            this.start();
        }
        let profileClick = this.isInsideArea(x, y, 110, 800, 500, 120);
        if(profileClick) {
            this.setScreen("PROFILE");
        }
        let settingsButton = this.isInsideArea(x, y, 110, 1000, 500, 120);
        if(settingsButton) {
            this.setScreen("SETTINGS");
        }
    }
    handleProfileClick(x, y) {
        let statisticsButtonClick = this.isInsideArea(x, y, 110, 690, 500, 120);
        if(statisticsButtonClick) {
            this.setScreen("ACHIEVEMENTS");
        }
        let mainMenuClick = this.isInsideArea(x, y, 110, 890, 500, 120);
        if(mainMenuClick) {
            this.setScreen("MAIN_MENU");
        }
    }
    handleAchievementsClick(x, y) {
        let mainMenuClick = this.isInsideArea(x, y, 110, 890, 500, 120);
        if(mainMenuClick) {
            this.setScreen("MAIN_MENU");
        }
    }
    handleCreditsClick(x, y) {
        let mainMenuClick = this.isInsideArea(x, y, 110, 890, 500, 120);
        if(mainMenuClick) {
            this.setScreen("MAIN_MENU");
        }
    }
    handleSettingsClick(x, y) {
        let changeUserPhotoButton = this.isInsideArea(x, y, 110, 600, 500, 120);
        if(changeUserPhotoButton) {
            this.onChangeUserPhotoFunction(this);
        }
        let creditsClick = this.isInsideArea(x, y, 110, 800, 500, 120);
        if(creditsClick) {
            this.setScreen("CREDITS");
        }
        let mainMenuClick = this.isInsideArea(x, y, 110, 1000, 500, 120);
        if(mainMenuClick) {
            this.setScreen("MAIN_MENU");
        }
    }
    handleGameOverClick(x, y) {
        let tryAgainButtonClick = this.isInsideArea(x, y, 110, 780, 500, 120);
        if(tryAgainButtonClick) {
            this.start();
        }
        let mainMenuClick = this.isInsideArea(x, y, 110, 980, 500, 120);
        if(mainMenuClick) {
            this.setScreen("MAIN_MENU");
        }
    }
    handleGameOverWin(x, y) {
        let playNowButtonClick = this.isInsideArea(x, y, 110, 780, 500, 120);
        if(playNowButtonClick) {
            this.start();
        }
        let mainMenuClick = this.isInsideArea(x, y, 110, 980, 500, 120);
        if(mainMenuClick) {
            this.setScreen("MAIN_MENU");
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
        this.setScreen("GAME");
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
            case "MAIN_MENU":
                break;
            case "GAME":
                let remainingCharCount = this.wordTotalLetters-this.correctLetters;
                if(remainingCharCount==0) {
                    this.onWinFunction(this, remainingCharCount, this.life);
                    this.setScreen("GAME_OVER_WIN");
                } else if(this.life==0) {
                    this.onLoseFunction(this, remainingCharCount, this.life);
                    this.setScreen("GAME_OVER_LOSE");
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
            case "PROFILE":
                this.renderProfile();
                break;
            case "CREDITS":
                this.renderCredits();
                break;
            case "ACHIEVEMENTS":
                this.renderAchievements();
                break;
            case "SETTINGS":
                this.renderSettings();
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
        this.renderGenericScreen("Jogo da Forca", "Jogar", "Perfil", -180, "Configurações");
    }
    renderProfile() {
        this.renderGenericScreen("Perfil", "Conquistas", "Menu Principal", -90);

        this.context.drawImage(this.userPhoto, 110, 330, 260, 260);

        this.context.textAlign = "left";
        this.context.fillStyle = "#282828";
        this.context.font = "50px Roboto";
        this.context.fillText("Venceu", 390, 375);
        this.context.fillText("Perdeu", 390, 510);
        this.context.font = "64px Roboto";
        this.context.fillText(this.wins, 390, 440);
        this.context.fillText(this.loses, 390, 575);
    }
    renderAchievements() {
        this.renderGenericScreen("Conquistas", "Menu Principal", "", -90);

        for(let i=0; i<this.achievements.length; i++) {
            let x = 110+400/3*(i%4);
            let y = 330+400/3*parseInt(i/4);
            this.context.fillStyle = "#0080ff";
            this.context.fillRect(x-5, y-5, 100+5*2, 100+5*2);
            this.context.drawImage(this.assets.trofeu, x, y, 100, 100);
        }
    }
    renderCredits() {
        this.renderGenericScreen("Créditos", "Menu principal", "", -90);

        this.context.font = "20px Roboto";
        this.context.fillStyle = "#282828";
        this.context.fillText("App Icon made by Freepik from www.flaticon.com", 720/2, 1240);
    }
    renderSettings() {
        this.renderGenericScreen("Configurações", "Alterar Foto", "Créditos", -180, "Menu principal");

        this.context.drawImage(this.userPhoto, 230, 240, 260, 260);
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
        
        this.renderGenericScreen("Que pena :(", "Tentar novamente", "Menu Principal");
        this.context.font = "40px Roboto";
        this.context.fillText("A palavra era", 360, 480);

        let word = this.wordList[this.selectedWord].word;
        let fontSize = this.getBestFontSize(word);
        this.context.font = fontSize+"px Roboto";
        this.context.fillStyle = "#282828";
        this.context.fillText(word, 720/2, 600+fontSize/2);

    }
    renderGameOverWin(){
        this.renderGenericScreen("Você venceu!", "Jogar novamente", "Menu Principal");
        this.context.font = "40px Roboto";

        let word = this.wordList[this.selectedWord].word;
        let fontSize = this.getBestFontSize(word);
        this.context.font = fontSize+"px Roboto";
        this.context.fillStyle = "#282828";
        this.context.fillText(word, 720/2, 540+fontSize/2);

    }
    renderGenericScreen(title, buttonText, button2Text = "", y = 0, button3Text = ""){
        this.context.fillStyle = "#282828";
        this.context.font = "80px Roboto";
        this.context.fillText(title, 360, y+360);
        this.context.fillStyle = "#d7d7d7";
        this.context.fillRect(110, y+(button2Text?780:980), 500, 120);
        this.context.fillStyle = "#282828";
        this.context.font = "60px Roboto";
        this.context.fillText(buttonText, 360, y+(button2Text?860:1060));
        if(button2Text) {
            this.context.fillStyle = "#d7d7d7";
            this.context.fillRect(110, y+980, 500, 120);
            this.context.fillStyle = "#282828";
            this.context.font = "60px Roboto";
            this.context.fillText(button2Text, 360, y+1060);
        }
        if(button3Text) {
            this.context.fillStyle = "#d7d7d7";
            this.context.fillRect(110, y+1180, 500, 120);
            this.context.fillStyle = "#282828";
            this.context.font = "60px Roboto";
            this.context.fillText(button3Text, 360, y+1260);
        }
    }
    onWinFunction(game, remainingCharCount, life){ return this; }
    onLoseFunction(game, remainingCharCount, life){ return this; }
    onChangeUserPhotoFunction(game){}
    onWin(func){ this.onWinFunction = func; return this; }
    onLose(func){ this.onLoseFunction = func; return this; }
    changeUserPhoto(func){ this.onChangeUserPhotoFunction = func; return this; }
}

class GameStorage {
    static async database() {
        let db = await openDatabase("hangmanGame", "0.0.2", "Hangman data", 1*1024*1024*1024);
        db.transaction((tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS `user_info` (id TEXT PRIMARY KEY, value TEXT)", []);
            tx.executeSql("INSERT INTO `user_info` (id, value) VALUES (\"photo\", \"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\")", []);

            tx.executeSql("CREATE TABLE IF NOT EXISTS `estatisticas` (desc TEXT PRIMARY KEY, valor INT)", []);
            tx.executeSql("INSERT INTO `estatisticas` (desc, valor) VALUES (\"vitorias\", 0)", []);
            tx.executeSql("INSERT INTO `estatisticas` (desc, valor) VALUES (\"derrotas\", 0)", []);

            tx.executeSql("CREATE TABLE IF NOT EXISTS `conquistas` (id INTEGER PRIMARY KEY)", []);
        });
        return db;
    }
    static async setUserPhoto(base64data){
        let db = await this.database();
        db.transaction((tx) => {
            tx.executeSql("UPDATE `user_info` SET value = '"+base64data+"' WHERE id = 'photo'", []);
        });
    }
    static async win() {
        let db = await this.database();
        db.transaction((tx) => {
            tx.executeSql("UPDATE `estatisticas` SET valor = valor + 1 WHERE desc = 'vitorias'", [], console.log, console.log);
        });
        this.firstTime();
        this.firstWin();
    }
    static async lose() {
        let db = await this.database();
        db.transaction((tx) => {
            tx.executeSql("UPDATE `estatisticas` SET valor = valor+1 WHERE desc = 'derrotas'", []);
        });
        this.firstTime();
    }
    static async addConquista(id) {
        let db = await this.database();
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO `conquistas` (id) VALUES ("+id+")", []);
        });
    }
    static async firstTime() {
        await this.addConquista(1);
    }
    static async firstWin() {
        await this.addConquista(2);
    }
    static async thatWasClose() {
        await this.addConquista(3);
    }
    static async getUserPhoto(callback) {
        let db = await this.database();
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql("SELECT * FROM `user_info` WHERE id = 'photo'", [], (tx, data) => resolve(data.rows[0].value));
            });
        });
    }
    static async getWins(callback) {
        let db = await this.database();
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql("SELECT valor FROM `estatisticas` WHERE desc = 'vitorias'", [], (tx, data) => resolve(data.rows[0].valor));
            });
        });
    }
    static async getLoses(callback) {
        let db = await this.database();
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql("SELECT valor FROM `estatisticas` WHERE desc = 'derrotas'", [], (tx, data) => resolve(data.rows[0].valor));
            });
        });
    }
    static async getAchievements(callback) {
        let db = await this.database();
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql("SELECT id FROM `conquistas`", [], (tx, data) => resolve(data.rows));
            });
        });
    }
}