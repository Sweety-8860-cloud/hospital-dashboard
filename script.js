const patients = [
    {
      name: "John Doe",
      age: 34,
      appointmentDate: "2025-04-10",
      status: "Confirmed"
    },
    {
      name: "Jane Smith",
      age: 28,
      appointmentDate: "2025-04-12",
      status: "Pending"
    }
  ];
  
  const dashboard = document.getElementById("dashboard");
  
  patients.forEach(patient => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${patient.name}</h2>
      <p>Age: ${patient.age}</p>
      <p>Appointment: ${patient.appointmentDate}</p>
      <p>Status: ${patient.status}</p>
    `;
    dashboard.appendChild(card);
  });


  // Tabs switch logic
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
  }
  
  // Dummy Data
  const patients = [
    { name: "John Doe", age: 35, appointmentDate: "2025-04-10", status: "Confirmed" },
    { name: "Jane Smith", age: 29, appointmentDate: "2025-04-12", status: "Pending" }
  ];
  
  const staff = [
    { name: "Dr. Ahmed", role: "Cardiologist", shift: "Morning" },
    { name: "Nurse Sara", role: "ICU", shift: "Night" }
  ];
  
  const finance = [
    { invoice: "#001", patient: "John Doe", amount: "$200", status: "Paid" },
    { invoice: "#002", patient: "Jane Smith", amount: "$150", status: "Unpaid" }
  ];
  
  // Render Data
  function createCard(content) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = content;
    return card;
  }
  
  patients.forEach(p => {
    document.getElementById("patient-dashboard").appendChild(
      createCard("<h3>${p.name}</h3><p>Age: ${p.age}</p><p>Appointment: ${p.appointmentDate}</p><p>Status: ${p.status}</p>")
    );
  });
  
  staff.forEach(s => {
    document.getElementById("staff-dashboard").appendChild(
      createCard("<h3>${s.name}</h3><p>Role: ${s.role}</p><p>Shift: ${s.shift}</p>")
    );
  });
  
  finance.forEach(f => {
    document.getElementById("finance-dashboard").appendChild(
      createCard("<h3>${f.invoice}</h3><p>Patient: ${f.patient}</p><p>Amount: ${f.amount}</p><p>Status: ${f.status}</p>")
    );
  });


  function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    document.getElementById(tabId).classList.add('active');
  
    // Button active class switch
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const clickedButton = document.querySelector([onclick="showTab('${tabId}')"]);
    if (clickedButton) clickedButton.classList.add('active');
  }

  function fillPatientCard(p) {
    document.querySelector('.patient-name').textContent = p.name;
    document.querySelector('.patient-age').textContent = p.age;
    document.querySelector('.appointment-date').textContent = p.appointmentDate;
    document.querySelector('.status').textContent = p.status;
  }