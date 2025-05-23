'use client';

import { useEffect } from 'react';

export default function AnnouncementsPage() {
  useEffect(() => {
    const body = document.body;
    body.style.margin = '0';
    body.style.fontFamily = 'Segoe UI, Helvetica Neue, sans-serif';
    body.style.display = 'flex';
    body.style.background = '#f1efe7';

    const sidebar = document.createElement('div');
    sidebar.style.width = '250px';
    sidebar.style.backgroundColor = '#ffffff';
    sidebar.style.padding = '20px';
    sidebar.style.height = '100vh';
    sidebar.style.boxShadow = '2px 0 5px rgba(0,0,0,0.05)';
    sidebar.style.display = 'flex';
    sidebar.style.flexDirection = 'column';
    sidebar.style.alignItems = 'center';

    const logo = document.createElement('img');
    logo.src = '/kkclogo.png';
    logo.alt = 'KKC Logo';
    logo.style.width = '150px';
    logo.style.marginBottom = '30px';
    sidebar.appendChild(logo);

    const notifLabel = document.createElement('h4');
    notifLabel.textContent = 'Notification Type';
    notifLabel.style.marginBottom = '10px';
    notifLabel.style.color = '#000';
    notifLabel.style.alignSelf = 'flex-start';

    const notifList = document.createElement('ul');
    notifList.style.listStyle = 'none';
    notifList.style.padding = '0';
    notifList.style.margin = '0';
    notifList.style.width = '100%';

    const notifOptions = ['All Notifications', 'General Announcements', 'Course Specific'];
    const typeFilter = document.createElement('select');
    notifOptions.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      li.style.padding = '10px';
      li.style.cursor = 'pointer';
      li.style.borderRadius = '5px';
      li.style.marginBottom = '5px';
      li.style.transition = 'background 0.3s';
      li.style.fontWeight = '500';
      li.style.textAlign = 'left';
      li.addEventListener('click', () => {
        typeFilter.value = text;
        renderAnnouncements();
      });
      li.addEventListener('mouseover', () => li.style.background = '#FFEDF2');
      li.addEventListener('mouseout', () => li.style.background = 'transparent');
      notifList.appendChild(li);

      const option = document.createElement('option');
      option.value = text;
      option.textContent = text;
      typeFilter.appendChild(option);
    });
    typeFilter.style.display = 'none';

    const sortLabel = document.createElement('h4');
    sortLabel.textContent = 'Sort By';
    sortLabel.style.marginTop = '30px';
    sortLabel.style.marginBottom = '10px';
    sortLabel.style.color = '#000';
    sortLabel.style.alignSelf = 'flex-start';

    const sortFilter = document.createElement('select');
    ['Newest First', 'Oldest First'].forEach(text => {
      const option = document.createElement('option');
      option.value = text;
      option.textContent = text;
      sortFilter.appendChild(option);
    });
    sortFilter.style.padding = '8px';
    sortFilter.style.borderRadius = '6px';
    sortFilter.style.border = '1px solid #ccc';
    sortFilter.style.width = '100%';
    sortFilter.style.marginBottom = '20px';
    sortFilter.addEventListener('change', renderAnnouncements);

    sidebar.appendChild(notifLabel);
    sidebar.appendChild(notifList);
    sidebar.appendChild(sortLabel);
    sidebar.appendChild(sortFilter);
    document.body.appendChild(sidebar);

    const main = document.createElement('div');
    main.style.flex = '1';
    main.style.padding = '40px';
    main.style.color = '#000000';
    main.style.background = '#fff';
    main.style.borderRadius = '12px';
    main.style.margin = '40px';
    main.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';

    const searchInput = document.createElement('input');
    searchInput.placeholder = 'Search notifications...';
    searchInput.style.width = '100%';
    searchInput.style.padding = '12px';
    searchInput.style.marginBottom = '30px';
    searchInput.style.borderRadius = '8px';
    searchInput.style.border = '1px solid #ccc';
    searchInput.style.fontSize = '16px';
    main.appendChild(searchInput);

    const announcementContainer = document.createElement('div');
    main.appendChild(announcementContainer);

    document.body.appendChild(main);

    const announcements = [
      {
        title: "Don't know where to start? See our Study Guide here",
        link: "https://docs.google.com/...",
        date: "2025-05-17",
        type: "General"
      },
      {
        title: "Welcome to the New KKC Classroom Experience",
        content: "We’ve rolled out a completely new design, gender-specific groups, and more.",
        date: "2025-05-16",
        type: "General"
      },
      {
        title: "New Q&A Form and Update Regarding Form Timing",
        content: "Live Q&A on Friday, May 16th, 2025 at 4:15pm Kuwait time. Form closes Wednesday 9pm.",
        link: "https://forms.gle/nXELn5ecV3K6tu7i7",
        date: "2025-05-15",
        type: "Course"
      }
    ];

    function renderAnnouncements() {
      const selectedType = typeFilter.value.split(' ')[0];
      const selectedSort = sortFilter.value;
      const query = searchInput.value.toLowerCase();

      let filtered = announcements.filter(n => {
        const matchesType = selectedType === 'All' || n.type === selectedType;
        const matchesSearch = n.title.toLowerCase().includes(query) || (n.content || '').toLowerCase().includes(query);
        return matchesType && matchesSearch;
      });

      filtered.sort((a, b) => {
        return selectedSort === 'Newest First'
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date);
      });

      announcementContainer.innerHTML = '';

      filtered.forEach(n => {
        const card = document.createElement('div');
        card.style.background = '#ffffff';
        card.style.borderLeft = '6px solid #FF637A';
        card.style.padding = '20px';
        card.style.borderRadius = '12px';
        card.style.marginBottom = '20px';
        card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
        card.style.transition = 'transform 0.2s';
        card.onmouseover = () => card.style.transform = 'translateY(-2px)';
        card.onmouseout = () => card.style.transform = 'translateY(0)';

        const h4 = document.createElement('h4');
        h4.textContent = n.title;
        h4.style.marginBottom = '10px';
        h4.style.color = '#000000';
        card.appendChild(h4);

        if (n.link) {
          const a = document.createElement('a');
          a.href = n.link;
          a.textContent = n.link;
          a.target = '_blank';
          a.style.color = '#FF637A';
          a.style.textDecoration = 'none';
          card.appendChild(a);
          card.appendChild(document.createElement('br'));
        }

        if (n.content) {
          const p = document.createElement('p');
          p.textContent = n.content;
          card.appendChild(p);
        }

        const small = document.createElement('small');
        small.style.color = '#555';
        small.textContent = `${new Date(n.date).toDateString()} - ${n.type} Announcement`;
        card.appendChild(small);

        announcementContainer.appendChild(card);
      });
    }

    typeFilter.addEventListener('change', renderAnnouncements);
    searchInput.addEventListener('input', renderAnnouncements);
    renderAnnouncements();
  }, []);

  return <div />;
}
