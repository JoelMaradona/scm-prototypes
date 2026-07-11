/* SCP Shell — Navigation interactivity */

document.addEventListener('DOMContentLoaded', () => {
  // Nav item active state
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Tab switching
  const tabs = document.querySelectorAll('.tab-bar__item');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabGroup = tab.closest('.tab-bar');
      tabGroup.querySelectorAll('.tab-bar__item').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show/hide tab panels if data-tab attribute exists
      const targetId = tab.dataset.tab;
      if (targetId) {
        const container = tab.closest('.tab-bar').parentElement;
        container.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
        const target = container.querySelector(`#${targetId}`);
        if (target) target.style.display = '';
      }
    });
  });
});
