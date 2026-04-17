fetch('bicycles.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('bike-list');
    data.forEach(bike => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${bike.name}</h3>
        <p>Type: ${bike.type}</p>
      `;
      container.appendChild(div);
    });
  });
