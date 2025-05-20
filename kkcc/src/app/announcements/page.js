'use client';

import { useEffect } from 'react';

export default function AnnouncementsPage() {
  useEffect(() => {
    const body = document.body;
    body.style.margin = '0';
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.display = 'flex';
    body.style.background = '#f9f9f9';

    const sidebar = document.createElement('div');
    sidebar.style.width = '240px';
    sidebar.style.background = 'maroon';
    sidebar.style.color = 'white';
    sidebar.style.borderRight = '1px solid #ddd';
    sidebar.style.padding = '20px';
    sidebar.style.height = '100vh';

    const title = document.createElement('h2');
    title.textContent = 'KKC CLASSROOM';
    title.style.fontSize = '22px';
    title.style.marginBottom = '20px';
    title.style.fontWeight = 'bold';
    title.style.letterSpacing = '1px';
    sidebar.appendChild(title);

    const menuItems = [
      'Dashboard', 'My Courses', 'Live Sessions', 'Resources', 'Announcements',
      'Exams & Certifications', 'Benefits', 'QnA', 'Discussion', 'Profile & Settings', 'Billing'
    ];

    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';

    menuItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      li.style.padding = '10px 0';
      li.style.cursor = 'pointer';
      li.style.color = 'white';
      if (['Benefits', 'QnA', 'Discussion'].includes(item)) {
        const tag = document.createElement('span');
        tag.textContent = 'New';
        tag.style.background = '#c8c8f3';
        tag.style.fontSize = '10px';
        tag.style.padding = '2px 5px';
        tag.style.borderRadius = '3px';
        tag.style.marginLeft = '5px';
        tag.style.color = 'black';
        li.appendChild(tag);
      }
      ul.appendChild(li);
    });

    sidebar.appendChild(ul);
    document.body.appendChild(sidebar);

    const main = document.createElement('div');
    main.style.flex = '1';
    main.style.padding = '20px';

    const filterContainer = document.createElement('div');
    filterContainer.style.display = 'flex';
    filterContainer.style.justifyContent = 'space-between';
    filterContainer.style.marginBottom = '20px';

    const typeFilter = document.createElement('select');
    ['All Notifications', 'General Announcements', 'Course Specific'].forEach(text => {
      const option = document.createElement('option');
      option.value = text;
      option.textContent = text;
      typeFilter.appendChild(option);
    });

    const sortFilter = document.createElement('select');
    ['Newest First', 'Oldest First'].forEach(text => {
      const option = document.createElement('option');
      option.value = text;
      option.textContent = text;
      sortFilter.appendChild(option);
    });

    filterContainer.appendChild(typeFilter);
    filterContainer.appendChild(sortFilter);
    main.appendChild(filterContainer);

    const announcementContainer = document.createElement('div');
    main.appendChild(announcementContainer);

    document.body.appendChild(main);

    const announcements = [
      {
        title: "Don't know where to start? See our Study Guide here",
       // link: "https://docs.google.com/...",
        date: "2025-05-17",
        type: "General"
      },
      {
        title: "Welcome to the New KKC Classroom Experience",
      //  content: "We’ve rolled out a completely new design, gender-specific groups, and more.",
        date: "2025-05-16",
        type: "General"
      },
      {
        title: "New Q&A Form and Update Regarding Form Timing",
       // content: "Live Q&A on Friday, May 16th, 2025 at 4:15pm Kuwait time. Form closes Wednesday 9pm.",
       // link: "https://forms.gle/nXELn5ecV3K6tu7i7",
        date: "2025-05-15",
        type: "Course"
      }
    ];

    function renderAnnouncements() {
      const selectedType = typeFilter.value.split(' ')[0];
      const selectedSort = sortFilter.value;

      let filtered = announcements.filter(n => selectedType === 'All' || n.type === selectedType);

      filtered.sort((a, b) => {
        return selectedSort === 'Newest First'
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date);
      });

      announcementContainer.innerHTML = '';

      filtered.forEach(n => {
        const card = document.createElement('div');
        card.style.background = '#fff';
        card.style.borderLeft = '4px solid #6a5acd';
        card.style.padding = '15px';
        card.style.borderRadius = '6px';
        card.style.marginBottom = '15px';
        card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';

        const h4 = document.createElement('h4');
        h4.textContent = n.title;
        card.appendChild(h4);

        if (n.link) {
          const a = document.createElement('a');
          a.href = n.link;
          a.textContent = n.link;
          a.target = '_blank';
          card.appendChild(a);
          card.appendChild(document.createElement('br'));
        }

        if (n.content) {
          const p = document.createElement('p');
          p.textContent = n.content;
          card.appendChild(p);
        }

        const small = document.createElement('small');
        small.style.color = 'gray';
        small.textContent = `${new Date(n.date).toDateString()} - ${n.type} Announcement`;
        card.appendChild(small);

        announcementContainer.appendChild(card);
      });
    }

    typeFilter.addEventListener('change', renderAnnouncements);
    sortFilter.addEventListener('change', renderAnnouncements);
    renderAnnouncements();
  }, []);

  return <div />;
}