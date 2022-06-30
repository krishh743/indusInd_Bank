export const register = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("serviceWorker registered successfully", reg);
        })
        .catch((err) => {
          console.log("serviceWorker failed to register successfully", err);
        });
    }
  };
  