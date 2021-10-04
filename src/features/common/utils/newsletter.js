export function signupNewsletter(email) {
  const NEWSLETTER_URL = process.env.REACT_APP_MAILCHIMP_URL;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: myHeaders,
    body: JSON.stringify({ email }),
    redirect: "follow",
  };

  fetch(NEWSLETTER_URL, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log({ result });
    })
    .catch(error => {
      console.log(error);
      alert("something went wrong");
    });
}
