import "./loading-event";

export const submitForm = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const obj = validateInput({ name, email, message });
  if (!obj.err) {
    window.dispatchEvent(loadEvent);
    axios
      .post("./contactForm.php", obj, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((res) => {
        const { data } = res;

        showMessage(data);
        window.dispatchEvent(endLoadEvent);
      })
      .catch((e) => console.log(e));
  } else {
    const errHtml = document.getElementById("alertMessage");
    obj.err.map((v) => {
      const p = document.createElement("p");
      p.textContent = v;

      errHtml.appendChild(p);
    });
    errHtml.classList.add("alert-danger");
    errHtml.classList.remove("d-none");
  }
};

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;
//   const obj = validateInput({ name, email, message });
//   if (!obj.err) {
//     window.dispatchEvent(loadEvent);
//     axios
//       .post("./contactForm.php", obj, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })

//       .then((res) => {
//         const { data } = res;

//         showMessage(data);
//         window.dispatchEvent(endLoadEvent);
//       })
//       .catch((e) => console.log(e));
//   } else {
//     const errHtml = document.getElementById("alertMessage");
//     obj.err.map((v) => {
//       const p = document.createElement("p");
//       p.textContent = v;

//       errHtml.appendChild(p);
//     });
//     errHtml.classList.add("alert-danger");
//     errHtml.classList.remove("d-none");
//   }
// });

const showMessage = (data) => {
  const messageArea = document.getElementById("alertMessage");
  const p = document.createElement("p");
  !data.err
    ? (p.textContent = "Message Sent Succesfully")
    : (p.textContent = "Message was not sent");
  messageArea.appendChild(p);
  !data.err
    ? messageArea.classList.add("alert-success")
    : messageArea.classList.add("alert-danger");
  messageArea.classList.remove("d-none");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  setTimeout(() => {
    messageArea.classList.add("d-none");
    messageArea.classList.remove("alert-success");
  }, 3000);
};

const validateInput = (obj) => {
  const err = [];
  Object.entries(obj).forEach((entry) => {
    const [key, value] = entry;
    if (!value) {
      err.push(toTitleCase(key) + " field cannot be left empty");
    }
    return;
  });

  if (err.length > 0) {
    return { err };
  }
  return { ...obj };
};

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
