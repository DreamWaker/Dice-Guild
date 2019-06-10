function Main() {

}
setInterval(Main,100);

function toggleTab(tabName,switchSource) {
  var tabs = document.getElementsByClassName(switchSource);
  var tab;
  for (var i = 0; i < tabs.length; i++) {
      tab = tabs.item(i);
      if (tab.id === tabName) {
          tab.style.display = 'block';
      } else {
          tab.style.display = 'none';
      }
  }
}
