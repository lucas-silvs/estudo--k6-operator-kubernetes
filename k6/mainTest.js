import { sleep, check } from "k6";
import http from "k6/http";

export const options = {
  vus: 10,
  duration: "5m",
};

export default () => {
  const res = http.get("https://test-api.k6.io");
  check(res, {
    "status is 200": () => res.status === 200,
  });
  sleep(1);
};
