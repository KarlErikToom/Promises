const statusRef = document.querySelector(".status")

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIP");
  });
}
// 1.Then
//getSubscriptionStatus().then((response) => console.log(response));

// 2. Async/Await
async function main() {
  const status = await getSubscriptionStatus()
  statusRef.innerHTML = status
}
main();
