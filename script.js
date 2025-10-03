(function () {
    const $ = (sel) => document.querySelector(sel);

    const form = $('#serial-form');
    const input = $('#serial-input');
    const lookupSection = $('#lookup-section');
    const detailsSection = $('#details-section');

    const nameEl = $('#user-name');
    const phoneEl = $('#user-phone');
    const statusEl = $('#user-status');
    const serialEl = $('#user-serial');
    const photoEl = $('#user-photo');
    // Ensure initial state: details hidden, lookup visible
    if (detailsSection) { detailsSection.classList.add('hidden'); }
    if (lookupSection) { lookupSection.classList.remove('hidden'); }

    const demoDatabase = {
        '102349': {
            name: 'Sahithi P',
            phone: '+91 98765 43210',
            status: 'Active - Safe Mode',
            photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
            location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
        },
      '482913': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'739201': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'156487': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'920345': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'608214': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'347892': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'825690': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'591074': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'274608': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'963125': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'710846': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'458903': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'639782': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'802461': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'572930': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'394781': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'215609': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'681492': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'759304': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
},
'840256': { 
    name: 'Sahithi P',
    phone: '+91 98765 43210',
    status: 'Active - Safe Mode',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    location: { lat: 10.930231, lng: 78.746481, label: 'Dhanalakshmi Srinivasan University, Trichy' }
}

    };

    // Removed URL-based auto-show logic to keep first page clean

    function showDetailsForSerial(sn) {
        const record = demoDatabase[sn];
        if (!record) {
            alert('Serial not found. Please check the serial number and try again.');
            return;
        }

        lookupSection.classList.add('hidden');
        detailsSection.classList.remove('hidden');

        nameEl.textContent = record.name;
        phoneEl.textContent = record.phone;
        statusEl.textContent = record.status;
        serialEl.textContent = 'Serial: ' + sn;
        photoEl.src = record.photo;

        const map = L.map('map');
        const { lat, lng, label } = record.location;
        map.setView([lat, lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`<b>${record.name}</b><br>${label}`).openPopup();
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const sn = (input.value || '').trim();
        if (!sn) return;
        // Show details only after user submits the number
        showDetailsForSerial(sn);
    });

    // Do not auto-render details on initial load
})();


