const projects = {
  lc: {
    title: "LC System Enclosure — Case Study",
    timeline: ["POC", "Prototype", "Production"],
    metrics: [
      ["Redesign Cycles", "−30%"],
      ["Assembly Time", "−25%"],
      ["Service Access", "+40%"]
    ],
    problem: "The initial LC enclosure was not scalable or production-ready.",
    insight: "Early cross-functional alignment reduced rework and clarified trade-offs.",
    impact: "Delivered a production-ready enclosure enabling limited manufacturing."
  },

  pcr: {
    title: "PCR Machine — Case Study",
    timeline: ["POC", "Prototype", "Production"],
    metrics: [
      ["Thermal Stability", "+20%"],
      ["Service Time", "−30%"],
      ["Reliability", "Improved"]
    ],
    problem: "PCR systems required compact and thermally stable enclosures.",
    insight: "Workflow-driven design balanced thermal and service needs.",
    impact: "Validated enclosure ready for manufacturing."
  },

  shaker: {
    title: "Bacterial Shaker — Case Study",
    timeline: ["POC", "Prototype", "Production"],
    metrics: [
      ["Stability", "+35%"],
      ["Downtime", "−25%"],
      ["Durability", "Improved"]
    ],
    problem: "Continuous operation caused vibration and maintenance issues.",
    insight: "Rigid modular design reduced vibration and simplified servicing.",
    impact: "Delivered a robust enclosure for lab use."
  },

  pump: {
    title: "HPLC Piston Pump — Academic",
    metrics: [
      ["Mechanisms", "2"],
      ["Pressure", "High"],
      ["Trade-offs", "Documented"]
    ],
    problem: "HPLC requires precise high-pressure pumping.",
    insight: "Ball screw vs cam-follower revealed trade-offs.",
    impact: "Provided evaluated designs for informed selection."
  },

  speed: {
    title: "Car Speed Detection — Academic",
    metrics: [
      ["Accuracy", "±5%"],
      ["Cost", "Low"],
      ["Realtime", "Yes"]
    ],
    problem: "Manual speed monitoring was inaccurate.",
    insight: "Sensors + real-time processing enable accuracy.",
    impact: "Built and validated Arduino-based system."
  },

  web: {
    title: "Website Development — Academic",
    metrics: [
      ["Projects", "2"],
      ["Usability", "+40%"],
      ["Engagement", "+25%"]
    ],
    problem: "Small businesses lacked clear websites.",
    insight: "Task-focused design improves usability.",
    impact: "Delivered functional business websites."
  }
};

// OPEN MODAL
document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("click", () => {
    const data = projects[card.dataset.key];

    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-problem").innerText = data.problem;
    document.getElementById("modal-insight").innerText = data.insight;
    document.getElementById("modal-impact").innerText = data.impact;

    const metrics = document.getElementById("modal-metrics");
    metrics.innerHTML = "";
    data.metrics.forEach(m => {
      const div = document.createElement("div");
      div.className = "metric";
      div.innerHTML = `<strong>${m[1]}</strong>${m[0]}`;
      metrics.appendChild(div);
    });

    const timeline = document.getElementById("timeline");
    timeline.innerHTML = "";
    if (data.timeline) {
      data.timeline.forEach(stage => {
        const div = document.createElement("div");
        div.className = "stage";
        div.innerHTML = `<strong>${stage}</strong>`;
        timeline.appendChild(div);
      });
      timeline.style.display = "flex";
    } else {
      timeline.style.display = "none";
    }

    document.getElementById("modal").style.display = "block";
  });
});

// CLOSE MODAL
document.querySelector(".close").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

window.onclick = e => {
  if (e.target.id === "modal") {
    document.getElementById("modal").style.display = "none";
  }
};
