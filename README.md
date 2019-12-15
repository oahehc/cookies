# Few Demos About How HTTP cookie attributes Work

Here is [the article on medium](https://medium.com/@oahehc/something-about-http-cookie-you-might-not-know-before-fcb4300af9b5) for the explanation.

--

## How to start

You can clone this repo and play around on your local environment

```
git clone ..
cd cookie
yarn install
yarn dev
```

or visit the online version - https://cookies.oahehc.now.sh

## Pages

- https://cookies.oahehc.now.sh/basic: Expires, Secure
  ```
  Cookies.set(name, value);
  Cookies.get(name);
  Cookies.remove(name);
  Cookies.set(name, value, { expires: 1 })
  Cookies.set(name, value, { secure: true })
  ```
- https://cookies.oahehc.now.sh/path: Domain, Path
  ```
  Cookies.set(name, value, { path: '/path' })
  Cookies.remove(name, value, { path: '/path' })
  ```
- https://cookies.oahehc.now.sh/http-only: HttpOnly
  ```
  Set-Cookie: name=value; HttpOnly
  ```
- https://cookies.oahehc.now.sh/same-site: SameSite
  ```
  Set-Cookie: name=value; SameSite=Strict
  ```

## Reference

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
- https://web.dev/samesite-cookies-explained
- https://github.com/js-cookie/js-cookie
