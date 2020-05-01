class AppConverter{
  constructor(){
    this.toggleBtn = document.querySelector('.sideBtn');
    this.dotBtn = document.querySelector('.rating');
  }

  run(){
  this.toggleBtn.addEventListener('click',(new Hidden).navigation);
  this.dotBtn.addEventListener('click',(new Hidden).rightSide);
  }

}

class Hidden{
  constructor(){
    this.nav = document.querySelector('nav');
    this.rightBar = document.querySelector('.left-bar');
  }

  navigation = () => {
    this.nav.classList.toggle('show');
  }

  rightSide = () => {
    this.rightBar.classList.toggle('pop');
  }

}


let appHome = new AppConverter();
appHome.run();
