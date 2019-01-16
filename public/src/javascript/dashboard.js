const me = document.getElementById('me');
const pic = document.getElementById('pic');
const name = document.getElementById('name');
const tab = document.getElementById('tabs');
const deadTabButtons = document.getElementsByClassName('dead-tab-button');

document.addEventListener('DOMContentLoaded', function () {
  const warn = document.querySelectorAll('.modal');
  const instances = M.Modal.init(warn[0], {});
});

document.addEventListener('DOMContentLoaded', function() {
  const drop = document.querySelectorAll('.dropdown-trigger');
  const tabs = document.querySelectorAll('.tabs');
  M.Dropdown.init(drop, {
    alignment: 'left',
    constrainWidth: false,
  });
  M.Tabs.init(tabs, {
    swipeable: false,
  });
});


// scroll animation/effect/positioning
document.addEventListener("scroll", function() {
  const scroller = window.scrollY;
  if (scroller < 75) {
    me.className = 'navigator me';
    pic.className = 'circle left pic z-depth-3 dropdown-trigger';
    name.className = 'name';
    tab.className = 'tabs'
  } else {
    me.className ='navigator me me-scroll';
    pic.className = 'circle left pic pic-scroll z-depth-3 dropdown-trigger';
    name.className = 'name name-scroll';
    tab.className = 'tabs tabs-scroll animated fadeInUp faster'
  }
});


// dead tab content hover effect
if(deadTabButtons) {
  const deadTabLogos = document.getElementsByClassName('dead-logo');

  for(let i = 0; i< deadTabButtons.length; i++) {
    deadTabButtons[i].addEventListener("mouseenter", function() {
      deadTabLogos[i].style.color = '#472C66';
      deadTabLogos[i].style.top = 'calc(50% - 205px)';
      deadTabLogos[i].className = 'dead-logo animated flip infinite slow';
    });

    deadTabButtons[i].addEventListener("mouseout", function() {
      deadTabLogos[i].style.color = '#dbdde2';
      deadTabLogos[i].style.top = 'calc(50% - 170px)';
      deadTabLogos[i].className = 'dead-logo';
    });
  }

}
