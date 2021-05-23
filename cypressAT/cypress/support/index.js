import "./commands";

// For attaching screenshots to reports for failed tests
import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    let item = runnable;
    const nameParts = [runnable.title];

    // Iterate through all parents and grab the titles
    while (item.parent) {
      nameParts.unshift(item.parent.title);
      item = item.parent;
    }

    const fullTestName = nameParts.filter(Boolean).join(" -- ");
    const imageUrl = `screenshots/${Cypress.spec.name}/${fullTestName} (failed).png`;
    addContext({ test }, imageUrl);
  }
});
