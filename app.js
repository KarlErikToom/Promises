const statusRef = document.querySelector(".status");

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIP");
  });
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
}

main();
