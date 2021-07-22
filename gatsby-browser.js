// scroll-to-top feature client side
class SideBarBtns {
  Initialize() {
    window.addEventListener('scroll', this.ToggleButtons);
    document
      .getElementById('scroll-btn')
      .addEventListener('click', this.ScrollToTop);
  }
  ToggleButtons() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      document.getElementById('scroll-btn').style.display = 'inline-block';
    } else {
      /** The scroll to top button is hidden */
      document.getElementById('scroll-btn').style.display = 'none';
    }
  }
  /** When the user clicks on the button, scroll to the top of the document */
  ScrollToTop() {
    /** The user is scrolled to the top of the page */
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({
      top: '0',
      behavior: 'smooth',
    });
  }
}

exports.onRouteUpdate = () => {
  let sidebarbtns = new SideBarBtns();
  if (document.getElementById('scroll-btn')) {
    sidebarbtns.Initialize();
  }
};
